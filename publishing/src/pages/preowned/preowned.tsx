import React, { useCallback, useMemo, useState } from "react";
import { styled } from "styled-components";
import { useMutation, useQuery } from "@apollo/client";
import MYBUSINESSCHATCHANNELS from "../../graphql/preowned/query/my-business-chat-channels";
import { useNavigate } from "react-router-dom";
import ChatDetail from "./[id]";
import { DateTime } from "luxon";
import READCHATMESSAGE from "../../graphql/preowned/mutation/read-business-chat-message";
import BUSINESSCHATCHANNELS from "../../graphql/preowned/query/business-chat-channel";
import BUSINESSCHATMESSAGE from "../../graphql/preowned/query/business-chat-message";

interface ChatChannel {
  id: string;
  unreadMessageCount: number;
  updatedAt: string;
  secondhand: {
    author: {
      id: string;
      name: string;
    };
  };
  lastMessage: {
    id: string;
    message: string;
  };
}
interface ChatChannelEdge {
  node: ChatChannel;
}
export default function Preowned() {
  const convertDate = useCallback((date: string | undefined) => {
    if (date === undefined) return "-";
    const inputDateTime = DateTime.fromISO(date);
    const now = DateTime.now();
    const startOfToday = now.startOf("day");
    const yesterday = now.minus({ days: 1 }).startOf("day");

    if (
      inputDateTime >= startOfToday &&
      inputDateTime <= now.startOf("day").endOf("day")
    ) {
      return inputDateTime.setLocale("ko").toFormat("a h:mm");
    } else if (
      inputDateTime >= yesterday.startOf("day") &&
      inputDateTime <= yesterday.endOf("day")
    ) {
      return "어제";
    } else {
      return inputDateTime.toFormat("M월 d일");
    }
  }, []);
  const { data, loading } = useQuery(MYBUSINESSCHATCHANNELS, {
    variables: {
      sort: {
        updatedAt: {
          order: "DESCENDING",
        },
      },
    },
  });
  const [readMessage] = useMutation(READCHATMESSAGE);
  const navigate = useNavigate();
  const [btnActive, setBtnActive] = useState<number>(0);
  const toggleActive = (e: number) => {
    setBtnActive((prev) => {
      return e;
    });
  };

  const edges = useMemo(() => {
    return data?.myBusinessChatChannels?.edges;
  }, [data]);

  if (loading) {
    return <div>로딩중</div>;
  }
  return (
    <Layout>
      <TextHeader>
        <h3>중고거래</h3>
        <h1>채팅</h1>
      </TextHeader>
      <Chat>
        <ActiveChattingList>
          <ListTitle>
            <h2>진행중인 채팅 목록</h2>
            <span>{data?.myBusinessChatChannels?.totalCount}</span>
          </ListTitle>
          {edges &&
            edges.map((edge: ChatChannelEdge, i: number) => {
              return (
                <List
                  className={"list" + (i === btnActive ? " active" : "")}
                  key={i}
                  onClick={() => {
                    toggleActive(i);
                    navigate(`/preowned?id=${edge.node.id}`);
                    readMessage({
                      variables: { channelId: edge.node.id },
                      refetchQueries: [
                        MYBUSINESSCHATCHANNELS,
                        BUSINESSCHATCHANNELS,
                        BUSINESSCHATMESSAGE,
                      ],
                    });
                  }}
                >
                  <Content>
                    <ChattingListTitle>
                      <h3>{edge.node.secondhand.author.name}</h3>
                      <span>{convertDate(edge.node.updatedAt)}</span>
                    </ChattingListTitle>
                    <ChatContent>
                      <p>{edge.node.lastMessage.message}</p>
                      {edge.node.unreadMessageCount !== 0 ? (
                        <div className="unRead">
                          <span>{edge.node.unreadMessageCount}</span>
                        </div>
                      ) : (
                        ""
                      )}
                    </ChatContent>
                  </Content>
                  <div className="img">
                    <img src="" alt="" />
                    이미지
                  </div>
                </List>
              );
            })}
        </ActiveChattingList>
        <ChatDetail />
      </Chat>
    </Layout>
  );
}
const Layout = styled.div`
  width: 1280px;
  margin: auto;
  background-color: #f9f9f9;
`;
const TextHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 60px 0;
  h3 {
    color: #666;
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 100% */
  }
  h1 {
    color: #333;
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 100% */
  }
`;

const Chat = styled.div`
  display: flex;
  gap: 20px;
  .active {
    background: #eef5ff;
  }
`;

const ActiveChattingList = styled.div`
  width: 420px;
  border-radius: 10px;
  border: 1px solid #d8dde5;
  background: #fff;
  height: 800px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 5px;
    height: 2px;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

const ListTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 0 13px 24px;
  border-bottom: 1px solid #d8dde5;
  h2 {
    color: #333;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 166.667% */
  }
  span {
    color: #193dd0;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px; /* 166.667% */
  }
`;

const List = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border-bottom: 1px solid #d8dde5;
  cursor: pointer;
  .img {
    width: 60px;
    height: 60px;
    border-radius: 5px;
    border: 1px solid #d8dde5;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

const ChattingListTitle = styled.div`
  display: flex;
  width: 310px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  h3 {
    color: #333;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px; /* 100% */
  }
  span {
    color: #666;
    text-align: right;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px; /* 100% */
  }
`;
const ChatContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 310px;
  .unRead {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1px;
    width: 19px;
    height: 20px;
    border-radius: 6px;
    background: #004ef9;
    span {
      color: #fff;
      text-align: right;
      font-family: Pretendard Variable;
      font-size: 13px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
  p {
    text-overflow: ellipsis;
    overflow: hidden;
    width: 280px;
    color: #666;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px; /* 100% */
  }
`;
