import React from "react";
import styled from "styled-components";
import Logo from "../../assets/img/logo.svg";
import Alarm from "../../assets/img/noti.svg";
import MenuBtn from "../../assets/img/hamburger-button.svg";
import { Link, useNavigate } from "react-router-dom";
import { useIsLoggedInContext } from "../../components/auth/provider";
import { client } from "../..";

export default function Header() {
  const navigate = useNavigate();
  const [isLoggin, setLogin, logout] = useIsLoggedInContext();
  const logoutEvent = () => {
    client.clearStore();
    logout();
  };

  return (
    <Layout>
      <LGBox>
        {!isLoggin ? (
          <ul>
            <Link
              to={"/oauth/"}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <li>로그인/회원가입</li>
            </Link>
            <li>회원정보찾기</li>
          </ul>
        ) : (
          <ul>
            <li>마이페이지</li>
            <li onClick={logoutEvent}>로그아웃</li>
          </ul>
        )}
      </LGBox>
      <MenuBox>
        <Content>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <ul>
            <li>한국외식산업연구원</li>
            <li>외식정보</li>
            <li>
              알림마당
              <span>ㅣ</span>
            </li>
            <li>패널설문조사</li>
            <li>정부지원</li>
            <li>교육</li>
            <li>부가혜택몰</li>
          </ul>
          <div className="hd_bt">
            <div className="alarm">
              <img src={Alarm} alt="noti" />
            </div>
            <div className="menu_btn">
              <img src={MenuBtn} alt="menu_bt" />
            </div>
          </div>
        </Content>
      </MenuBox>
    </Layout>
  );
}

const Layout = styled.div`
  border-bottom: 1px solid #e7e7e7;
  * {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;
const LGBox = styled.div`
  background: linear-gradient(90deg, #9b27aa 0%, #173dd0 100%);
  height: 30px;

  ul {
    display: flex;
    align-items: center;
    justify-content: right;
    width: 1240px;
    margin: 0 auto;
    color: #fff;
    font-size: 12px;
    height: 30px;
  }

  li {
    padding-left: 20px;
    cursor: pointer;
  }
`;
const MenuBox = styled.div`
  width: 1240px;
  margin: 0 auto;
  display: flex;
  height: 100px;
  background: #ffffff;
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .logo img {
    cursor: pointer;
  }

  ul {
    display: flex;
    align-items: center;
    white-space: pre;
    cursor: pointer;
    margin-left: 101px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: #e7e7e7;
    border-radius: 10px;
    cursor: pointer;
  }

  .menu_btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: #000000;
    border-radius: 10px;
    margin-left: 15px;
    cursor: pointer;
  }
`;
