import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import Logo_navi from "../assets/logo_listore_navi.svg";
import Down from "../assets/icon_down_navi.svg";

const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  border-bottom: 1px solid #bbbbbb;
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
  a {
    font: normal 600 13px Noto Sans CJK KR;
    color: #9a9a9a;
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

const Header = () => (
  <Container>
    <MemberWrapper>
      <Link href="/login">
        <a className="membership">로그인</a>
      </Link>
      <a id="bar">｜</a>
      <Link href="/register">
        <a className="membership">회원가입</a>
      </Link>
    </MemberWrapper>

    <MenuWrapper>
      <Menu>
        <Link href="/">
          <a id="logo">
            <Logo_navi></Logo_navi>
          </a>

          {/* <a id="logo">로고 OR 웹사이트명</a> */}
        </Link>

        <Link href="/">
          <a className="menu">사이트 소개</a>
        </Link>
        <Link href="/">
          <a className="menu">나의 사이트</a>
        </Link>
      </Menu>

      <Rank>
        <ShowRank>
          <a>1</a>
          <a>더블슬래시</a>
        </ShowRank>
        <a id="dropdown">
          <Down></Down>
        </a>
        {/* <a id="dropdown">∨</a> */}
        {/* <Dropdown></Dropdown> */}
      </Rank>
    </MenuWrapper>
  </Container>
);

export default Header;
