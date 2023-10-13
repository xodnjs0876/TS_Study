import React, { useEffect, useMemo, useState } from "react";
import { styled } from "styled-components";
import { useMutation, useQuery } from "@apollo/client";
import MYBUSINESSCHATCHANNELS from "../../graphql/preowned/query/my-business-chat-channels";
import { useNavigate, useParams } from "react-router-dom";
import ChatDetail from "./[id]";
import READCHATMESSAGE from "../../graphql/preowned/mutation/read-business-chat-message";
import BUSINESSCHATCHANNELS from "../../graphql/preowned/query/business-chat-channel";
import { formatDate } from "../../function/format-date";
import Spinner from "../../assets/img/spinner.gif";

interface ChatChannel {
  id: string;
  unreadMessageCount: number;
  updatedAt: string;
  secondhand: {
    images: [
      {
        url: string;
      }
    ];
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
  const navigate = useNavigate();
  const params = useParams();

  const [channelId, setBtnActive] = useState<string>("");

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

  const edges = useMemo(() => {
    return data?.myBusinessChatChannels?.edges ?? [];
  }, [data]);

  useEffect(() => {
    if (!params.id) {
      setBtnActive("");
    }
  }, [params.id]);

  if (loading) {
    return (
      <Loading>
        <img src={Spinner} alt="spin" />
      </Loading>
    );
  }
  return (
    <Layout>
      <TextHeader>
        <h3>중고거래</h3>
        <h1>채팅</h1>
      </TextHeader>
      <Chat>
        <ActiveChattingList id={channelId}>
          <ListTitle>
            <h2>진행중인 채팅 목록</h2>
            <span>{data?.myBusinessChatChannels?.totalCount}</span>
          </ListTitle>
          {edges &&
            edges.map((edge: ChatChannelEdge, i: number) => {
              const item = edge.node;
              const id = item.id;

              if (item === undefined) return <></>;

              return (
                <List
                  className={"list" + (id === channelId ? " active" : "")}
                  key={i}
                  onClick={() => {
                    setBtnActive(id);
                    navigate(`/preowned/${id}`);
                    readMessage({
                      variables: { channelId: id },
                      refetchQueries: [
                        MYBUSINESSCHATCHANNELS,
                        BUSINESSCHATCHANNELS,
                      ],
                    });
                  }}
                >
                  <Content>
                    <ChattingListTitle>
                      <h3>{item.secondhand?.author.name}</h3>
                      <span>{formatDate(item.updatedAt, false)}</span>
                    </ChattingListTitle>
                    <ChatContent>
                      <p>{item.lastMessage?.message}</p>
                      {item.unreadMessageCount !== 0 && (
                        <div className="unRead">
                          <span>{item.unreadMessageCount}</span>
                        </div>
                      )}
                    </ChatContent>
                  </Content>
                  <div>
                    <img src={item.secondhand?.images[0].url} alt="img" />
                  </div>
                </List>
              );
            })}
        </ActiveChattingList>
        <Detail id={channelId}>
          {channelId ? (
            <ChatDetail />
          ) : (
            <NotChatting>
              <Text>
                <span>진행중인 채팅방이 없음</span>
              </Text>
            </NotChatting>
          )}
        </Detail>
      </Chat>
    </Layout>
  );
}
const Layout = styled.div`
  width: 1280px;
  margin: auto;
  background-color: #f9f9f9;

  @media screen and (max-width: 600px) {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
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
    line-height: 18px;
  }
  h1 {
    color: #333;
    text-align: center;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
  }
  @media screen and (max-width: 600px) {
    padding: 109px 0 78px 75px;
    display: flex;
    align-items: flex-start;
    h3 {
      color: #444;
      font-feature-settings: "clig" off, "liga" off;
      font-family: Pretendard;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
      text-align: left;
    }
    h1 {
      display: none;
    }
  }
`;

const Chat = styled.div`
  display: flex;
  gap: 20px;
  .active {
    background: #eef5ff;
  }
`;

const ActiveChattingList = styled.div<{ id: string }>`
  width: 420px;
  border-radius: 10px;
  border: 1px solid #d8dde5;
  background: #fff;
  height: 800px;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 5px;
    height: 2px;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }

  @media screen and (max-width: 600px) {
    display: ${(props) => (props.id ? "none" : "")};
    width: 100vw;
    height: 100vh;
    border-radius: 0px;
    justify-content: center;
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

  @media screen and (max-width: 600px) {
    padding: 17px 0 17px 20px;
    h2 {
      color: #333;
      font-feature-settings: "clig" off, "liga" off;
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 16px; /* 100% */
    }
    span {
      color: var(--unnamed, #193dd0);
      font-feature-settings: "clig" off, "liga" off;
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 16px; /* 100% */
    }
  }
`;

const List = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 21px;
  border-bottom: 1px solid #d8dde5;
  cursor: pointer;
  img {
    border: 1px solid #d8dde5;
    width: 60px;
    height: 60px;
    border-radius: 5px;
    box-sizing: border-box;
  }

  @media screen and (max-width: 600px) {
    padding: 20px;
    margin: auto;
    justify-content: center;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const ChattingListTitle = styled.div`
  display: flex;
  width: 310px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  padding-top: 5px;
  h3 {
    color: #333;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
  }
  span {
    color: #666;
    text-align: right;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
  }
  @media screen and (max-width: 600px) {
    width: 265px;
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
    line-height: 14px;
  }
  @media screen and (max-width: 600px) {
    width: 265px;
  }
`;
const NotChatting = styled.div`
  width: 800px;
  height: 800px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #d8dde5;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.div`
  span {
    font-family: Pretendard;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
  }
`;

const Detail = styled.div<{ id: string }>`
  @media screen and (max-width: 600px) {
    display: ${(props) => (props.id ? "" : "none")};
  }
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 600px) {
    width: 100vw;
    height: 100vw;
  }
`;
