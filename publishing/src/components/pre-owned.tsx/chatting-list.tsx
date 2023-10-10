import React, { useEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import Attach from "../../assets/img/attach.svg";
import Download from "../../assets/img/receive.svg";
import { useQuery } from "@apollo/client";
import BUSINESSCHATMESSAGE from "../../graphql/preowned/query/business-chat-message";
import { downloadFile } from "../../function/download-file";
import { DateTime } from "luxon";
import RECEIVECHATMESSAGE from "../../graphql/preowned/subscriptions/receive-business-chat-message";

enum MessageType {
  SYSTEM = "SYSTEM",
  TEXT = "TEXT",
  IMAGE = "IMAGE",
  FILE = "FILE",
  VIDEO = "VIDEO",
  LINK = "LINK",
  CARD = "CARD",
}
interface ChatMessage {
  unreadUserCount: number;
  message: string;
  createdAt: string;
  type: MessageType;
  author: {
    id: string;
    name: string;
  };
  payload: {
    id: string;
    size: number;
    filename: string;
    url: string;
    link: string;
  };
  channel: {
    secondhand: {
      author: {
        id: string;
        name: string;
      };
    };
    participants: [
      {
        isMine: boolean;
        user: {
          id: string;
          name: string;
        };
      }
    ];
  };
}
interface ChatEdge {
  node: ChatMessage;
}

interface Subscription {
  totalCount: number;
  edges: ChatEdge[];
}
interface Prev {
  prev: Subscription;
}

export default function ChattingList({
  messages,
  isEnd,
  id,
}: {
  messages: string;
  isEnd: string;
  id: string;
}) {
  const { data, subscribeToMore } = useQuery(BUSINESSCHATMESSAGE, {
    variables: {
      channelId: id,
      sort: {
        createdAt: {
          order: "ASCENDING",
        },
      },
    },
  });
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, data]);

  useEffect(() => {
    subscribeToMore<Subscription>({
      document: RECEIVECHATMESSAGE,
      variables: { channelId: id },
      updateQuery: (prev, { subscriptionData }) => {
        //prev 이전 데이터 subdata 받아올 데이터
        if (!subscriptionData.data) return prev;
        return {
          ...prev,
          businessChatMessages: {
            ...prev.businessChatMessages,
            totalCount: prev.businessChatMessages?.totalCount + 1,
            edges: [
              ...prev.businessChatMessages.edges,
              {
                node: subscriptionData.data.edges,
              },
            ],
          },
        };
      },
    });
  }, [id, subscribeToMore]);

  const edges = useMemo(() => {
    return data?.businessChatMessages?.edges;
  }, [data]);

  return (
    <Layout $isEnd={isEnd} ref={scrollRef}>
      {edges &&
        edges.map((edge: ChatEdge, index: number) => {
          const isLastMessage = edges.length - 1 === index;
          const checkTime = () => {
            if (edges[index + 1]?.node.author?.id === edge.node.author?.id) {
              if (
                edges[index + 1]?.node.createdAt &&
                DateTime.fromISO(edges[index + 1]?.node.createdAt as string)
                  .minute === DateTime.fromISO(edge.node.createdAt).minute
              ) {
                return true;
              } else {
                return false;
              }
            } else {
              return false;
            }
          };
          const checkName = () => {
            if (
              edges[index + 1]?.node.createdAt &&
              DateTime.fromISO(edges[index + 1]?.node.createdAt as string)
                .minute === DateTime.fromISO(edge.node.createdAt).minute
            ) {
              if (edges[index - 1]?.node.author?.id !== edge.node.author?.id) {
                return true;
              }
              if (edges[index - 1]?.node.author?.id === edge.node.author?.id) {
                return false;
              }
            } else {
              return false;
            }
            return false;
          };
          if (
            edge.node.channel.participants.filter(
              (i) => i.user.id === edge.node.author.id
            )[0].isMine === true
          ) {
            if (
              edge.node.type === "FILE" ||
              edge.node.type === "IMAGE" ||
              edge.node.type === "VIDEO"
            ) {
              return (
                <MyChattingText>
                  <div className="side">
                    {isLastMessage &&
                      (edge.node.unreadUserCount === 0 ? (
                        <span>읽음</span>
                      ) : (
                        <span>안 읽음</span>
                      ))}
                    {!checkTime() && (
                      <span className="time">
                        {DateTime.fromISO(edge.node.createdAt)
                          .setLocale("ko")
                          .toFormat("a h:mm")}
                      </span>
                    )}
                  </div>
                  <MyFileSend>
                    <div className="attach">
                      <img src={Attach} alt="attach" />
                    </div>
                    <div className="fileContent">
                      <span className="fileName">
                        {edge.node.payload?.filename}
                      </span>
                      <span className="fileSize">
                        {(edge.node.payload?.size / 1024).toFixed(2)}KB
                      </span>
                    </div>
                    <div className="download">
                      <button
                        onClick={() =>
                          downloadFile(
                            edge.node.payload.id,
                            edge.node.payload.filename
                          )
                        }
                      >
                        <img src={Download} alt="download" />
                      </button>
                    </div>
                  </MyFileSend>
                </MyChattingText>
              );
            } else if (edge.node.type === "LINK") {
              return (
                <MyChattingText>
                  <div className="side">
                    {isLastMessage &&
                      (edge.node.unreadUserCount === 0 ? (
                        <span>읽음</span>
                      ) : (
                        <span>안 읽음</span>
                      ))}
                    {!checkTime() && (
                      <span className="time">
                        {DateTime.fromISO(edge.node.createdAt)
                          .setLocale("ko")
                          .toFormat("a h:mm")}
                      </span>
                    )}
                  </div>
                  <div className="chat">
                    <div className="text">
                      <a href={edge.node.payload.link}>
                        {edge.node.payload.link}
                      </a>
                    </div>
                  </div>
                </MyChattingText>
              );
            } else if (edge.node.type === "CARD") {
              return (
                <MyChattingText>
                  <div className="side">
                    {isLastMessage &&
                      (edge.node.unreadUserCount === 0 ? (
                        <span>읽음</span>
                      ) : (
                        <span>안 읽음</span>
                      ))}
                    {!checkTime() && (
                      <span className="time">
                        {DateTime.fromISO(edge.node.createdAt)
                          .setLocale("ko")
                          .toFormat("a h:mm")}
                      </span>
                    )}
                  </div>
                  <div className="chat">
                    <div className="text">
                      <span>타입:카드</span>
                    </div>
                  </div>
                </MyChattingText>
              );
            } else {
              return (
                <MyChattingText>
                  <div className="side">
                    {isLastMessage &&
                      (edge.node.unreadUserCount === 0 ? (
                        <span>읽음</span>
                      ) : (
                        <span>안 읽음</span>
                      ))}
                    {!checkTime() && (
                      <span className="time">
                        {DateTime.fromISO(edge.node.createdAt)
                          .setLocale("ko")
                          .toFormat("a h:mm")}
                      </span>
                    )}
                  </div>
                  <div className="chat">
                    <div className="text">
                      <span>{edge.node.message}</span>
                    </div>
                  </div>
                </MyChattingText>
              );
            }
          } else {
            if (
              edge.node.type === "FILE" ||
              edge.node.type === "IMAGE" ||
              edge.node.type === "VIDEO"
            ) {
              return (
                <OpponentChattingText>
                  <div className="content">
                    {checkName() && <span>{edge.node.author.name}</span>}
                    <OpponentFileSend>
                      <div className="attach">
                        <img src={Attach} alt="attach" />
                      </div>
                      <div className="fileContent">
                        <span className="fileName">
                          {edge.node.payload.filename}
                        </span>
                        <span className="fileSize">
                          {(edge.node.payload?.size / 1024).toFixed(2)}KB
                        </span>
                      </div>
                      <div className="download">
                        <button
                          onClick={() =>
                            downloadFile(
                              edge.node.payload.id,
                              edge.node.payload.filename
                            )
                          }
                        >
                          <img src={Download} alt="download" />
                        </button>
                      </div>
                    </OpponentFileSend>
                  </div>
                  <div className="side">
                    {!checkTime() && (
                      <span className="time">
                        {DateTime.fromISO(edge.node.createdAt)
                          .setLocale("ko")
                          .toFormat("a h:mm")}
                      </span>
                    )}
                  </div>
                </OpponentChattingText>
              );
            } else if (edge.node.type === "LINK") {
              return (
                <OpponentChattingText>
                  <div className="content">
                    {checkName() && <span>{edge.node.author.name}</span>}
                    <div className="chat">
                      <div className="text">
                        <a href={edge.node.payload.link}>
                          {edge.node.payload.link}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="side">
                    {!checkTime() && (
                      <span className="time">
                        {DateTime.fromISO(edge.node.createdAt)
                          .setLocale("ko")
                          .toFormat("a h:mm")}
                      </span>
                    )}
                  </div>
                </OpponentChattingText>
              );
            } else if (edge.node.type === "CARD") {
              return (
                <OpponentChattingText>
                  <div className="content">
                    {checkName() && <span>{edge.node.author.name}</span>}
                    <div className="chat">
                      <div className="text">
                        <span>타입:카드</span>
                      </div>
                    </div>
                  </div>
                  <div className="side">
                    {!checkTime() && (
                      <span className="time">
                        {DateTime.fromISO(edge.node.createdAt)
                          .setLocale("ko")
                          .toFormat("a h:mm")}
                      </span>
                    )}
                  </div>
                </OpponentChattingText>
              );
            } else {
              return (
                <OpponentChattingText>
                  <div className="content">
                    {checkName() && <span>{edge.node.author.name}</span>}
                    <div className="chat">
                      <div className="text">
                        <span>{edge.node.message}</span>
                      </div>
                    </div>
                  </div>
                  <div className="side">
                    {!checkTime() && (
                      <span className="time">
                        {DateTime.fromISO(edge.node.createdAt)
                          .setLocale("ko")
                          .toFormat("a h:mm")}
                      </span>
                    )}
                  </div>
                </OpponentChattingText>
              );
            }
          }
        })}
      {isEnd === "INACTIVE" ? (
        <div>
          <ChatEnd>
            <Line />
            <ChatEndTitle>
              <p>상대방이 대화를 종료하였습니다.</p>
            </ChatEndTitle>
            <Line />
          </ChatEnd>
        </div>
      ) : (
        ""
      )}
    </Layout>
  );
}
const Layout = styled.div<{ $isEnd: string }>`
  overflow: auto;
  height: ${(props) => (props.$isEnd === "ACTIVE" ? "51vh" : "60vh")};
`;
const MyChattingText = styled.div`
  width: 760px;
  display: inline-flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 8px;
  margin: 4px 0;
  .side {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 8px;
    .time {
      color: #898989;
      font-feature-settings: "clig" off, "liga" off;
      font-family: Spoqa Han Sans Neo;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%; /* 14px */
    }
    span {
      color: #193dd0;
      font-feature-settings: "clig" off, "liga" off;
      font-family: Pretendard;
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%; /* 15px */
    }
  }
  .chat {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .text {
      max-width: 320px;
      display: flex;
      padding: 20px 25px;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 15px;
      border-radius: 10px 10px 0px 10px;
      background: #333;
      white-space: pre-line;
      a {
        color: #fff;
      }
      span {
        color: #fff;
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 14px; /* 100% */
      }
    }
  }
`;

