import React, { useMemo, useState } from "react";
import UserImg from "../../assets/img/user.svg";
import Attach from "../../assets/img/Line.svg";
import ChattingList from "../../components/pre-owned.tsx/chatting-list";
import Modal from "../../components/pre-owned.tsx/modal";
import { styled } from "styled-components";
import { useQuery } from "@apollo/client";
import BUSINESSCHATCHANNELS from "../../graphql/notice/query/business-chat-channel";
import { useLocation, useSearchParams } from "react-router-dom";

const secondHandState = {
  ACTIVE: "판매중",
  RESERVATION: "거래 예약",
  END: "거래 완료",
};
enum ChatChannelState {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}
enum SecondhandStateEnum {
  ACTIVE = "ACTIVE",
  RESERVATION = "RESERVATION",
  END = "END",
}

interface ChatChannelDetail {
  state: ChatChannelState;
  secondhand: {
    title: string;
    content: string;
    price: number;
    state: SecondhandStateEnum;
    author: {
      name: string;
    };
    category: {
      name: string;
    };
  };
}

export default function ChatDetail() {
  const [searchParmas] = useSearchParams();
  const id = searchParmas.get("id")!;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<string>("");
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  const leaveChat = () => {
    closeModal();
    // setIsChatEnd(true);
  };

  const { data, loading } = useQuery(BUSINESSCHATCHANNELS, {
    variables: {
      businessChatChannelId: id,
    },
    context: {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiQUNDRVNTIiwiaWQiOiIxODlmZDc1Yy01MWYyLTRlOWUtOTcyMC0zYjk4ZGQ1Zjk5NjkiLCJwYXJlbnQiOiJmZWQ3OGQ0Zi1jM2MzLTRhYTMtOTdkMy0yNDUzMWU2Zjg2NzgiLCJpYXQiOjE2OTU3Nzg4MDcsImV4cCI6OTQ3MTc3ODgwNywiaXNzIjoia19maXJpIiwic3ViIjoiMTg5ZmQ3NWMtNTFmMi00ZTllLTk3MjAtM2I5OGRkNWY5OTY5IiwianRpIjoiMjc1MGUzMWUtMzc3MC00NDQxLWFjYmItZWRmMTJhZDVkODBiIn0.Q5puQEyGSWqcD0HbDqDMLnw0ggsGZuY96XU9eQa-7Z8gQXaUDd8ctfrzFgJeXr-eRaq6TuWMZiTtXqtUxsvDHw`,
      },
    },
  });

  const edge = useMemo(() => {
    return data?.businessChatChannel;
  }, [data]);

  if (loading) return <div>로딩</div>;

  return (
    <div>
      <Chatting>
        <ChattingTitle>
          <div className="content">
            <User>
              <img src={UserImg} alt="user" />
              <span>{edge.secondhand.author.name}</span>
            </User>
            <Buttons>
              <button
                onClick={() => {
                  window.confirm("신고하시겠습니끼?");
                }}
              >
                신고하기
              </button>
              <div className="line"></div>
              <button
                onClick={() => {
                  window.confirm("신고하시겠습니끼?");
                }}
              >
                차단하기
              </button>
              <div className="line"></div>
              <button onClick={openModal}>나가기</button>
            </Buttons>
          </div>
        </ChattingTitle>
        <Object>
          <ObjectContent>
            <div className="img">
              <img src="" alt="" />
              이미지
            </div>
            <ObjectText>
              <ObjectTitle>
                <span className="objectStatus">
                  {
                    secondHandState[
                      edge.secondhand.state as SecondhandStateEnum
                    ]
                  }
                </span>
                <span className="line">ㅣ</span>
                <span className="category">
                  {edge.secondhand.category.name}
                </span>
                <p>{edge.secondhand.content}</p>
              </ObjectTitle>
              <ObjectCost>
                <p>{edge.secondhand.price.toLocaleString()}원</p>
              </ObjectCost>
            </ObjectText>
          </ObjectContent>
        </Object>
        <ChattingList id={id} isEnd={edge.state} messages={messages} />
        {edge.state === "ACTIVE" ? (
          <MessageForm>
            <MessageContent>
              <MessageInput>
                <button>
                  <img src={Attach} alt="attach" />
                </button>
                <textarea
                  placeholder="메세지를 입력해주세요"
                  value={messages}
                  onChange={(e) => setMessages(e.currentTarget.value)}
                ></textarea>
              </MessageInput>
              <SendButton>
                <span>전송</span>
              </SendButton>
            </MessageContent>
          </MessageForm>
        ) : (
          ""
        )}
      </Chatting>
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        leaveChat={leaveChat}
      />
    </div>
  );
}

const Chatting = styled.div`
  width: 800px;
  height: 800px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #d8dde5;
  background: #fff;
`;

const ChattingTitle = styled.div`
  width: 800px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 10px 10px 0px 0px;
  border-bottom: 1px solid #d8dde5;
  background: #fff;
  .content {
    padding: 23px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  span {
    color: #555;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 14px; /* 100% */
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  .line {
    width: 1px;
    height: 10px;
    background-color: #d8dde5;
  }
  button {
    cursor: pointer;
    background: none;
    border: none;
    color: #666;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px; /* 100% */
  }
`;

const Object = styled.div`
  display: flex;
  width: 798px;
  height: 110px;
  flex-shrink: 0;
  background: #fafbff;
`;

const ObjectContent = styled.div`
  display: flex;
  gap: 15px;
  padding: 25px;
  .img {
    width: 60px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid #d8dde5;
  }
`;

const ObjectText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
const ObjectTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  .objectStatus {
    color: #333;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 112.5% */
  }
  .line {
    overflow: hidden;
    color: #666;
    text-overflow: ellipsis;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 128.571% */
  }
  .category {
    padding-bottom: 2px;
    color: #06f;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 128.571% */
  }
  p {
    padding-bottom: 2px;
    width: 500px;
    overflow: hidden;
    color: #666;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 128.571% */
  }
`;

const ObjectCost = styled.div`
  p {
    color: #444;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 100% */
  }
`;
const MessageForm = styled.div`
  position: absolute;
  bottom: 33px;
  width: 800px;
  height: 104px;
  border-top: 1px solid #d8dde5;
  margin-top: 180px;
`;

const MessageContent = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin: 22px 25px;
`;

const MessageInput = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f2f2f2;
  padding: 6px 20px;
  button {
    border: none;
    background: none;
    cursor: pointer;
  }
  textarea {
    width: 558px;
    padding-top: 16px;
    background: #f2f2f2;
    border: none;
    outline: none;
    color: #767676;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px; /* 100% */
    resize: none;
  }
`;

const SendButton = styled.button`
  display: flex;
  padding: 22px 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  background: #004ef9;
  border: none;
  cursor: pointer;
  span {
    color: #fff;
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: 17px; /* 94.444% */
  }
`;
