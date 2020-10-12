import React from "react";
import { Row, Col } from "antd";
import shortid from "shortid";
import faker from "faker";

import styled from "@emotion/styled";
import Card from "../components/Card";

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
`;

const cardDataDummy = Array(10)
  .fill(0)
  .map(() => ({
    id: shortid.generate(),
    title: faker.name.findName(),
    imgsrc: faker.image.image(510, 136),
    content: Array(faker.random.number(3)).fill(0).map(() => (
      faker.lorem.sentence()
    )),
    href: faker.internet.url()
  }));

const Home = () => {
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
              <h1>ALL</h1>
              <div style={{
                display: "flex",
                flexWrap: "wrap",
                minWidth: "700px"
              }}>
                {cardDataDummy.map((data) => (
                  <Card key={data.id} href={data.href} content={data.content} title={data.title} imgsrc={data.imgsrc} />
                ))}
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={6}></Col>
      </Row>
    </StyledHome>
  );
};

export default Home;
