import { useMemo } from "react";
import { styled } from "styled-components";
import formatDateTime from "../format-date-time";
import L from "../../../assets/img/l.svg";
import {
  IdFilterOperators,
  useNoticePostRepliesQuery,
} from "../../../graphql/graphql";

interface PropsType {
  id: string | undefined;
}

export default function CommentDetail({ id }: PropsType) {
  const { data } = useNoticePostRepliesQuery({
    variables: {
      filter: [
        {
          post__id: [
            {
              value: id,
              operator: IdFilterOperators.Equal,
            },
          ],
        },
      ],
    },
  });

  const edges = useMemo(() => {
    return data?.noticePostReplies.edges;
  }, [data]);

  if (!data) {
    return <NoComment>등록된 댓글이 없습니다.</NoComment>;
  }
  return (
    <>
      {edges?.map((edge) => {
        return (
          <Layout key={edge?.node.id}>
            <CommentInfo>
              <InfoText>
                <span className="username">
                  {/* {maskingName(edge.node.author.name)} */}
                </span>
                <img src={L} alt="l" />
                <span className="date">
                  {formatDateTime(edge?.node.createdAt)}
                </span>
              </InfoText>
              {edge?.node.isMine ? (
                <Button>
                  <button>수정</button>
                  <img src={L} alt="l" />
                  <button>삭제</button>
                </Button>
              ) : (
                <Button>
                  <button>신고하기</button>
                </Button>
              )}
            </CommentInfo>
            <Content>
              <p>{edge?.node.content}</p>
            </Content>
          </Layout>
        );
      })}
    </>
  );
}

const Layout = styled.div`
  border-radius: 10px;
  background-color: #f4f8ff;
  margin: auto;
  margin: 0 30px 10px 30px;
  padding: 34px 0 15px 34px;
`;

const CommentInfo = styled.div`
  display: flex;
  align-items: center;
`;
const InfoText = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-right: auto;
  span {
    padding-top: 2px;
  }
  .username {
    color: #333;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 14px; /* 100% */
  }
  .date {
    color: #6a768c;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px; /* 100% */
  }
`;
const Button = styled.div`
  button {
    padding: 0;
    background-color: #f4f8ff;
    border: none;
    color: #666;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px; /* 100% */
    cursor: pointer;
    margin-right: 34px;
  }
`;

const Content = styled.div`
  color: #626873;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 175% */
`;

const NoComment = styled.span`
  color: #626873;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 175% */
  margin-top: 80px;
  margin-bottom: 80px;
`;
