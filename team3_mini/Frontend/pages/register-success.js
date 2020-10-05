import Link from "next/link";
import React from "react";

const AfterRegister = () => (
  <div
    style={{
      width: "600px",
      height: "800px",
      margin: "0 auto",
      left: "50%",
      top: "50%",
      display: "flex",
      flexDirection: "column",
      marginTop: "200px",
    }}
  >
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        style={{
          background: "#EEEEEE",
          borderRadius: "50%",
          width: "204px",
          height: "204px",
          margin: "0px auto",
        }}
        src=""
        alt="로고"
      />
      <span
        style={{
          textAlign: "center",
          color: "#113358",
          font: "normal normal bold 48px/60px Noto Sans CJK KR",
          margin: "20px",
        }}
      >
        환영합니다!
      </span>
      <span
        style={{
          textAlign: "center",
          color: "#767676",
          font: "normal normal normal 24px/60px Noto Sans CJK KR",
        }}
      >
        회원 가입이 성공적으로 완료되었습니다!
      </span>
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
  </div>
);
export default AfterRegister;
