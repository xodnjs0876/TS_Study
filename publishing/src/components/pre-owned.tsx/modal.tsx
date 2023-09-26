import React from "react";
import styled from "styled-components";
import X from "../../assets/img/x.svg";

export default function Modal({
  isOpen,
  closeModal,
  leaveChat,
}: {
  isOpen: boolean;
  closeModal: () => void;
  leaveChat: () => void;
}) {
  return (
    <Layout>
      {isOpen ? (
        <ModalDiv>
          <ModalHeader>
            <h2>나가기</h2>
            <button onClick={closeModal}>
              <img src={X} alt="x" />
            </button>
          </ModalHeader>
          <ModalContent>
            <p>
              채팅방을 나가면 채팅 목록 및 대화내용이
              <br />
              삭제되며 복구하실 수 없습니다. <br />
              채팅방에서 나가시겠습니까?
            </p>
          </ModalContent>
          <ModalFooter>
            <button onClick={closeModal} className="no">
              <span>아니오</span>
            </button>
            <button className="yes" onClick={() => leaveChat()}>
              <span>예</span>
            </button>
          </ModalFooter>
        </ModalDiv>
      ) : (
        <div></div>
      )}
    </Layout>
  );
}

const Layout = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ModalDiv = styled.div`
  width: 420px;
  padding: 36px 40px;
  display: inline-flex;
  padding: 36px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 4px 30px 0px rgba(132, 132, 132, 0.2);
`;
const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  h2 {
    color: #333;
    font-feature-settings: "clig" off, "liga" off;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 100% */
  }
`;

const ModalContent = styled.div`
  p {
    color: #555;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 140% */
  }
`;
const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  button {
    display: flex;
    width: 200px;
    height: 60px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
  }
  .no {
    border: 1px solid #d8dde5;
    background: none;
    span {
      color: #555;
      font-family: Pretendard;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 100% */
    }
  }
  .yes {
    border-radius: 10px;
    background: #5a33be;
    span {
      color: #fff;
      font-family: Pretendard;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px; /* 100% */
    }
  }
`;
