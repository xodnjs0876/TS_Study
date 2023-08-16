import React, { useState } from 'react';
import styled from 'styled-components';
import Pagination from "react-js-pagination";

interface PropsType {
    onPageClick: (e: number) => void;
    totalCnt:number;
    limit: number;
}

export default function PageMove(data: PropsType) {

    const [btnActive, setBtnActive] = useState(1);
    console.log(data.totalCnt);
    
    const toggleActive = (page:number) => {
        data.onPageClick(page);
        setBtnActive(page);
        console.log(page);
    };


    return (
        <Layout>
            <Pagination
                        activePage={btnActive}
                        itemsCountPerPage={data.limit}
                        totalItemsCount={data.totalCnt}
                        pageRangeDisplayed={5}
                        prevPageText={"<"}
                        nextPageText={">"}
                        onChange={toggleActive}
                    />
        </Layout>
    )
}

const Layout = styled.div`
    display: flex;
    justify-content: center;

    ul {
        list-style: none;
        padding: 0;
        display: inline-block;
        display: flex;

        li {
        display: inline-block;
        display: flex;
        padding: 15px;
        justify-content: center;
        align-items: center;
        font-size: 16px
    }
    }

    .active a {
        color: #5A33BE;
        text-align: center;
        font-size: 16px;
        font-style: normal;
        font-weight: 800;
        line-height: 14px; /* 87.5% */
        text-decoration-line: underline;
    }
    a {
        color:#9A9A9A;
        font-size: 16px;
        text-decoration-line: none;
        font-weight: 600;
        :hover, .active {
            color: #5A33BE;
            text-align: center;
            font-size: 16px;
            font-style: normal;
            font-weight: 800;
            line-height: 14px; /* 87.5% */
            text-decoration-line: underline;
        }
    }
    
`