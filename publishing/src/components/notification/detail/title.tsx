import React from "react";
import styled from "styled-components";
import Viewer from "../../../assets/img/preview-open.svg";
import Liker from "../../../assets/img/like.svg";
import formatNum from "../../format-num";
import formatDateTime from "../format-dateTime";

interface StyleType {
  color: string;
  fontSize: string;
  fontWeight: string;
}

interface PropsType {
  title: string;
  viewCnt: number;
  likeCnt: number;
  createdAt: string;
  category: {
    name: string;
    id: string;
  };
  author: {
    name: string;
    nickname: string;
    id: string;
  };
}

export default function Title({
  title,
  viewCnt,
  likeCnt,
  createdAt,
  category,
  author,
}: PropsType) {
  return (
    <Layout>
      <Text
        color="#5A33BE"
        fontSize="16px"
        fontWeight="700"
        className="category"
      >
        공지사항
      </Text>
      <Text color="#333" fontSize="24px" fontWeight="500" className="title">
        {category ? [category.name] : null} {title}
      </Text>
      <InfoText>
        <FlexText>{author.name}</FlexText>
        <p>|</p>
        <FlexText>{formatDateTime(createdAt)}</FlexText>
        <p>|</p>
        <FlexText>
          <img src={Viewer} alt="viewer" />
          {formatNum(viewCnt)}
        </FlexText>
        <p>|</p>
        <FlexText>
          <img src={Liker} alt="likes" />
          {formatNum(likeCnt)}
        </FlexText>
      </InfoText>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  border-top: 2px solid #555;
  border-bottom: 0.998px solid #d8dde5;
  padding-left: 24px;
  margin-bottom: 50px;
  .category {
    padding-top: 30px;
  }
  .title {
    padding-top: 18px;
  }
`;
const Text = styled.div<StyleType>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  max-width: 1280px;
`;
const InfoText = styled.div`
  display: flex;
  align-items: center;
  color: #666;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  padding: 10px 0;
  p {
    color: #d8dde5;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    padding: 0 12px 0 12px;
  }
`;

const FlexText = styled.div`
  overflow: hidden;
  padding-top: 1px;
  display: flex;
  align-items: center;
  padding-bottom: 0.5px;

  img {
    padding-right: 4px;
    padding-bottom: 2.5px;
  }
`;
