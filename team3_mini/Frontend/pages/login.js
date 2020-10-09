import React, { useEffect } from 'react';
import styled from "@emotion/styled";
import Link from "next/link"
import { Form, Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_REQUEST } from '../actions';
import router from "next/router"

const StyledLogin = styled.div`
    text-align: center;
    margin: 200px 0px;
    font-family: Noto Sans CJK KR;
    label{
        display:block;
        font-size:30px;
        color:#767676;
        font-weight: bolder;
        letter-spacing: -1px;
        margin-bottom: 40px;
        }
    input{
        border: none;
        border-bottom: 1px solid #767676;
        font: normal normal normal 22px/33px Noto Sans CJK KR;
        letter-spacing: -0.55px;
        width: 450px;
        height: 55px;
    }
    .login_pwd{
        width: 450px;
        border: none;
        border-bottom: 1px solid #767676;
    }
    button{
        width: 450px;
        height: 65px;
        background-color: #767676;
        border: none;
        border-radius: 10px;
        opacity: 1;
        color: #FFFFFF;
        margin-top: 20px;
        font-size: 20px;
        cursor: pointer;
    }
    a{
        color: #767676;
    }
`

const Login = () => {
    const dispatch = useDispatch()
    const { loginDone } = useSelector(state => state.user)

    useEffect(() => {
        if(loginDone)
        router.push("/mysites/main/ALL")
    }, [loginDone])

    const onFinished = (data) => {
        dispatch({
                type: LOG_IN_REQUEST,
                data
            }
        )
    }


   return ( 
    <>
    <StyledLogin>
        <label>로그인 </label>
        <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinished}
        >
        <Form.Item
            name="userId"
            rules={[{ required: true, message: '아이디를 입력해주세요!' }]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            name="password"
            style={{
                width: "none"
            }}
            rules={[{ required: true, message: '비밀번호를 입력해주세요!' }]}
        >
            <Input.Password className="login_pwd"/>
        </Form.Item>
        <Form.Item>
            <button>로그인</button>
        </Form.Item>
        </Form>
            <p style={{
                    fontsize:"18px",
                    font: "normal normal normal 18px/27px Noto Sans CJK KR",
                    marginTop: "75px"
                    }}>
                <span style={{
                    letterspacing: "-0.45px",
                    color: "#BBBBBB"}}> 
                    아직 회원이 아니신가요?{" "}
                </span>
                <Link href="/register">
                회원가입
                </Link>
            </p>
        </StyledLogin>
    </>
  
)};


export default Login;