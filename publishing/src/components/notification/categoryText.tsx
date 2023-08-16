import React from 'react';
import styled from 'styled-components';

export default function CategoryText() {
    return (
        <Layout>
            <span className='menuCg'>알림마당</span>
            <span className='category'>공지사항</span>
        </Layout>
    )
}

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    .menuCg {
            color: #666;
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 18px;
            margin-bottom: 10px;
    }
    .category{
            color: #333;
            font-size: 30px;
            font-style: normal;
            font-weight: 700;
            line-height: 30px;
            margin-bottom:30px;
    }
`