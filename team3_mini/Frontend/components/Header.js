import React from "react";
import Link from 'next/link';
import styled from "@emotion/styled";
// import { Dropdown } from "antd";
// import { AiOutlineDown } from "react-icons/ai"; 둘다 오류남

const Container = styled.header`
  display: block;
  position: fixed;
  padding: 20px 220px;
  margin: 0px;
  top: 0px;
  left: 0px;
  right: 0px;

  background-color: #BBBBBB;
  a{
    margin-left: 10px;
    margin-right: 10px;
    text-decoration: none;
  }
`;

const MemberWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  
  margin: 10px 30px;
  a{
    font: normal 600 13px Noto Sans CJK KR;
    color: #9A9A9A;
  }
  #bar{
    margin:0px;
  }
`;

const Menu = styled.span`
  display: inline;
  float: left;
  
  margin: 10px 30px;
  font-size: 15px;
  a{
    font: normal 600 16px Noto Sans CJK KR;
    color: #707070;
  }
  .menu{
    margin-right: 40px;
  }
  #logo{
    font: normal bolder 26px Noto Sans CJK KR;
    color: #767676;
    margin-right: 80px;
  }
`;

const Rank = styled.span`
  display: inline-block;
  float: right;
  width: 250px;

  margin: 10px 30px;
  a{
    font: normal 600 16px Noto Sans CJK KR;
    color: #707070;
  }
  #dropdown{
    font-size: 20px;
  }
`;

const ShowRank = styled.span`
  display: inline-block;
  width: 80%;
`;


const Header = () => (
  <Container>
    <MemberWrapper>
      <Link href="/">
        <a className='membership'>로그인</a>
      </Link>
      <a id='bar'>｜</a>
      <Link href="/">
        <a className='membership'>회원가입</a>
      </Link>
    </MemberWrapper>

    <Menu>
      <Link href="/">
        <a id='logo'>로고 OR 웹사이트명</a>
      </Link>
  
      <Link href="/">
        <a className='menu'>사이트 소개</a>
      </Link>
      <Link href="/">
        <a className='menu'>나의 사이트</a>
      </Link>
    </Menu>

    <Rank>
    <ShowRank>
      <a>1</a><a>더블슬래시</a>
    </ShowRank>
      <a id='dropdown'>∨</a>
    </Rank>
  </Container>
);

export default Header;