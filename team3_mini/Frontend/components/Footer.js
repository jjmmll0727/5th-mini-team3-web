import React from "react";
import styled from "@emotion/styled";

const Container = styled.footer`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #eeeeee;
  a {
    color: #bbbbbb;
    margin-left: 10px;
    margin-right: 10px;
    text-decoration: none;
  }
`;

const Logo = styled.span`
  display: inline-flex;
  width: 200px;
  height: 100px;
  justify-content: center;
  align-items: center;
  margin: 40px 10px 40px;
  background-color: #dcdcdc;
`;

const Wrapper = styled.span`
  display: flex;
  flex-direction: column;
  margin: 40px;
`;

const Menu = styled.div`
  display: flex;
  margin-bottom: 20px;
  font: normal normal normal 12px/20px Noto Sans CJK KR;
  #bar {
    margin: 0px;
  }
`;

const Info = styled.div`
  display: flex;
  font: normal normal normal 12px/25px Noto Sans CJK KR;
`;

const Footer = () => (
  <Container>
    <Logo>
      <a>사이트 로고</a>
    </Logo>
    <Wrapper>
      <Menu>
        <a>사이트소개</a>
        <a id="bar">｜</a>
        <a>광고안내</a>
        <a id="bar">｜</a>
        <a>제휴문의</a>
        <a id="bar">｜</a>
        <a>이용약관</a>
        <a id="bar">｜</a>
        <a>개인정보처리방침</a>
        <a id="bar">｜</a>
        <a>책임한계와 법적고지</a>
      </Menu>
      <Info>
        <a>웹사이트명 대표: ____ E-mail : ______@gmail.com 주소 : 경기도 안산시 상록구 광덕1로 355, 209</a>
      </Info>
      <Info>
        <a>COPYRIGHT(C)______. ALL RIGHTS RESERVED.</a>
      </Info>
    </Wrapper>
  </Container>
);

export default Footer;
