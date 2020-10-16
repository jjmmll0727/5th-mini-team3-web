import React, { Component, useEffect, useState } from 'react';
import { HeartFilled } from "@ant-design/icons";
import { Button, Col, Menu, Row} from 'antd';
import styled from "@emotion/styled";
import AppLayout from "../../../components/AppLayout"
import Axios from 'axios';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';


const App = styled.div`
  display: flex;
  padding-left: 50px;
  flex-direction: column; 
  font: normal normal bold 40px/59px Noto Sans CJK KR;
  color: #767676;
  margin-top: 200px;
  ul{
    margin-left: 150px;
    border-right: 1px solid grey
  }
  li{
    cursor: pointer;
    font-weight:bolder;
    font-size: 18px;
    margin-bottom: 30px;
    position: relative;
    list-style: none;
    margin: 0;
    a{
      color: black;
    }
  }
  `;
const Title=styled.div`
    margin-bottom:70px;
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


const Community = () =>
  {
    const router = useRouter()
    const { where } = router.query
    const [name, setName] = useState()
    const { token } = useSelector(state => state.user)
    const [ categoryList, setCategoryList ] = useState([])
    const [ communitySites, setCommunitySites ] = useState([])

    useEffect(() => {
      const getData = async () => {
        const result = await Axios.get("/main/community/categories", {
          headers:{
            "authorization": token
          }
        })
        await setCategoryList(result.data.categories)
        if(where == 1){
          const result3 = await Axios.get('/main/community/sites', {
            headers : {
              "authorization": token
            }
          })
          setCommunitySites(result3.data.sites)
          await setName('ALL')
        } else {
          console.log(where)
          const result2 = await Axios.get(`/main/community/category_site?category_id=${where}` , {
            headers:{
              "authorization": token
            }
          })
  
          await setCommunitySites(result2.data.sites)
          await setName(categoryList.find(x => x._id === where).name)
        }
        
      }
      if(token){
        getData();
      }
      else{
        alert("로그인 후 이용해주세요!")
        router.push("/login")
      }
    }, [ where ]) 
    return (
      <App >
        <Row>
          <Col md={6}>
            <ul>
            {categoryList.map((data) => (
              <li>
                <Link href={`/community/community_main/${data._id}`}>
                  <a>{data.name}</a>
                </Link>
              </li>
            ))}
          </ul>
          </Col>
          <Col md={18} style={{ paddingLeft: "100px", paddingRight: "250px" }}>
            <Title>
              <label >커뮤니티<br></br></label>
            <label >{name}</label>
            </Title>         
            {communitySites.map(data => <Subject
              title={data.title}
              sub={data.description}
              date={data.time}
              num={data.like}
            >
            </Subject>)}
          </Col>

        </Row>

      </App>

    );
  }
export default Community;

