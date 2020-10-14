import React, { useEffect, useState } from "react";
import { Row, Col, Menu, Dropdown, Button } from "antd";
import { EditOutlined, EllipsisOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import Card from "../../../components/Card";
import CustomMenu from "../../../components/Menu"
import SiteList from "../../../components/SiteList"
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { GET_SITES_REQUEST } from "../../../actions";

import Nothing from "../../../components/MyPage/nothing"

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



const menu = (
  <Menu>
    <Menu.Item key="0">카테고리 삭제</Menu.Item>
  </Menu>
);

const Home = () => {
  const [show, setShow] = useState(true);
  const router = useRouter()
  const { where } = router.query
  const dispatch = useDispatch()
  const { me } = useSelector(state => state.user)
  useEffect(() => {
    dispatch({
      type: GET_SITES_REQUEST,
      data: where
    })
  }, [ where ])
  useEffect(() => {
    if(!me){
      alert("로그인 후 이용해주세요!")
      router.push('/login')
    }
  }, [ me ])
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
                  <h1>{where}</h1>
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