import React, { useState } from 'react';
import styled from 'styled-components';
import { useGetNotices } from '../../api/api';
import Glass from "../../assets/img/MagnifyingGlass.svg"

export default function Notification() {
    const [inputValue, setInputValue] = useState("");

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }
    return (
        <Layout>
            <p>알림마당</p>
            <p>공지사항</p>
                <div className='searchBar'>
                    <input
                        type='text'
                        value={inputValue}
                        onChange={inputChange}
                        placeholder='검색어를 입력해주세요.'/>
                    <img 
                        src={Glass}
                        alt="glass"
                        />
                </div>
        </Layout>
    )
}

const Layout = styled.div`
    width: 1440px;
    margin: 0 auto;
    margin-bottom: 100px;
    text-align: center;

    p {
        :first-child {
            color: #666;
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
            line-height: 18px;
            margin-bottom: 10px;
        }
        :nth-child(2) {
            color: #333;
            font-size: 30px;
            font-style: normal;
            font-weight: 700;
            line-height: 30px;
            margin-bottom:30px;
        }
    }

    .searchBar {
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

        .list {
            border-top: 1px solid #333333;
            margin-bottom: 40px;
        }
    }
`