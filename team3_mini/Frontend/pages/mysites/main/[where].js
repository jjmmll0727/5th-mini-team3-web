import React, { useEffect, useState } from "react";
import { Row, Col, Menu, Dropdown, Button } from "antd";
import { EditOutlined, EllipsisOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import CustomMenu from "../../../components/Menu"
import SiteList from "../../../components/SiteList"
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import { GET_CATEGORY_REQUEST, GET_SITES_REQUEST } from "../../../actions";

const StyledHome = styled.div`
  font-family: Noto Sans CJK KR;
  margin-top: 200px;
  color: #767676;
  .main {
    padding-left: 50px;
    > h2 {
      font-size: 15px;
      margin-bottom: 20px;
    }
    h1 {
      font-weight: bolder;
    }
  }
  .header {
    > span {
      float: right;
      padding-right: 20px;
    }
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    border-right: 1px solid #bbbbbb;
    li {
      font-size: 18px;
      margin-bottom: 30px;
      cursor: pointer;
    }
  }
`;





const Home = () => {
  const [show, setShow] = useState(true);
  const [name, setName] = useState()
  const router = useRouter()
  const { where } = router.query
  const dispatch = useDispatch()
  const { me, token } = useSelector(state => state.user)
  const { Categories } = useSelector(state => state.site)
  const menu = (
    <Menu>
      <Menu.Item onClick={async () => {
        await axios.put(`/category/exclude`, { id: where }, { headers: {
          'authorization' : token,
        }})
        await dispatch({
          type: GET_CATEGORY_REQUEST,
          token: token
        })
        await router.push("/mysites/main/ALL")
        }} key="0">카테고리 삭제</Menu.Item>
    </Menu>
  );
  useEffect(() => {
    if(!me){
      alert("로그인 후 이용해주세요!")
      router.push('/login')
    }
  }, [ me ])
  useEffect(() => {
    console.log(Categories)
    setName(Categories.find(x => x._id === where).name)
  }, [ Categories, where ])
  useEffect(() => {
    dispatch({
      type: GET_SITES_REQUEST,
      token,
      category : where
    })
  },[ where ])
  const { currentWebsites } = useSelector((state) => state.site)
  return (
    <StyledHome>
      <Row>
        <Col md={6}></Col>
        <Col md={12}>
          <Row>
            <Col md={4}>
              <CustomMenu situation={"main"}/>
            </Col>
            <Col className="main" md={20}>
              <h2>김삼삼님의 사이트</h2>
              <Row>
                <Col md={16}>
                  <h1>{name}</h1>
                </Col>
                <Col className="header" md={8}>
                  <Dropdown overlay={menu} trigger={["click"]}>
                    <EllipsisOutlined style={{ fontSize: "30px" }} />
                  </Dropdown>

                  <EditOutlined style={{ fontSize: "30px" }} />
                </Col>
              </Row>
              <Button size="large" shape="round" onClick={() => setShow(prev => !prev)}>
                사이트 목록
              </Button>
              <Button size="large" shape="round">
                랭킹
              </Button>
              <SiteList cardList={currentWebsites} visible={show} />
            </Col>
          </Row>
        </Col>
        <Col md={6}></Col>
      </Row>
    </StyledHome>
  );
};

export default Home;