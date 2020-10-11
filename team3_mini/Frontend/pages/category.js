import React from "react";
import { Row, Col, Button, Dropdown, Menu, Tabs } from "antd";
import { EditOutlined, EllipsisOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import SiteList from "../components/SiteList";
import shortid from "shortid";
import faker from "faker";
import HeartIcon from "../asssets/icon_heartFill_mySite_likeList.svg";
const { TabPane } = Tabs;
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
      color: #767676;
    }
  }
  .header {
    > span {
      float: right;
      padding-right: 20px;
    }
  }
  span {
    margin: 5px;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    border-right: 1px solid #bbbbbb;
    li {
      font-size: 18px;
      margin-bottom: 30px;
    }
  }
  button {
    margin-top: 30px;
    margin-right: 30px;
  }
  .tab-header {
    margin-top: 10px;
    padding: 5px;
    border-bottom: 3px solid #bbbbbb;
    display: inline-block;
  }
`;
const menu = (
  <Menu>
    <Menu.Item key="0">카테고리 삭제</Menu.Item>
  </Menu>
);
const cardDataDummy = Array(5)
  .fill(0)
  .map(() => ({
    id: shortid.generate(),
    title: faker.name.findName(),
    content: Array(faker.random.number(3))
      .fill(0)
      .map(() => faker.lorem.sentence()),
    href: faker.internet.url(),
  }));

const Category = () => {
  return (
    <StyledHome>
      <Row>
        <Col md={6}></Col>
        <Col md={12}>
          <Row>
            <Col md={4}>
              <ul>
                <li style={{ fontWeight: "bolder" }}>ALL</li>
                <li>과제/발표</li>
                <li>논문</li>
                <li>디자인</li>
                <li>쇼핑</li>
                <li>여행</li>
                <li>추가</li>
              </ul>
            </Col>
            <Col className="main" md={20}>
              <h2>김삼삼님의 사이트</h2>
              <Row>
                <Col md={16}>
                  <h1>과제/발표</h1>
                </Col>
                <Col className="header" md={8}>
                  <Dropdown overlay={menu} trigger={["click"]}>
                    <EllipsisOutlined style={{ fontSize: "30px" }} />
                  </Dropdown>

                  <EditOutlined style={{ fontSize: "30px" }} />
                </Col>
              </Row>

              <Tabs defaultActiveKey="1" onChange={(key) => console.log(key)}>
                <TabPane tab="사이트 목록" key="1">
                  <SiteList cardList={cardDataDummy} />
                </TabPane>
                <TabPane tab="좋아요 리스트" key="2">
                  <div className="tab-header">
                    <HeartIcon />
                    <span>전체 (5)</span>
                  </div>
                  <SiteList cardList={cardDataDummy} />
                </TabPane>
                <TabPane tab="랭킹" key="3">
                  랭킹
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </Col>
        <Col md={6}></Col>
      </Row>
    </StyledHome>
  );
};

export default Category;
