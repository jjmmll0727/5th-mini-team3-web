import React , { useState, useEffect }from 'react';
import styled from "@emotion/styled";

const App=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font: normal normal 900 40px/59px Noto Sans CJK KR;
  

  label{
    margin-top:200px;
    text-align:center;
    color: #191919;
    font-size:40px;
    marginBottom: 75px;
    margin-bottom:50px;
  }

  span{
    letterspacing: -0.45px;
    color: #BBBBBB;
    display: flex;
    justify-content: center;
    font-size:18px;

    span{
      letterspacing: -0.45px;
      color: #707070;
      font-size:18px;
    }
  }
  input{
    border: none;
    border-bottom: 1px solid #767676;
    letterspacing: -0.55px;
    width: 575px;
    height: 75px;
    font: normal normal bold 22px/33px Noto Sans CJK KR;
  }
  
`;
const Idpw=styled.div`
  display: flex;
  justify-content: center;
  
`;
const Bstyle=styled.div`
  display: flex;
  justify-content: center;
  margin-top:50px;
  margin-bottom:70px;
  
  button{
    font: normal normal bold 22px/33px Noto Sans CJK KR;
    width: 575px;
    height: 75px;
    border: none;
    border-radius: 10px;
    color: #FFFFFF;
    background-color:#113358; 
  }
  
`;

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (signUpDone) {
      console.log("done");
      redirect("/register-success");
    }
  }, [signUpDone]);

  const handleClick = () => {
    console.log({id});
    console.log({pw});
    if(id.length===0){
      console.log("id failed");
      alert("아이디를 입력해주세요");
    }
    else if(pw.length===0){
      console.log("pw failed");
      alert("비밀번호를 입력해주세요");
    }
  }

  return (
  <App>
      <label>로그인 </label> 
    <Idpw>
      <input  type="id" placeholder="아이디" value={id} 
          onChange={({target:{value}})=>setId(value)}/>
    </Idpw>
    <Idpw>
      <input type="password" placeholder="비밀번호" value={pw} 
          onChange={({target:{value}})=>setPw(value)}/>
    </Idpw>
    <Bstyle >
      <button onClick={handleClick}>로그인</button>
    </Bstyle>
    <span > 아직 회원이 아니신가요? <span>회원가입</span> </span>
  </App>

);
  }
export default Login;