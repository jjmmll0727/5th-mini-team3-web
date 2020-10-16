import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { LOG_OUT_REQUEST, LOG_OUT_SUCCESS } from "../actions";
import router from "next/router";
// import { Dropdown } from "antd";
// import { AiOutlineDown } from "react-icons/ai"; 둘다 오류남

const Container = styled.header`
  min-width: 1800px;
  z-index: 100;
  display: block;
  position: fixed;
  padding: 20px 220px;
  padding-top: 0;
  margin: 0px;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: white;
  a {
    margin-left: 10px;
    margin-right: 10px;
    text-decoration: none;
  }
`;

const MemberWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 100px;
  span {
    font: normal 600 13px Noto Sans CJK KR;
    color: #9a9a9a;
    cursor: pointer;
  }
  a {
    font: normal 600 13px Noto Sans CJK KR;
    color: #9a9a9a;
    cursor: pointer;
  }
  #bar {
    margin: 0px;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 100px;
`;

const Menu = styled.span`
  display: inline-flex;
  float: left;
  align-items: center;

  margin: 10px 30px;
  font-size: 15px;
  a {
    font: normal 600 16px Noto Sans CJK KR;
    color: #191919;
  }
  .menu {
    margin-right: 40px;
  }
  #logo {
    font: normal bolder 26px Noto Sans CJK KR;
    color: #191919;
    margin-right: 80px;
  }
`;

const Rank = styled.span`
  display: inline-block;
  float: right;
  width: 250px;
  margin: 10px 0px;
  a {
    font: normal 600 16px Noto Sans CJK KR;
    color: #191919;
  }
  #dropdown {
    font-size: 20px;
    margin: 0px;
  }
`;

const ShowRank = styled.span`
  display: inline-block;
  width: 80%;
`;



const NoLogged = () => {
  return (
    <MemberWrapper>
      <Link href="/login">
        <a className="membership">로그인</a>
      </Link>
      <a id="bar">｜</a>
      <Link href="/register">
        <a className="membership">회원가입</a>
      </Link>
  </MemberWrapper>
  )
}

const Logged = () => {
  const dispatch = useDispatch()
  return (
    <MemberWrapper>
        <span onClick={() => {
          dispatch({
            type: LOG_OUT_REQUEST,
          })
          router.push("/")
        }}>로그아웃</span>
  </MemberWrapper>
  )
}

const Header = () => {
  const { me } = useSelector(state => state.user)
  return (
    <Container>
      {me ? <Logged /> : <NoLogged />}
      <Menu>
        <Link href="/">
          <a id="logo">로고 OR 웹사이트명</a>
        </Link>

        <Link href="/">
          <a className="menu">사이트 소개</a>
        </Link>
        <Link href="/mysites/main/ALL">
          <a className="menu">나의 사이트</a>
        </Link>
      </Menu>

      <Rank>
        <ShowRank>
          <a>1</a>
          <a>더블슬래시</a>
        </ShowRank>
        <a id="dropdown">∨</a>
      </Rank>
    </Container>
  );
}
export default Header;
