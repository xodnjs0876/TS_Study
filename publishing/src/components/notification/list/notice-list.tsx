import React from "react";
import styled from "styled-components";
import Attach from "../../../assets/img/copy-one.svg";
import Viewer from "../../../assets/img/preview-open.svg";
import Liker from "../../../assets/img/like.svg";
import highLightText from "../../highlight-text";
import formatNum from "../../format-num";
import formatDateTime from "../format-date-time";

interface PropsType {
  number?: number;
  title: string | undefined | null;
  name?: string | undefined | null;
  category?: string | undefined | null;
  createdAt?: string;
  hasFile?: boolean;
  viewCount?: number;
  likeCount?: number;
  commentCount?: number;
  search?: string;
  onClick?: () => void;
}

export default function NotisList({
  number,
  title,
  name,
  category,
  createdAt,
  hasFile = false,
  viewCount = 0,
  likeCount = 0,
  commentCount = 0,
  search,
  onClick,
}: PropsType) {
  return (
    <div>
      <Layout onClick={() => onClick?.()}>
        <span className="id">{number}</span>
        <Content>
          <Title>
            <p>
              {category ? [category] : null}
              {title && highLightText(title, search)}
            </p>
            {hasFile ? <img src={Attach} alt="attachImg" /> : null}
            <Comment>
              {commentCount !== 0
                ? commentCount >= 99
                  ? "[99+]"
                  : `[${commentCount}]`
                : null}
            </Comment>
          </Title>
          <PostInfo>
            <span>{name}</span>
            <span className="line">|</span>
            <span>{createdAt && formatDateTime(createdAt)}</span>
            <span className="line">|</span>
            <span>
              <img src={Viewer} alt="viewCnt" />
              {formatNum(viewCount)}
            </span>
            <span className="line">|</span>
            <span>
              <img src={Liker} alt="likeCnt" />
              {formatNum(likeCount)}
            </span>
          </PostInfo>
        </Content>
      </Layout>
    </div>
  );
}

const Layout = styled.div`
  max-height: 120px;
  display: flex;
  overflow: hidden;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid #d8dde5;
  cursor: pointer;
  .id {
    overflow: hidden;
    display: flex;
    justify-content: center;
    flex-basis: 46px;
    color: #888;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    padding-left: 34px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  margin-left: 40px;
  gap: 24px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  max-width: 1280px;
  color: #333;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0;
  }
  img {
    padding-left: 10px;
  }
`;

const Comment = styled.span`
  color: #193dd0;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  padding-left: 10px;
  padding-top: 2px;
`;

const PostInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  font-size: 14px;
  line-height: 14px;
  gap: 12px;

  span {
    display: flex;
    align-items: center;
    gap: 4px;
    padding-top: 2px;

    img {
      padding-bottom: 2px;
    }
  }

  .line {
    color: #d8dde5;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    padding-top: 1px;
  }
`;
