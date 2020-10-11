import Link from "next/link";
import React from "react";
import Logo from "../asssets/img_listoreGraphic_signUpDone.svg";
import styled from "@emotion/styled";
const StyledComponent = styled.div`
  width: 600px;
  height: 800px;
  margin: 0 auto;
  left: 50%;
  top: 50%;
  display: flex;
  flex-direction: column;
  margin-top: 400px;

  > .Register {
    text-align: center;
    display: flex;
    flex-direction: column;
    span:nth-of-type(1) {
      text-align: center;
      color: #113358;
      font: normal normal bold 48px/60px Noto Sans CJK KR;
      margin: 20px;
    }
    span:nth-of-type(2) {
      color: #767676;
      font: normal normal normal 24px/60px Noto Sans CJK KR;
      padding: 10px 0px;
      margin-bottom: 30px;
    }
  }

  svg {
    width: 178px;
    height: 149px;
    margin: 0px auto;
  }
`;

const AfterRegister = () => (
  <StyledComponent>
    <div className="Register">
      <Logo />
      <span>환영합니다!</span>
      <span>회원 가입이 성공적으로 완료되었습니다!</span>
    </div>

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "50px",
      }}
    >
      <button
        style={{
          width: "280px",
          height: "75px",
          backgroundColor: "#FFFFFF",
          border: "1px solid #113358",
          borderRadius: "10px",
        }}
      >
        <Link href="/">
          <a
            style={{
              color: "#113358",
              font: "normal normal bold 22px/33px Noto Sans CJK KR",
            }}
          >
            홈으로 가기
          </a>
        </Link>
      </button>
      <button
        style={{
          width: "280px",
          height: " 75px",
          backgroundColor: "#113358",
          border: "none",
          borderRadius: "10px",
        }}
      >
        <Link href="/login">
          <a
            style={{
              color: "#FFFFFF",
              font: "normal normal bold 22px/33px Noto Sans CJK KR",
            }}
          >
            로그인하기
          </a>
        </Link>
      </button>
    </div>
  </StyledComponent>
);
export default AfterRegister;
