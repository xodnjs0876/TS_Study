import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Attach from "../../assets/img/attach.svg";
import Download from "../../assets/img/receive.svg";

export default function ChattingList({
  messages,
  isEnd,
}: {
  messages: string;
  isEnd: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const Opponent = (text: string) => {
    return (
      <OpponentChattingText>
        <div className="content">
          <span>강*민</span>
          <div className="chat">
            {/*시간대로 텍스트 합치기? */}
            <div className="text">
              <span>{text}</span>
            </div>
          </div>
        </div>
        <div className="side">
          <span className="time">오후 06:29</span>
        </div>
      </OpponentChattingText>
    );
  };
  const Mine = (read: boolean, text: string) => {
    return (
      <MyChattingText>
        <div className="side">
          {read ? <span>안읽음</span> : ""}
          <span className="time">오후 06:29</span>
        </div>
        <div className="chat">
          <div className="text">
            <span>{text}</span>
          </div>
        </div>
      </MyChattingText>
    );
  };
  const MyFileText = (read: boolean) => {
    return (
      <MyChattingText>
        <div className="side">
          {read ? <span>안읽음</span> : ""}
          <span className="time">오후 06:29</span>
        </div>
        <FileSend>
          <div className="attach">
            <img src={Attach} alt="attach" />
          </div>
          <div className="fileContent">
            <span className="fileName">상품관련첨부.pdf</span>
            <span className="fileSize">35.3 KB</span>
          </div>
          <div className="download">
            <button>
              <img src={Download} alt="download" />
            </button>
          </div>
        </FileSend>
      </MyChattingText>
    );
  };
  const OpponentFileText = () => {
    return (
      <OpponentChattingText>
        <div className="content">
          <span>강*민</span>
          <FileSend>
            <div className="attach">
              <img src={Attach} alt="attach" />
            </div>
            <div className="fileContent">
              <span className="fileName">상품관련첨부.pdf</span>
              <span className="fileSize">35.3 KB</span>
            </div>
            <div className="download">
              <button>
                <img src={Download} alt="download" />
              </button>
            </div>
          </FileSend>
        </div>
        <div className="side">
          <span className="time">오후 06:29</span>
        </div>
      </OpponentChattingText>
    );
  };
  return (
    <Layout isEnd={isEnd} ref={scrollRef}>
      {Opponent("너무 비싸")}
      {Mine(false, "안 비싸 ")}
      {OpponentFileText()}
      {Mine(false, "비싸")}
      {Mine(false, "비싸?")}
      {Mine(false, "비싸?")}
      {Mine(false, "비싸?")}
      {Mine(false, "비싸?")}
      {Mine(false, "비싸?")}
      {Mine(false, "비싸?")}
      {MyFileText(false)}
      {isEnd ? (
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
const Layout = styled.div<{ isEnd: boolean }>`
  overflow: auto;
  height: ${(props) => (props.isEnd ? "60vh" : "50vh")};
`;
const MyChattingText = styled.div`
  width: 770px;
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
      display: flex;
      padding: 20px 25px;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 15px;
      border-radius: 10px 10px 0px 10px;
      background: #333;
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
      display: flex;
      padding: 20px 25px;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 15px;
      border-radius: 0px 10px 10px 10px;
      background: #edf3fd;
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
  margin-top: 80px;
`;

const FileSend = styled.div`
  width: 203px;
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