const OpponentChattingText = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  padding-left: 30px;
  margin: 4px 0;
  .side {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .time {
      color: #898989;
      font-feature-settings: "clig" off, "liga" off;
      font-family: Spoqa Han Sans Neo;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%; /* 14px */
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    span {
      color: #666;
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 14px; /* 100% */
    }
    .chat {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .text {
      max-width: 320px;
      display: flex;
      padding: 20px 25px;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 15px;
      border-radius: 0px 10px 10px 10px;
      background: #edf3fd;
      white-space: pre-line;
      span {
        color: #666;
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 14px; /* 100% */
      }
    }
  }
`;
const Line = styled.div`
  width: 260px;
  height: 1px;
  flex-shrink: 0;
  background: #d8dde5;
`;

const ChatEndTitle = styled.div`
  p {
    overflow: hidden;
    color: #666;
    text-align: center;
    text-overflow: ellipsis;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    white-space: nowrap;
  }
`;

const ChatEnd = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  margin: 0 20px;
  margin-top: 70px;
`;

const OpponentFileSend = styled.div`
  display: flex;
  padding: 20px 25px;
  align-items: center;
  gap: 15px;
  border-radius: 0px 10px 10px 10px;
  background: #edf3fd;
  .attach {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    background: #193dd0;
    border-radius: 15px;
  }
  .fileContent {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-top: 4px;
    .fileName {
      color: #333;
      font-family: Pretendard Variable;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 14px; /* 100% */
      white-space: nowrap;
    }
    .fileSize {
      color: #7f8fa9;
      font-family: Pretendard Variable;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 14px; /* 100% */
    }
  }
  .download {
    button {
      border: none;
      background: none;
      cursor: pointer;
    }
  }
`;

const MyFileSend = styled.div`
  display: flex;
  padding: 20px 25px;
  align-items: center;
  gap: 15px;
  border-radius: 10px 10px 0px 10px;
  background: #edf3fd;
  .attach {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 11px 15px;
    background: #193dd0;
    border-radius: 15px;
  }
  .fileContent {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-top: 4px;
    .fileName {
      color: #333;
      font-family: Pretendard Variable;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 14px; /* 100% */
      white-space: nowrap;
    }
    .fileSize {
      color: #7f8fa9;
      font-family: Pretendard Variable;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 14px; /* 100% */
    }
  }
  .download {
    button {
      border: none;
      background: none;
      cursor: pointer;
    }
  }
`;
