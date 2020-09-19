import React from "react";

const AfterRegister = () => (
  <div
    style={{
      width: "600px",
      height: "1200px",
      left: "50%",
      top: "50%",
      position: "fixed",
      marginLeft: "-300px",
      marginTop: "-600px",
      display: "flex",
      flexDirection: "column",
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
          color: "#767676",
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
          backgroundColor: "#BBBBBB",
          border: "none",
          borderRadius: "10px",
        }}
      >
        <span
          style={{
            color: "#FFFFFF",
            font: "normal normal bold 22px/33px Noto Sans CJK KR",
          }}
        >
          취소하기
        </span>
      </button>
      <button
        style={{
          width: "280px",
          height: " 75px",
          backgroundColor: "#767676",
          border: "none",
          borderRadius: "10px",
        }}
      >
        <span
          style={{
            color: "#FFFFFF",
            font: "normal normal bold 22px/33px Noto Sans CJK KR",
          }}
        >
          가입하기
        </span>
      </button>
    </div>
  </div>
);
export default AfterRegister;
