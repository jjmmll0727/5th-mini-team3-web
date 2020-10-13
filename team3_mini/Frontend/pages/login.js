import React, { useEffect, useState } from 'react';
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


// const App = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   font: normal normal 900 40px/59px Noto Sans CJK KR;
  

//   label{
//     margin-top:200px;
//     text-align:center;
//     color: #191919;
//     font-size:40px;
//     margin-bottom: 75px;
//     margin-bottom:50px;
//   }

//   span{
//     letter-spacing: -0.45px;
//     color: #BBBBBB;
//     display: flex;
//     justify-content: center;
//     font-size:18px;

//     span{
//       letter-spacing: -0.45px;
//       color: #707070;
//       font-size:18px;
//     }
//   }
//   input{
//     border: none;
//     border-bottom: 1px solid #767676;
//     letter-spacing: -0.55px;
//     width: 575px;
//     height: 75px;
//     font: normal normal bold 22px/33px Noto Sans CJK KR;
//   }
  
// `;
// const Idpw=styled.div`
//   display: flex;
//   justify-content: center;
  
// `;
// const Bstyle=styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top:50px;
//   margin-bottom:70px;
  
//   button{
//     font: normal normal bold 22px/33px Noto Sans CJK KR;
//     width: 575px;
//     height: 75px;
//     border: none;
//     border-radius: 10px;
//     color: #FFFFFF;
//     background-color:#113358; 
//   }
  
// `;

// const Login = () => {
//   const [id, setId] = useState("");
//   const [pw, setPw] = useState("");
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (signUpDone) {
//       console.log("done");
//       redirect("/register-success");
//     }
//   }, [signUpDone]);

//   const handleClick = () => {
//     console.log({id});
//     console.log({pw});
//     if(id.length===0){
//       console.log("id failed");
//       alert("아이디를 입력해주세요");
//     }
//     else if(pw.length===0){
//       console.log("pw failed");
//       alert("비밀번호를 입력해주세요");
//     }
//   }

//   return (
//   <App>
//       <label>로그인 </label> 
//     <Idpw>
//       <input  type="id" placeholder="아이디" value={id} 
//           onChange={({target:{value}})=>setId(value)}/>
//     </Idpw>
//     <Idpw>
//       <input type="password" placeholder="비밀번호" value={pw} 
//           onChange={({target:{value}})=>setPw(value)}/>
//     </Idpw>
//     <Bstyle >
//       <button onClick={handleClick}>로그인</button>
//     </Bstyle>
//     <span > 아직 회원이 아니신가요? <span>회원가입</span> </span>
//   </App>

// );
//   }

export default Login