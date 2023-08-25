import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { useGetNotices } from '../../api/api';
import Glass from '../../assets/img/magnifying-glass.svg'
import NotisList from '../../components/notification/list/notisList';
import PageMove from '../../components/notification/pagination';
import CategoryText from '../../components/notification/categoryText';
import {useSearchParams} from 'react-router-dom';
export interface Notice {
    id: string;
    title: string;
    category: string;
    writer: {
        id: string;
        name: string;
    },
    createdAt: number,//Milliseconds
    viewCnt: number,
    likeCnt: number,
    commentCnt: number,
    file: [string] | null,
}
export interface INotices {
    edges: Notice[], //검색된 공지
    totalCnt: number, //총 공지 개수
    limit: number,
}

export interface IQueryParams {
    page?:number;
    search?:string;
}

export interface UseNotices {
    loading: Boolean;
    data: INotices | null;
    error: null;
    query: (params:IQueryParams) => void ;

}

export default function Notification() {
    const { loading, data, error, query } = useGetNotices() as unknown as UseNotices;
    const [inputValue, setInputValue] = useState("");
    const [nowPage, setNowPage] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();
    
    const search = searchParams.get("search")!;
    let page:number = parseInt(searchParams.get("page")!,10);

    console.log(error);

    const edges = useMemo(()=>{
        return data?.edges;
    },[data]);

    useEffect(() => {
        if(search == null) {
            setInputValue("");
        } else {
            setInputValue(search);
        }
        query({
            page: page,
            search: search
        });
    },[query, search, page]);

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const searchInput = (search: string) => {
        if(inputValue !== "" && inputValue !== null){
            searchParams.set('search', `${decodeURI(search)}`);
            setSearchParams(searchParams);
        }
        setNowPage(1);
    };
    const pressSearch = () => {
        query({
            page: 1,
            search: inputValue
        });
        searchInput(inputValue);
    };

    return (
        <Layout>
            <CategoryText/>
                <SearchBar>
                    <input
                        type='text'
                        value={inputValue}
                        onChange={inputChange}
                        placeholder='검색어를 입력해주세요.'
                        onKeyDown={e => {
                            if(e.key === "Enter") {
                                pressSearch();
                            }
                        }}/>
                    <img 
                        src={Glass}
                        alt="glass"
                        onClick={pressSearch}
                        />
                </SearchBar>
                <div className='list'>
                    {!loading && edges ? 
                    <NotisList 
                        edges={edges} 
                        totalCnt={data?.totalCnt ?? 0}
                        page={page}
                        search={search}
                        /> : <span>Loading</span>}
                </div>
                <PageMove 
                    totalCnt={data?.totalCnt ?? 0}
                    pages={nowPage}
                    onPageClick={(nowPage:number)=>{
                        query({
                            page:nowPage,
                            search:inputValue,
                        })
                        setNowPage(nowPage);
                    }}
                />
        </Layout>
    )
}

const Layout = styled.div`
    width: 1440px;
    margin: 0 auto;
    margin-bottom: 100px;
    text-align: center;
    display: flex;
    flex-direction: column;

    .list {
            border-top: 1px solid #333333;
            margin-bottom: 40px;
    }
`

const SearchBar = styled.div`
    display: inline-flex;
    width: 410px;
    margin: 0 auto;
    padding: 12px 24px;
    border-radius: 100px;
    border: 1px solid #838383;;
    margin-bottom: 50px;
        input {
            width: 388px;
            border: 0;
            color: #000000;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 18px;
            outline:none;
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
            cursor:pointer;
        }
`
