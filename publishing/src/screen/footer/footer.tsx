import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Layout>
      <ContentBox>
        <ul>
          <li>개인정보처리방침</li>
          <li>사이트이용약관</li>
        </ul>
        <span>(사)한국외식업중앙회 한국외식산업연구원</span>
        <TextBox>
          <div className="text">
            <p>
              주소
              <span>
                '(04589) 서울특별시 중구 다산로 168 (신당동, 성원빌딩) 3층
                한국외식산업연구원'
              </span>
            </p>
            <span>ㅣ</span>
            <p>
              사업자등록번호
              <span>203-82-32145</span>
            </p>
            <span>ㅣ</span>
            <p>
              대표자
              <span>전강식</span>
            </p>
          </div>
          <div className="text">
            <p>
              TEL
              <span>02-6191-2908</span>
            </p>
            <span>ㅣ</span>
            <p>
              FAX
              <span>02-6191-2908</span>
            </p>
            <span>ㅣ</span>
            <p>
              E-mail
              <span>isaacsgod@kfiri.org</span>
            </p>
            <span>ㅣ</span>
            <p>
              개인정보보호정책
              <span>김상희</span>
            </p>
          </div>
        </TextBox>
        <p>
          Copyright © 2017 한국외식산업연구원 Korea food industry Research
          Institute All Rights Reserved.
        </p>
      </ContentBox>
    </Layout>
  );
}

const Layout = styled.div`
  border-top: 1px solid #ececec;
  * {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

const ContentBox = styled.div`
  width: 1240px;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 25px;

  ul {
    color: #444;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 12px;
    margin-bottom: 35px;
  }

  li {
    display: inline-flex;
    white-space: pre;
    margin-right: 12px;
    cursor: pointer;

    :last-child {
      margin-left: 20px;
    }
  }

  > span {
    color: #222;
    font-size: 10px;
    font-weight: 300;
    line-height: 16px;
  }

  > p {
    color: #b6b6b6;
    font-size: 10px;
    font-weight: 400;
    line-height: 15px;
  }
`;

const TextBox = styled.div`
  margin: 11px 0 15px 0;

  .text {
    display: flex;
    align-items: center;
  }

  p {
    color: #444;
    font-size: 10px;
    font-weight: 700;
    line-height: 16px;

    span {
      color: #444;
      font-size: 10px;
      font-weight: 300;
      line-height: 16px;
      padding-left: 6px;
    }
  }
  span {
    color: #d1d1d1;
    font-size: 10px;
    font-weight: 300;
    line-height: 16px;
  }
`;
