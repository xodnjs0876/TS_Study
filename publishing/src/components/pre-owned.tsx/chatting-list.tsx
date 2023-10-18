import React, { useCallback, useEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import Attach from "../../assets/img/attach.svg";
import Download from "../../assets/img/receive.svg";
import { downloadFile } from "../../function/download-file";
import { DateTime } from "luxon";
import { formatDate } from "../../function/format-date";
import Spinner from "../../assets/img/spinner_white.gif";
import {
  ChatMessageCardTypePayload,
  ChatMessageFileTypePayload,
  ChatMessageLinkTypePayload,
  ChatMessageType,
  ReceiveBusinessChatMessageDocument,
  ReceiveBusinessChatMessageSubscription,
  useBusinessChatMessagesQuery,
} from "../../graphql/graphql";

export default function ChattingList({
  messages,
  isEnd,
  id,
}: {
  messages: string;
  isEnd: string | undefined;
  id: string | undefined;
}) {
  const target = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const { data, loading, fetchMore, subscribeToMore } =
    useBusinessChatMessagesQuery({
      variables: {
        channelId: id!,
        first: 20,
      },
    });

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  const edges = useMemo(() => {
    return data && data?.businessChatMessages?.edges;
  }, [data]);

  const fetchMoreData = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (edges === undefined) return;
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        if (!data?.businessChatMessages.pageInfo.hasNextPage) return;

        fetchMore({
          variables: {
            after: data?.businessChatMessages?.pageInfo.endCursor,
          },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult) return prev;

            const hasId = new Set(
              prev?.businessChatMessages?.edges.map((edge) => edge?.node.id)
            );

            const newData = fetchMoreResult?.businessChatMessages?.edges.filter(
              (edge) => {
                return !hasId.has(edge?.node.id);
              }
            );

            return {
              ...prev,
              businessChatMessages: {
                ...prev.businessChatMessages,
                edges: [...prev.businessChatMessages.edges, ...newData],
                pageInfo: fetchMoreResult.businessChatMessages.pageInfo,
              },
            };
          },
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data?.businessChatMessages?.pageInfo.endCursor, edges, fetchMore]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(fetchMoreData);

    if (target.current) {
      observer.observe(target.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [fetchMoreData]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (id === undefined) return;
    subscribeToMore<ReceiveBusinessChatMessageSubscription>({
      document: ReceiveBusinessChatMessageDocument,
      variables: {
        channelId: id,
      },
      updateQuery: (prev, { subscriptionData }) => {
        return {
          ...prev,
          businessChatMessages: {
            ...prev.businessChatMessages,
            totalCount: prev.businessChatMessages.totalCount + 1,
            edges: [
              ...prev.businessChatMessages.edges,
              {
                node: subscriptionData.data.receiveBusinessChatMessage,
              },
            ],
          },
        };
      },
    });
  }, [id, subscribeToMore]);

  if (loading) {
    return (
      <Loading>
        <img src={Spinner} alt="spin" />
      </Loading>
    );
  }
  if (data === undefined) {
    return <div>데이터 없음</div>;
  }

  return (
    <Layout>
      <Chat ref={scrollRef}>
        {isEnd === "INACTIVE" && (
          <ChatEnd>
            <Line />
            <ChatEndTitle>
              <p>상대방이 대화를 종료하였습니다.</p>
            </ChatEndTitle>
            <Line />
          </ChatEnd>
        )}
        {edges &&
          edges.map((edge, index: number) => {
            if (edge === undefined) return "";
            const item = edge?.node;
            const isLastMessage = index === 0;
            const isMine = item?.channel.participants.filter(
              (i) => i.user.id === item?.author?.id
            )[0].isMine;

            const checkTime = () => {
              if (edges[index - 1]?.node.author?.id === item?.author?.id) {
                if (
                  edges[index - 1]?.node.createdAt &&
                  DateTime.fromISO(edges[index - 1]?.node.createdAt as string)
                    .minute === DateTime.fromISO(item?.createdAt).minute
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
                edges[index - 1]?.node.createdAt &&
                DateTime.fromISO(edges[index + 1]?.node.createdAt as string)
                  .minute === DateTime.fromISO(item?.createdAt).minute
              ) {
                if (edges[index + 1]?.node.author?.id !== item?.author?.id) {
                  return true;
                }
                if (edges[index + 1]?.node.author?.id === item?.author?.id) {
                  return false;
                }
              } else {
                return false;
              }
              return false;
            };
            const getPayloadData = () => {
              if (
                item?.type === ChatMessageType.File ||
                item?.type === ChatMessageType.Image ||
                item?.type === ChatMessageType.Video
              ) {
                const filePayload = item?.payload as ChatMessageFileTypePayload;

                return {
                  fileId: filePayload?.id,
                  fileName: filePayload?.filename,
                  fileSize: filePayload?.size,
                };
              } else if (item?.type === ChatMessageType.Card) {
                const filePayload = item?.payload as ChatMessageCardTypePayload;

                return {
                  fileName: filePayload?.image?.filename,
                  fileSize: filePayload?.image?.size,
                  fileUrl: filePayload?.image?.url,
                };
              } else {
                const filePayload = item?.payload as ChatMessageLinkTypePayload;

                return {
                  link: filePayload?.link,
                };
              }
            };
            const { fileId, fileName, fileSize, fileUrl, link } =
              getPayloadData();

            if (item === undefined) return "";
            if (isMine === true) {
              if (
                item?.type === ChatMessageType.File ||
                item?.type === ChatMessageType.Image ||
                item?.type === ChatMessageType.Video
              ) {
                return (
                  <MyChattingText key={index}>
                    <div className="side">
                      {isLastMessage &&
                        (item.unreadUserCount === 0 ? (
                          <span>읽음</span>
                        ) : (
                          <span>안 읽음</span>
                        ))}
                      {!checkTime() && (
                        <span className="time">
                          {formatDate(item.createdAt, true)}
                        </span>
                      )}
                    </div>
                    <MyFileSend>
                      <div className="attach">
                        <img src={Attach} alt="attach" />
                      </div>
                      <div className="fileContent">
                        <p className="fileName">{fileName}</p>
                        <span className="fileSize">
                          {fileSize ? (fileSize / 1024).toFixed(2) : 0}KB
                        </span>
                      </div>
                      <div className="download">
                        <button
                          onClick={() => {
                            if (fileId && fileName)
                              downloadFile(fileId, fileName);
                          }}
                        >
                          <img src={Download} alt="download" />
                        </button>
                      </div>
                    </MyFileSend>
                  </MyChattingText>
                );
              } else if (item.type === ChatMessageType.Link) {
                return (
                  <MyChattingText key={index}>
                    <div className="side">
                      {isLastMessage &&
                        (item.unreadUserCount === 0 ? (
                          <span>읽음</span>
                        ) : (
                          <span>안 읽음</span>
                        ))}
                      {!checkTime() && (
                        <span className="time">
                          {formatDate(item.createdAt, true)}
                        </span>
                      )}
                    </div>
                    <div className="chat">
                      <div className="text">
                        <a href={link}>{link && link}</a>
                      </div>
                    </div>
                  </MyChattingText>
                );
              } else if (item.type === ChatMessageType.Card) {
                return (
                  <MyChattingText key={index}>
                    <div className="side">
                      {isLastMessage &&
                        (item.unreadUserCount === 0 ? (
                          <span>읽음</span>
                        ) : (
                          <span>안 읽음</span>
                        ))}
                      {!checkTime() && (
                        <span className="time">
                          {formatDate(item.createdAt, true)}
                        </span>
                      )}
                    </div>
                    <MyFileSend>
                      <div className="attach">
                        <img src={fileUrl} alt="card" />
                      </div>
                      <div className="fileContent">
                        <p className="fileName">{fileName}</p>
                        <span className="fileSize">
                          {fileSize ? (fileSize / 1024).toFixed(2) : 0}KB
                        </span>
                      </div>
                    </MyFileSend>
                  </MyChattingText>
                );
              } else {
                return (
                  <MyChattingText key={index}>
                    <div className="side">
                      {isLastMessage &&
                        (item.unreadUserCount === 0 ? (
                          <span>읽음</span>
                        ) : (
                          <span>안 읽음</span>
                        ))}
                      {!checkTime() && (
                        <span className="time">
                          {formatDate(item.createdAt, true)}
                        </span>
                      )}
                    </div>
                    <div className="chat">
                      <div className="text">
                        <p>{item?.message}</p>
                      </div>
                    </div>
                  </MyChattingText>
                );
              }
            } else {
              if (
                item.type === "FILE" ||
                item.type === "IMAGE" ||
                item.type === "VIDEO"
              ) {
                return (
                  <OpponentChattingText key={index}>
                    <div className="content">
                      {checkName() && <span>{item?.author?.name}</span>}
                      <OpponentFileSend>
                        <div className="attach">
                          <img src={Attach} alt="attach" />
                        </div>
                        <div className="fileContent">
                          <span className="fileName">
                            {fileName ?? fileName}
                          </span>
                          <span className="fileSize">
                            {fileSize ? (fileSize / 1024).toFixed(2) : 0}KB
                          </span>
                        </div>
                        <div className="download">
                          <button
                            onClick={() => {
                              if (fileId && fileName)
                                downloadFile(fileId, fileName);
                            }}
                          >
                            <img src={Download} alt="download" />
                          </button>
                        </div>
                      </OpponentFileSend>
                    </div>
                    <div className="side">
                      {!checkTime() && (
                        <span className="time">
                          {formatDate(item.createdAt, true)}
                        </span>
                      )}
                    </div>
                  </OpponentChattingText>
                );
              } else if (item.type === ChatMessageType.Link) {
                return (
                  <OpponentChattingText key={index}>
                    <div className="content">
                      {checkName() && <span>{item?.author?.name}</span>}
                      <div className="chat">
                        <div className="text">
                          <a href={link}>{link && link}</a>
                        </div>
                      </div>
                    </div>
                    <div className="side">
                      {!checkTime() && (
                        <span className="time">
                          {formatDate(item.createdAt, true)}
                        </span>
                      )}
                    </div>
                  </OpponentChattingText>
                );
              } else if (item.type === ChatMessageType.Card) {
                return (
                  <OpponentChattingText key={index}>
                    <div className="content">
                      {checkName() && <span>{item?.author?.name}</span>}
                      <div className="chat">
                        <div className="text">
                          <span>타입:카드</span>
                        </div>
                      </div>
                    </div>
                    <div className="side">
                      {!checkTime() && (
                        <span className="time">
                          {formatDate(item.createdAt, true)}
                        </span>
                      )}
                    </div>
                  </OpponentChattingText>
                );
              } else {
                return (
                  <OpponentChattingText key={index}>
                    <div className="content">
                      {checkName() && <span>{item?.author?.name}</span>}
                      <div className="chat">
                        <div className="text">
                          <span>{item.message}</span>
                        </div>
                      </div>
                    </div>
                    <div className="side">
                      {!checkTime() && (
                        <span className="time">
                          {formatDate(item.createdAt, true)}
                        </span>
                      )}
                    </div>
                  </OpponentChattingText>
                );
              }
            }
          })}
        <div ref={target}></div>
      </Chat>
    </Layout>
  );
}
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 65%;
  @media screen and (max-width: 600px) {
    height: calc(100%-256px);
  }
  @media screen and (max-width: 380px) {
    height: calc(100%-256px);
  }
`;
const Chat = styled.div`
  display: flex;
  flex-direction: column-reverse;
  overflow-y: auto;
  overflow-x: hidden;
`;
const MyChattingText = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 8px;
  margin: 4px 0;
  margin-right: 30px;
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
      padding: 20px 25px;
      gap: 15px;
      border-radius: 10px 10px 0px 10px;
      background: #333;
      white-space: pre-line;
      a {
        color: #fff;
        overflow-wrap: break-word;
        word-break: break-word;
      }
      p {
        overflow-wrap: break-word;
        word-break: break-word;
        color: #fff;
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 14px; /* 100% */
      }
    }
  }
  @media screen and (max-width: 600px) {
    width: 100vw;
    .side {
      span {
        color: var(--unnamed, #193dd0);
        font-feature-settings: "clig" off, "liga" off;
        font-family: Pretendard;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%; /* 12px */
      }
    }
    .chat {
      margin-right: 26px;
      .text {
        max-width: 150px;
        padding: 15px;
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
      margin-bottom: 2px;
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
      a {
        overflow-wrap: break-word;
        word-break: break-word;
      }
    }
  }
  @media screen and (max-width: 600px) {
    width: 360px;
    padding-left: 26px;
    .chat {
      .text {
        max-width: 150px;
        padding: 15px;
      }
    }
  }
`;
const Line = styled.div`
  width: 260px;
  height: 1px;
  flex-shrink: 0;
  background: #d8dde5;
  @media screen and (max-width: 600px) {
    width: 60px;
  }
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
  justify-content: center;
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
  @media screen and (max-width: 600px) {
    padding: 15px;
    .fileContent {
      .fileName {
        white-space: pre-wrap;
        max-width: 98px;
      }
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
    background: #193dd0;
    border-radius: 15px;
    width: 45px;
    height: 45px;
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
  @media screen and (max-width: 600px) {
    margin-right: 26px;
    padding: 15px;
    .fileContent {
      .fileName {
        max-width: 98px;
        white-space: pre-wrap;
      }
    }
  }
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 500px;
  @media screen and (max-width: 600px) {
    width: 100vw;
    height: 100vw;
  }
`;
