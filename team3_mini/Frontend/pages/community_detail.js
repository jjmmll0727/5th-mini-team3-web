import React, { Component } from 'react';
import styled from "@emotion/styled";
import AppLayout from "../components/AppLayout"
import { HeartFilled,HeartOutlined } from "@ant-design/icons";
import { Button } from 'antd';
import { Input } from 'antd';

const App = styled.div`
  padding-left: 50px;
  display: flex;
  flex-direction: column; 
`;

const Memo = styled.div`
  flex-direction:row;
  margin-top:55px;
  margin-bottom:50px;
    label{
      margin-right:41px;
      font-size:16px;
      font: normal normal normal 16px/24px Noto Sans CJK KR;
      letter-spacing: -0.4px;
      color: #767676;
    }
    TextArea{
      color: #4D4D4D;
      width:990px;
      height:350px;
    }
    span{
      line-height:200%;
    }
  `;

  const Content=styled.div`
    img{
      width: 34px;
      height: 50px;
      margin-right:41px;
      margin-bottom:60px;
    }
    span{
      font: normal normal bold 26px/38px Noto Sans CJK KR;
      color: #4D4D4D;
      
      font-size:18px;
    }
    label{
      font-size:16px;
      font: normal normal normal 16px/24px Noto Sans CJK KR;
      letter-spacing: -0.4px;
      color: #767676;
      margin-right:41px;
      margin-bottom:60px;
      
    }
    
    div{
      margin-top:60px;

      Button{
        font: normal normal medium 14px/20px Noto Sans CJK KR;
        border: 1px solid #4D4D4D;
        font-size: 14px;
        width:65px;
        height:38px;
        background-color: #FFFFFF;
      }
    }
`;
  const Title=styled.div`
    margin-bottom:70px;
    margin-top:66px;
    font: normal normal bold 40px/59px Noto Sans CJK KR;

    label:nth-of-type(1){
      font-size:18px;
      color: #4D4D4D;
      float:left;

    }
    label:nth-of-type(2){
      font-size:40px;
      color:#191919;
    }
    button{
      color: #BBBBBB;
      float:right;
      font-size:40px;
    }
    
  `;
  
const { TextArea } = Input;

const Detail = () => (
  <AppLayout>
    <App >
      <Title>
        <label >커뮤니티</label><br></br>
        <label >과제/발표</label>
        <Button type="link" ><HeartFilled /><HeartOutlined /></Button>
      </Title>
      <Content>
      <img/> <span>사용자가 지정한 제목</span><br></br>
      <label>URL</label><span>https://academic.naver.com/</span><br></br>
      </Content> 
      
      <Memo>
      <label>메모</label>
      <TextArea placeholder="사용자가 입력한 메모 사용자가 입력한 메모 사용자가 입력한 메모 사용자가 입력한 메모 사용자가 입력한 메모 사용자가 입력한 메모 사용자가 입력한 메모 사용자가 입력한 메모 사용자가 입력한 메모"
              readOnly/>
    </Memo>
    <Content>
      
      <label>파일</label><span>https://academic.naver.com/</span><br></br>
      <div>
        <label>공개<br></br>설정</label><Button>공개</Button>
      </div>
      </Content> 
    </App> 
  </AppLayout>

);

export default Detail;