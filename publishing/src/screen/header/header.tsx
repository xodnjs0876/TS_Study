import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/img/klogo.png';
import Alarm from '../../assets/img/noti.svg';
import MenuBtn from '../../assets/img/hamburger-button.svg';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <Layout>
            <LGBox>
                <ul>
                    <li>로그인/회원가입</li>
                    <li>회원정보찾기</li>
                </ul>
            </LGBox>
            <MenuBox>
                <div className='logo'>
                    <Link to="/">
                        <img src={Logo} alt='logo'/>
                    </Link>
                </div>
                <ul>
                    <li>한국외식산업연구원</li>
                    <li>외식정보</li>
                    <li>알림마당
                        <span>ㅣ</span>
                    </li>
                    <li>패널설문조사</li>
                    <li>정부지원</li>
                    <li>교육</li>
                    <li>부가혜택몰</li>
                </ul>
                <div className='hd_bt'>
                    <div className='alarm'>
                            <img src={Alarm} alt = "noti"/>
                    </div>
                    <div className='menu_btn'>
                        <img src={MenuBtn} alt='menu_bt'/>
                    </div>
                </div>
            </MenuBox>

        </Layout>
    )
}

const Layout = styled.div`
    border-bottom: 1px solid #E7E7E7;
    margin-bottom: 60px;

    * {
        padding: 0;
        margin: 0;
        list-style: none;
    }

`
const LGBox = styled.div`
    background: linear-gradient(90deg, #9B27AA 0%, #173DD0 100%);
    height: 30px;

    ul {
        display: flex;
        align-items: center;
        justify-content: right;
        width: 1440px;
        margin: 0 auto;
        color: #fff;
        font-size:12px;
        height: 30px;
    }

    li {
        padding-left: 20px;
        cursor: pointer;
    }
`
const MenuBox = styled.div`
    width: 1440px;
    margin: 0 auto;
    display: flex;
    height: 100px;
    background: #ffffff;

    .logo {
        display: flex;
        align-items: center;
        flex:1;
    }
    .logo img {
        cursor: pointer;
    }

    ul {
        display:flex;
        justify-content:flex-end;
        align-items: center;
        white-space: pre;
        cursor: pointer;
    }

    li:last-child {
        margin-right: 30px;
    }

    li:nth-of-type(3) {
        color: #333;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 14px;
        margin-right: 30px;
    }

    li:not(:nth-of-type(3)) {
        color: #333;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 14px;
        margin-right: 40px;
    }
    
    li span {
        cursor: default;
        padding-left: 30px;
    }

    .hd_bt {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .alarm {
        display:flex;
        justify-content:center;
        align-items:center;
        width: 40px;
        height: 40px;
        background: #E7E7E7;
        border-radius: 10px;
        cursor: pointer;
    }

    .menu_btn {
        display:flex;
        justify-content:center;
        align-items:center;
        width: 40px;
        height: 40px;
        background: #000000;
        border-radius: 10px;
        margin-left: 15px;
        cursor: pointer;
    }
`