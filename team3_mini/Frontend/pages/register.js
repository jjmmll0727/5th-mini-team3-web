import React from "react";

const Register = () => (
  // <div style={{ position: "absolute", top: "50%", left: "50%" }}>
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
      <span
        style={{
          textAlign: "center",
          color: "#767676",
          font: "normal normal 900 40px/59px Noto Sans CJK KR",
        }}
      >
        회원 가입
      </span>
      <span
        style={{
          color: "#BBBBBB",
          font: "normal normal normal 18px/27px Noto Sans CJK KR",
          padding: "10px 0px",
          marginBottom: "30px",
        }}
      >
        * 표시는 필수 입력 항목입니다.
      </span>
    </div>

    <form>
      <div
        style={{
          color: "#767676",
          font: "normal normal normal 22px/33px Noto Sans CJK KR",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <label style={{ width: "180px" }}>* 아이디</label>
        <input
          style={{
            border: "none",
            borderBottom: "1px solid #767676",
            width: "330px",
          }}
          type="text"
          id="userId"
          name="userId"
          maxLength="50"
          value=""
        />
        <button
          style={{
            background: "#BBBBBB",
            border: "none",
            borderRadius: "17px",
            width: "92px",
            height: "34px",
          }}
        >
          <span style={{ color: "#FFFFFF" }}>중복확인</span>
        </button>
      </div>
      <div
        style={{
          color: "#767676",
          font: "normal normal normal 22px/33px Noto Sans CJK KR",
          padding: "30px 0px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <label style={{ width: "180px" }}>* 비밀번호</label>
        <input
          style={{
            border: "none",
            borderBottom: "1px solid #767676",
            width: "430px",
          }}
          type="text"
          id="userPass"
          name="userPass"
          maxLength="50"
          value=""
        />
      </div>
      <div
        style={{
          color: "#767676",
          font: "normal normal normal 22px/33px Noto Sans CJK KR",
          padding: "30px 0px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <label style={{ width: "180px" }}>* 비밀번호 확인</label>
        <input
          style={{
            border: "none",
            borderBottom: "1px solid #767676",
            width: "430px",
          }}
          type="text"
          id="userPass"
          name="userPass"
          maxLength="50"
          value=""
        />
      </div>
      <div
        style={{
          color: "#767676",
          font: "normal normal normal 22px/33px Noto Sans CJK KR",
          padding: "30px 0px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <label style={{ width: "180px" }}>* 이름</label>
        <input
          style={{
            border: "none",
            borderBottom: "1px solid #767676",
            width: "430px",
          }}
          type="text"
          id="userName"
          name="userName"
          maxLength="50"
          value=""
        />
      </div>
      <div
        style={{
          color: "#767676",
          font: "normal normal normal 22px/33px Noto Sans CJK KR",
          padding: "30px 0px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <label style={{ width: "180px" }}>* 생년월일</label>
        <Datepicker />
      </div>
      <div
        style={{
          color: "#767676",
          font: "normal normal normal 22px/33px Noto Sans CJK KR",
          padding: "30px 0px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <label style={{ width: "180px" }}>* 이메일</label>
        <input
          style={{
            border: "none",
            borderBottom: "1px solid #767676",
            width: "330px",
          }}
          type="text"
          id="userName"
          name="userName"
          maxLength="50"
          value=""
        />
        <button
          style={{
            background: "#BBBBBB",
            border: "none",
            borderRadius: "17px",
            width: "92px",
            height: "34px",
          }}
        >
          <span style={{ color: "#FFFFFF" }}>중복확인</span>
        </button>
      </div>
      <div
        style={{
          color: "#767676",
          font: "normal normal normal 22px/33px Noto Sans CJK KR",
          padding: "30px 0px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <label style={{ width: "180px" }}>* 휴대폰번호</label>
        <input
          style={{
            border: "none",
            borderBottom: "1px solid #767676",
            width: "430px",
          }}
          type="text"
          id="userName"
          name="userName"
          maxLength="50"
          value=""
          placeholder="- 없이 입력하세요"
        />
      </div>
      <div
        style={{
          color: "#767676",
          font: "normal normal normal 22px/33px Noto Sans CJK KR",
          padding: "30px 0px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <label style={{ width: "180px", paddingLeft: "15px" }}>전화번호</label>
        <input
          style={{
            border: "none",
            borderBottom: "1px solid #767676",
            width: "430px",
          }}
          type="text"
          id="userName"
          name="userName"
          maxLength="50"
          value=""
          placeholder="- 없이 입력하세요"
        />
      </div>
    </form>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "30px",
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
const Datepicker = () => {
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let dayoption = [];
  for (let i = 1; i <= days[0]; i++) {
    dayoption.push(i);
  }
  let monthoption = [];
  for (let i = 1; i <= 12; i++) {
    monthoption.push(i);
  }
  let yearoption = [];
  let d = new Date();
  for (var i = 1980; i <= d.getFullYear(); i++) {
    yearoption.push(i);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "430px",
      }}
    >
      <select style={{ width: "142px", height: "51px" }} id="year" name="yyyy">
        {yearoption.map((i) => {
          return <option value={i}>{i}</option>;
        })}
      </select>
      <select style={{ width: "125px", height: "51px" }} id="month" name="mm">
        {monthoption.map((i) => {
          return <option value={i}>{i}</option>;
        })}
      </select>
      <select style={{ width: "125px", height: "51px" }} id="day" name="dd">
        {dayoption.map((i) => {
          return <option value={i}>{i}</option>;
        })}
      </select>
    </div>
  );
};

export default Register;
