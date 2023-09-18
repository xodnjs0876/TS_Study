import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Title from "../../../components/notification/detail/title";
import Attach from "../../../assets/img/copy-one.svg";
import Download from "../../../assets/img/download.svg";
import Like from "../../../assets/img/filled-like.svg";
import UnLike from "../../../assets/img/empty-like.svg";
import Share from "../../../assets/img/connect-share-one.svg";
import UnScrap from "../../../assets/img/vector.svg";
import Scrap from "../../../assets/img/filled-vector.svg";
import LeftArrow from "../../../assets/img/leftArrow.svg";
import RightArrow from "../../../assets/img/rightArrow.svg";
import ListView from "../../../assets/img/listView.svg";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useQuery } from "@apollo/client";
import GET_POST_DATA from "../../../graphql/notice/query/notice-post";
import CommentDetail from "../../../components/notification/detail/comment";
import formatNum from "../../../components/format-num";
import GET_POST_NAVIGATION from "../../../graphql/notice/query/notice-post-navigation";
import CategoryText from "../../../components/notification/category-text";

interface FileType {
  id: string;
  url: string;
  filename: string;
}

export default function NotisDetail() {
  const [isLike, setIsLike] = useState(false);
  const [isScrap, setIsScrap] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search")!;
  const location = useLocation().search;
  const navigate = useNavigate();
  let { id } = useParams();

  console.log(location);

  const { loading, data } = useQuery(GET_POST_DATA, {
    variables: {
      noticePostId: `${id}`,
    },
  });

  const { data: navigation } = useQuery(GET_POST_NAVIGATION, {
    variables: {
      noticePostNavigationId: `${id}`,
      params: search && {
        search: `${search}`,
      },
    },
  });

  const onPostList = () => {
    return navigate(`/${location}`);
  };

  const onPrevPost = () => {
    if (navigation) {
      if (navigation?.noticePostNavigation.prePostId == null) return;
      return navigate(`/post/${navigation.noticePostNavigation.prePostId}`);
    }
    return;
  };
  const onNextPost = () => {
    if (navigation) {
      if (navigation?.noticePostNavigation.nextPostId == null) return;
      return navigate(`/post/${navigation.noticePostNavigation.nextPostId}`);
    }
    return;
  };
  const ClickFileDownload = useCallback((srcUrl: string, name: string) => {
    fetch(srcUrl, { method: "GET" })
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = name;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          window.URL.revokeObjectURL(url);
        }, 1000);
        a.remove();
      })
      .catch((err) => {
        console.error("err", err);
      });
  }, []);

  const edge = useMemo(() => {
    return data?.noticePost;
  }, [data]);

  useEffect(() => {
    if (edge) {
      setIsLike(edge.isLike);
      setIsScrap(edge.isScrap);
    }
  }, [edge]);

  // const clickLike = () => {
  //   setIsLike(!edge.isLike);
  //   {
  //     !isLike ? (edge!.likeCnt += 1) : (edge!.likeCnt -= 1);
  //   }
  // };
  const clickScrap = () => {
    setIsScrap(!edge.isScrap);
  };
  const sharePage = () => {
    const shareObject = {
      title: "테스트",
      text: "로컬",
      url: window.location.href,
    };
    if (navigator.share) {
      //  지원하는 경우만 실행
      navigator
        .share(shareObject)
        .then(() => {
          // 정상 동작할 경우 실행
          alert("공유하기 성공");
        })
        .catch((error) => {
          alert("에러가 발생했습니다.");
        });
    } else if (navigator.clipboard) {
      navigator.clipboard
        .writeText(`${shareObject.url}`)
        .then(() => alert("링크가 클립보드에 복사되었습니다."));
    }
  };
  const commentTextChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setCommentText(e.target.value);
  };
  const commentBtn = () => {
    setCommentText("");
    alert(commentText);
  };
  if (loading) return <p> 로딩중 </p>;

  if (edge == null) return null;

  const attach = () => {
    if (edge.files.length < 1) {
      return (
        <AttachBox>
          <Text>첨부파일</Text>
          <span className="noAttach">첨부된 파일이 없습니다.</span>
        </AttachBox>
      );
    }

    return (
      <AttachBox>
        <Text>첨부파일</Text>
        <div>
          {edge.files.map((file: FileType) => (
            <DownloadText className="key" key={file.id}>
              <img src={Attach} alt="attach" />
              <p onClick={() => ClickFileDownload(file.url, file.filename)}>
                {file.filename}
              </p>
              <DownloadBtn
                onClick={() => ClickFileDownload(file.url, file.filename)}
              >
                <span>다운로드</span>
                <img src={Download} alt="download" />
              </DownloadBtn>
            </DownloadText>
          ))}
        </div>
      </AttachBox>
    );
  };

  return (
    <Layout>
      <CategoryText />
      <Content>
        <Title
          title={edge.title}
          viewCnt={edge.viewCnt}
          likeCnt={edge.likeCnt}
          createdAt={edge.createAt}
          category={edge.category}
          author={edge.author}
        />
        <p
          className="content"
          dangerouslySetInnerHTML={{ __html: `${edge.content}` }}
        />
        {attach()}
        <ButtonBox>
          <button className="like">
            {!isLike ? (
              <img src={UnLike} alt="unlike" />
            ) : (
              <img src={Like} alt="like" />
            )}
            <span>{formatNum(edge?.likeCnt!)}</span>
          </button>
          <button className="share" onClick={sharePage}>
            <img src={Share} alt="share" />
            <span>공유하기</span>
          </button>
          <button className="scrap" onClick={clickScrap}>
            {!isScrap ? (
              <img src={UnScrap} alt="unscrap" />
            ) : (
              <img src={Scrap} alt="scrap" />
            )}
            <span>스크랩</span>
          </button>
        </ButtonBox>
      </Content>
      <CommentBox>
        <CommentText>
          <span className="commentText">댓글</span>
          <span className="commentCnt">{edge.replyCount}</span>
        </CommentText>
        <CommentDetail id={id} />
        <CommentTextArea>
          <textarea
            value={commentText}
            onChange={commentTextChange}
            placeholder="댓글을 작성하세요."
          />
          <button onClick={commentBtn}>등록</button>
        </CommentTextArea>
      </CommentBox>
      {navigation?.noticePostNavigation && (
        <PageMoveBtn>
          <Button
            disabled={navigation.noticePostNavigation.prePostId == null}
            onClick={onPrevPost}
          >
            <img src={LeftArrow} alt="leftArrow" />
            <span className="left">이전글</span>
          </Button>
          <Button
            className="rightBtn"
            disabled={navigation.noticePostNavigation.nextPostId == null}
            onClick={onNextPost}
          >
            <span className="right">다음글</span>
            <img src={RightArrow} alt="rightArrow" />
          </Button>
          <Button onClick={onPostList}>
            <img className="listImg" src={ListView} alt="listView" />
            <span className="left">목록</span>
          </Button>
        </PageMoveBtn>
      )}
    </Layout>
  );
}
const Layout = styled.div`
  width: 1240px;
  margin: 0 auto;
  margin-bottom: 100px;
  margin-top: 60px;
  span {
    display: flex;
    justify-content: center;
    font-size: 30px;
  }
`;

