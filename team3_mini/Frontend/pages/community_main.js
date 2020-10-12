import React, { Component } from 'react';
import './App.css';
import { HeartFilled } from "@ant-design/icons";
import 'antd/dist/antd.css';
import { Button} from 'antd';
import styled from "@emotion/styled";


const App = styled.div`
  width:100%;
  display: flex;
  flex-direction: column; 
  font: normal normal bold 40px/59px Noto Sans CJK KR;
  color: #767676;
  
  


  

  
  
  
  `;
  
  const Title=styled.div`
    margin-bottom:70px;
    margin-top:66px;

    label:nth-of-type(1){
      font-size:18px;
      color: #4D4D4D;
      

    }
    label:nth-of-type(2){
      font-size:40px;
      color:#191919;
    }
  `;
  const Sub= styled.div`
    font: normal normal bold 19px/25px Noto Sans CJK KR;
    color: #4D4D4D;
    div:nth-of-type(1) {
      color: #4D4D4D;
      float: left;
    }
    button{
      color: #BBBBBB;
      float:right;
      
      
      
    }
    div:nth-of-type(2) {
      font-size:16px;
      
    }
    div:nth-of-type(3) {
      font-size:16px;
      color: #808080;
    }
    hr{
      
      border: 1px solid #EEEEEE;
    }
  `;
  class Subject extends Component{
    render() {
      return ( 
            <Sub>
              <div>{this.props.title}</div>
             
              <Button type="link" >{this.props.num }<HeartFilled /></Button><br/>
              
              <div >{this.props.sub}</div>
              <div >{this.props.date}</div>
              <br></br>
              <hr></hr>
            </Sub>
      );
    }
  }
//<--!한 클래스 당 하나의 최상위 태그-->


const Community = () =>(
  <App >
    <Title>
      <label >커뮤니티<br></br></label>
      <label >ALL</label>
    </Title>         
    <Subject title="사용자가 지정한 제목(띄어쓰기 포함 30자 제한)"
             sub= "과제/발표"
             date="2020-09-20/PM 2:05"
             num="2500"></Subject>
    <Subject title="사용자가 지정한 제목(띄어쓰기 포함 30자 제한)"
             sub= "과제/발표"
             date="2020-09-20/PM 2:05"
             num="2500"></Subject>
       </App>
);
export default Community;

