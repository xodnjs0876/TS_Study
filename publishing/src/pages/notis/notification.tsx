import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Glass from "../../assets/img/magnifying-glass.svg";
import NotisList from "../../components/notification/list/notice-list";
import PageMove from "../../components/notification/pagination";
import CategoryText from "../../components/notification/category-text";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import GET_NOTICE_DATA from "../../graphql/notice/query/notice-posts";

export interface Notice {
  id: string;
  title: string;
  category: {
    name: string;
    id: string;
  };
  author: {
    email: string;
    nickname: string;
    name: string;
  };
  createdAt: string; //Milliseconds
  viewCnt: number;
  likeCnt: number;
  replyCount: number;
  isLike: boolean;
  files: {
    id: string;
    url: string;
    filename: string;
  } | null;
}
export interface INotices {
  edges: NoticeEdge; //검색된 공지
}
export interface NoticeEdge {
  node: Notice;
}

export default function Notification() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search")!;
  const [inputValue, setInputValue] = useState("");
  const [nowPage, setNowPage] = useState(1);
  const navigate = useNavigate();
  const location = useLocation().search;

  const { loading, data } = useQuery(GET_NOTICE_DATA, {
    variables: {
      first: 10,
      offset: 10 * (nowPage - 1),
      filter: {
        title: search
          ? [
              {
                value: `%${search}%`,
                operator: "LIKE",
              },
            ]
          : [],
      },
    },
  });

  const edges = useMemo(() => {
    return data?.noticePosts?.edges;
  }, [data]);

  let page: number = parseInt(searchParams.get("page")!, 10) || 1;

  useEffect(() => {
    if (search == null) {
      setInputValue("");
    } else {
      setInputValue(search);
    }

    if (page == null) {
      setNowPage(1);
    } else {
      setNowPage(page);
    }
  }, [search, page]);

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const searchInput = (search: string) => {
    if (inputValue !== "" && inputValue !== null) {
      searchParams.set("search", `${decodeURI(search)}`);
      setSearchParams(searchParams);
    }
  };
  const pressSearch = () => {
    navigate("/");
    setNowPage(1);
    searchInput(inputValue);
  };

  if (loading) return <Loading> loading....</Loading>;

  const list = () => {
    if (edges?.length <= 0 && search) {
      return (
        <NoSearchWord>'{search}' 에 대한 검색 결과가 없습니다.</NoSearchWord>
      );
    }

    return (
      <div className="list">
        {edges &&
          edges.map((edge: NoticeEdge, i: number) => {
            const number = data.noticePosts.totalCount - i - 10 * (page - 1);
            return (
              <NotisList
                key={edge.node.id}
                number={number}
                title={edge.node.title}
                name={edge.node.author?.name}
                category={edge.node.category?.name}
                createdAt={edge.node.createdAt}
                hasFile={edge.node.files === undefined ? false : true}
                viewCount={edge.node.viewCnt}
                likeCount={edge.node.likeCnt}
                commentCount={edge.node.replyCount}
                search={search}
                onClick={() => navigate(`/post/${edge.node.id}${location}`)}
              />
            );
          })}
      </div>
    );
  };

  return (
    <Layout>
      <CategoryText />
      <ListInfo>
        <SearchBar>
          <input
            type="text"
            value={inputValue}
            onChange={inputChange}
            placeholder="검색어를 입력해주세요."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                pressSearch();
              }
            }}
          />
          <img src={Glass} alt="glass" onClick={pressSearch} />
        </SearchBar>
      </ListInfo>
      {list()}
      <PageMove
        totalCnt={data?.noticePosts.totalCount ?? 0}
        onPageClick={(page: number) => {
          setNowPage(page);
        }}
      />
    </Layout>
  );
}

const Layout = styled.div`
  width: 1240px;
  margin: 0 auto;
  margin-bottom: 100px;
  margin-top: 60px;
  text-align: center;
  display: flex;
  flex-direction: column;

  .list {
    margin-bottom: 40px;
  }
`;

const ListInfo = styled.div`
  border-bottom: 1px solid #333333;
`;

const SearchBar = styled.div`
  display: inline-flex;
  width: 410px;
  margin: 0 auto;
  padding: 12px 24px;
  border-radius: 100px;
  border: 1px solid #838383;
  margin-bottom: 50px;
  input {
    width: 388px;
    border: 0;
    color: #000000;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    outline: none;
    ::placeholder {
      border: 0;
      color: #989898;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
    }
  }
  img {
    cursor: pointer;
  }
`;
const Loading = styled.div`
  display: flex;
  justify-content: center;
  font-size: 30px;
`;

const NoSearchWord = styled.div`
  display: flex;
  justify-content: center;
  color: #888;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 100% */
  padding: 150px 0;
  border-bottom: 1px solid #d8dde5;
`;