const Content = styled.div`
  .content {
    margin-left: 30px;
    margin-bottom: 60px;
    max-width: 1280px;
  }
`;

const AttachBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin: 0 30px 40px 30px;
  border-radius: 3px;
  border: 1px solid #bfc3c8;
  padding-bottom: 12px;
  .key:not(last-child),
  .key[last-child] {
    border-bottom: 1px solid #d8dde5;
  }
  .key:last-child,
  .key[last-child] {
    border: none;
  }
  .noAttach {
    color: #888;
    font-size: 18px;
    text-align: center;
    margin-bottom: 30px;
  }
`;

const Text = styled.div`
  color: #333;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  margin: 30px 0 0 34px;
`;

const DownloadText = styled.div`
  display: flex;
  align-items: center;
  padding: 19px 0 18px 0;
  margin: 0 34px;
  img,
  p,
  span {
    cursor: pointer;
  }
  p {
    margin: 0;
    padding-left: 10px;
    margin-right: auto;
    color: #666;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    text-decoration-line: underline;
    text-underline-position: under;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
const DownloadBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: #ffff;
  span {
    color: #193dd0;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 87.5% */
    padding-top: 2px;
  }
`;
const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 418px;
  border: 1px solid #d8dde5;
  border-radius: 5px;
  margin-bottom: 35px;
  button {
    border: none;
    background-color: #fff;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 22px 0 22px 0;
    cursor: pointer;
  }
  span {
    color: #2b2b2b;
    text-align: center;
    font-size: 14px;
    line-height: 14px;
    padding-top: 1px;
  }

  .like {
    width: 140px;
    justify-content: center;
  }
  .share {
    width: 138px;
    border-left: 1px solid #d8dde5;
    border-right: 1px solid #d8dde5;
    justify-content: center;
  }
  .scrap {
    width: 140px;
    justify-content: center;
  }
`;

const CommentBox = styled.div`
  border-top: 1px solid #dcdcdc;
  border-bottom: 1px solid #555;
  span {
    color: #626873;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 175% */
  }
  .noComment {
    margin-bottom: 80px;
  }
`;
const CommentText = styled.div`
  display: flex;
  align-items: center;
  margin: 35px 0 29px 30px;

  .commentText {
    color: #333;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px; /* 90% */
    padding-right: 8px;
  }
  .commentCnt {
    color: #193dd0;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px; /* 90% */
  }
`;

const CommentTextArea = styled.div`
  margin: auto;
  margin: 20px 30px 30px 30px;
  border: 1px solid #bfc3c8;
  border-radius: 3px;
  display: flex;
  align-items: flex-start;
  textarea {
    margin-right: auto;
    color: #000000;
    font-size: 16px;
    font-style: normal;
    font-family: Pretendard;
    font-weight: 400;
    line-height: 16px; /* 100% */
    padding: 35px 0 0 35px;
    border: none;
    width: 90%;
    height: 180px;
    outline: none;
    resize: none;
    ::placeholder {
      color: #666;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px; /* 100% */
    }
  }
  button {
    cursor: pointer;
    margin: 35px 35px 0 0;
    border: none;
    background-color: #fff;
    color: #193dd0;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 14px; /* 77.778% */
  }
`;
const PageMoveBtn = styled.div`
  display: flex;
  align-items: center;
  .rightBtn {
    margin-left: 10px;
    margin-right: auto;
  }
  button:disabled,
  button[disabled] {
    cursor: default;
    opacity: 0.8;
  }
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background-color: #fff;
  padding: 0;
  margin-top: 30px;
  cursor: pointer;
  img {
    padding: 11px;
  }
  span {
    color: #666;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 112.5% */
  }
  .left {
    padding: 16px 19px 13px 0;
  }
  .right {
    padding: 16px 0 13px 19px;
  }
  .listImg {
    padding: 11px 11px 11px 17px;
  }
`;
