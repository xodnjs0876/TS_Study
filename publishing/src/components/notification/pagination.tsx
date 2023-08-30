import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import FirstArrow from "../../assets/img/firstArrow.svg";
import PrevArrow from "../../assets/img/prevArrow.svg";
import LastArrpw from "../../assets/img/lastArrow.svg";
import nextArrow from "../../assets/img/nextArrow.svg";

interface PropsType {
    onPageClick: (e: number) => void;
    totalCnt:number;
}

export default function PageMove({
    onPageClick,
    totalCnt,
    }:PropsType)
    {

    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(totalCnt/10);
    let page:number = parseInt(searchParams.get("page")!,10);

    useEffect(() => {
        if(isNaN(page)){
            setCurrentPage(1);
        } else {
            setCurrentPage(page);
        }
    },[page]);

    const changePage = (page:number) => {
        setCurrentPage(page);
        movePage(page)
    };

    const movePage = (page: number) => {
        searchParams.set('page', `${page}`);
        onPageClick(page);
        setSearchParams(searchParams);
    };

    const handleFirstClick = () => {
        movePage(1);
        setCurrentPage(1);
    };
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            movePage(currentPage - 1);
        }
    };
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            movePage(currentPage + 1);
        }
    };

    const handleLastClick = () => {
        setCurrentPage(totalPages);
        movePage(totalPages);
    };

    const getPageRange = (page: number): number[] => {
        const start = Math.floor((page - 1) / 5) * 5 + 1;
        const end = Math.min(start + 4, totalPages);
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    };

    return (
        <Layout>
            <ul>
                <li>
                    <button
                        type='button'
                        disabled={currentPage === 1}
                        onClick={handleFirstClick}
                        className='disableBtn'>
                        <img src={FirstArrow} alt="first" />
                    </button>
                </li>
                <li>
                    <button
                        type='button'
                        disabled={currentPage === 1}
                        onClick={prevPage}>
                            <img src={PrevArrow} alt="prev" />
                    </button>
                </li>
                {getPageRange(currentPage).map(page => {
                    return (
                        <li key={page} className="h-40 w-40">
                            <button
                                type="button"
                                disabled={page === currentPage}
                                onClick={() => changePage(page)}
                                className={page === currentPage ? "active" : ""}
                            >
                                {page}
                            </button>
                        </li>
                    );
                })}
                <li>
                    <button
                        type='button'
                        disabled={currentPage === totalPages}
                        onClick={nextPage}>
                        <img src={nextArrow} alt="next"/>
                    </button>
                </li>
                <li>
                    <button
                        type='button'
                        disabled={currentPage === totalPages}
                        onClick={handleLastClick}
                        className='disableBtn'>
                            <img src={LastArrpw} alt="last" />
                    </button>
                </li>
            </ul>
        </Layout>
    )
}

const Layout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    * {
        padding: 0;
        margin: 0;
    }
    ul {
        list-style:none;
        display:flex;
    }
    li {
        width:40px;
        height: 40px;
    }
    button {
        width:40px;
        height: 40px;
        border:none;
        background-color: #fff;
        color: #9A9A9A;
        text-align: center;
        font-size: 16px;
        font-weight: 800;
        line-height: 14px; /* 87.5% */
        cursor: pointer;
        :hover {
            color:#5A33BE;
            text-decoration:underline;
        }
    }
    .active {
        cursor:default;
        color:#5A33BE;
        text-decoration:underline;
    }
    button:disabled, 
    button[disabled]{
        cursor:default;
    }
    .disableBtn:disabled, 
    .disableBtn[disabled]{
        cursor:default;
        visibility:hidden;
    }
`