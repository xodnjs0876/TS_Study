import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import UserImg from "../../assets/img/user.svg";
import Attach from "../../assets/img/Line.svg";
import Back from "../../assets/img/backArrow.svg";
import ChattingList from "../../components/pre-owned.tsx/chatting-list";
import Modal from "../../components/pre-owned.tsx/modal";
import { styled } from "styled-components";
import { useMutation, useQuery } from "@apollo/client";
import BUSINESSCHATCHANNELS from "../../graphql/preowned/query/business-chat-channel";
import { useNavigate, useParams } from "react-router-dom";
import SENDCHATMESSAGE from "../../graphql/preowned/mutation/send-business-chat-message";
import BUSINESSCHATMESSAGE from "../../graphql/preowned/query/business-chat-message";
import MYBUSINESSCHATCHANNELS from "../../graphql/preowned/query/my-business-chat-channels";
import { uploadFile } from "../../function/upload-file";

const secondHandState = {
  ACTIVE: "판매중",
  RESERVATION: "거래 예약",
  END: "거래 완료",
};

enum SecondhandStateEnum {
  ACTIVE = "ACTIVE",
  RESERVATION = "RESERVATION",
  END = "END",
}

export default function ChatDetail() {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<string>("");

  const fileInput = useRef<HTMLInputElement>(null);

  const { data, loading } = useQuery(BUSINESSCHATCHANNELS, {
    variables: {
      businessChatChannelId: id,
    },
  });
  const [sendMessage] = useMutation(SENDCHATMESSAGE);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const leaveChat = () => {
    closeModal();
  };

  const onClickUpload = useCallback(() => {
    fileInput.current?.click();
  }, []);

  useEffect(() => {
    setMessages("");
  }, [id]);

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
              <button
                onClick={() => {
                  navigate("/preowned");
                }}
              >
                <img src={Back} alt="back" />
              </button>
              <img className="user" src={UserImg} alt="user" />
              <span>{edge?.secondhand.author.name}</span>
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
                  window.confirm("차단하시겠습니끼?");
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
            <div>
              <img src={edge?.secondhand.images[0].url} alt="secondhandImg" />
            </div>
            <ObjectText>
              <ObjectTitle>
                <span className="objectStatus">
                  {
                    secondHandState[
                      edge?.secondhand.state as SecondhandStateEnum
                    ]
                  }
                </span>
                <span className="line">ㅣ</span>
                <span className="category">
                  {edge?.secondhand.category.name}
                </span>
                <p>{edge?.secondhand.content}</p>
              </ObjectTitle>
              <ObjectCost>
                <p>{edge?.secondhand?.price.toLocaleString()}원</p>
              </ObjectCost>
            </ObjectText>
          </ObjectContent>
        </Object>
        <ChattingList id={id} isEnd={edge?.state} messages={messages} />
        {edge?.state === "ACTIVE" && (
          <MessageForm>
            <MessageContent>
              <MessageInput>
                <button onClick={onClickUpload}>
                  <img src={Attach} alt="attach" />
                </button>
                <input
                  type="file"
                  multiple
                  hidden
                  ref={fileInput}
                  onChange={async (e) => {
                    e.preventDefault();
                    e.persist();
                    const files: File[] = [];
                    const fileData = e.target.files;
                    if (fileData === null) return;
                    for (const file of fileData) {
                      files.push(file);
                    }
                    const res = await uploadFile(files);
                    if (res === undefined) return;
                    const file = JSON.stringify(res[0]);
                    await sendMessage({
                      variables: {
                        data: {
                          channelId: id,
                          type: "FILE",
                          payload: file,
                        },
                      },
                      refetchQueries: [
                        BUSINESSCHATCHANNELS,
                        MYBUSINESSCHATCHANNELS,
                        BUSINESSCHATMESSAGE,
                      ],
                    });
                  }}
                />
                <textarea
                  placeholder="메세지를 입력해주세요"
                  value={messages}
                  onChange={(e) => setMessages(e.currentTarget.value)}
                ></textarea>
              </MessageInput>
              <SendButton
                disabled={messages === ""}
                onClick={() => {
                  sendMessage({
                    variables: {
                      data: {
                        channelId: id,
                        message: messages,
                        type: "TEXT",
                      },
                    },
                    refetchQueries: [
                      BUSINESSCHATCHANNELS,
                      MYBUSINESSCHATCHANNELS,
                    ],
                  });
                  setMessages("");
                }}
              >
                <span>전송</span>
              </SendButton>
            </MessageContent>
          </MessageForm>
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
  @media screen and (max-width: 600px) {
    width: 100vw;
    height: 100%;
    margin: auto;
    overflow: hidden;
  }
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
  @media screen and (max-width: 600px) {
    width: 100vw;
    height: 50px;
    margin: auto;
    border-radius: 0px;
    .content {
      padding: 18px 20px;
    }
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  button {
    border: none;
    background: none;
    width: 8px;
    height: 14px;
    display: none;
  }
  .user {
    width: 12px;
    height: 12px;
  }
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #555;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 14px; /* 100% */
  }
  @media screen and (max-width: 600px) {
    button {
      cursor: pointer;
      display: block;
      padding-right: 20px;
    }
    span {
      width: 80px;
      padding-top: 1px;
    }
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
    white-space: nowrap;
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
  @media screen and (max-width: 600px) {
    width: 100vw;
    height: 100px;
  }
`;

const ObjectContent = styled.div`
  display: flex;
  gap: 15px;
  padding: 25px;
  img {
    width: 60px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid #d8dde5;
    box-sizing: border-box;
  }
  @media screen and (max-width: 600px) {
    padding: 20px;
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
    white-space: nowrap;
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
  @media screen and (max-width: 600px) {
    p {
      width: 143px;
    }
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
  @media screen and (max-width: 600px) {
    p {
      color: #444;
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px; /* 125% */
    }
  }
`;
const MessageForm = styled.div`
  width: 800px;
  height: 104px;
  border-top: 1px solid #d8dde5;
  margin-top: 20px;
  @media screen and (max-width: 600px) {
    width: 100vw;
    bottom: 20px;
    position: absolute;
  }
`;

const MessageContent = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin: 22px 25px;
  @media screen and (max-width: 600px) {
    justify-content: center;
    gap: 7px;
  }
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
  @media screen and (max-width: 600px) {
    textarea {
      width: 188px;
    }
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
  &:disabled {
    cursor: default;
    background: #81a8fb;
  }

  @media screen and (max-width: 600px) {
    padding: 22px 18px;
    span {
      white-space: nowrap;
    }
  }
`;
