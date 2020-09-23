import React, { useEffect } from "react";
import styled from "@emotion/styled";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import redirect from "nextjs-redirect";

import { Form, Input, DatePicker, Button } from "antd";
import { SIGN_UP_REQUEST } from "../actions";

const StyledRegister = styled.div`
  width: 600px;
  height: 1200px;
  left: 50%;
  top: 50%;
  margin: auto;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  label {
    font-size: 18px;
    font-family: Noto Sans CJK KR;
  }
  > .Register {
    text-align: center;
    display: flex;
    flex-direction: column;
    span:nth-of-type(1) {
      text-align: center;
      color: #767676;
      font: normal normal 900 40px/59px Noto Sans CJK KR;
    }
    span:nth-of-type(2) {
      color: #bbbbbb;
      font: normal normal normal 18px/27px Noto Sans CJK KR;
      padding: 10px 0px;
      margin-bottom: 30px;
    }
  }
  form {
    span {
      text-align: center;
      color: #767676;
      font-display: normal normal 900 40px/59px Noto Sans CJK KR;
    }
    > div {
      color: #767676;
      padding: 30px 0px;
      display: flex;
      justify-content: space-between;
    }
  }
`;

const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 16 },
};

const CustomInput = ({ label, name, message, notreq, type }) => {
  return (
    <Form.Item label={label} name={name} rules={[{ required: notreq ? false : true, message: message ? message : null }]}>
      <Input
        type={type ? type : null}
        style={{
          border: "none",
          borderBottom: "1px solid #767676",
        }}
      />
    </Form.Item>
  );
};
const CustomPass = ({ label, name, message, notreq, type }) => {
  return (
    <Form.Item label={label} name={name} rules={[{ required: notreq ? false : true, message: message ? message : null }]}>
      <Input.Password
        style={{
          border: "none",
          borderBottom: "1px solid #767676",
        }}
      />
    </Form.Item>
  );
};

const Register = () => {
  const { signUpError, signUpDone } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
    }
    dispatch({
      type: "USER_ERROR_RESET",
    });
  }, [signUpError]);
  useEffect(() => {
    if (signUpDone) {
      console.log("done");
      redirect("/register-success");
    }
  }, [signUpDone]);

  const onFinish = (data) => {
    console.log(data);
    if (data.password === data.passwordCheck) {
      dispatch({
        type: SIGN_UP_REQUEST,
        data: {
          ...data,
          birth: data.birth._d,
        },
      });
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const dateFormat = "YYYY/MM/DD";

  return (
    <StyledRegister>
      <div className="Register">
        <span>회원 가입</span>
        <span>* 표시는 필수 입력 항목입니다.</span>
      </div>
      <Form onFinish={onFinish} onFinishFailed={onFinishFailed} {...layout} name="basic" initialValues={{ remember: true }}>
        <Form.Item label="아이디" name="userId" rules={[{ required: true, message: "아이디를 입력해주세요!" }]}>
          <Input
            style={{
              border: "none",
              borderBottom: "1px solid #767676",
            }}
            maxLength="50"
          />
        </Form.Item>
        <CustomPass label=" 비밀번호" name="password" message="비밀번호를 입력해주세요!" />
        <CustomPass type="password" label=" 비밀번호확인" name="passwordCheck" message="비밀번호 확인을 입력해주세요!" />
        <CustomInput label=" 이름" name="name" message="이름을 입력해주세요!" />
        <Form.Item label=" 생년월일" name="birth" rules={[{ required: true, message: "생년월일을 입력해주세요!" }]}>
          <DatePicker defaultValue={moment("2020/01/01", dateFormat)} format={dateFormat} />
        </Form.Item>

        <CustomInput type="email" label=" 이메일" name="email" message="이메일을 입력해주세요!" />
        <CustomInput label=" 휴대폰번호" name="phone" message="휴대폰번호를 입력해주세요!" />
        <CustomInput label="전화번호" notreq={true} name="homephone" />
        <Form.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
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
                marginLeft: "30px",
              }}
              htmlType="submit"
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
        </Form.Item>
      </Form>
    </StyledRegister>
  );
};

export default Register;
