import React, { useEffect } from "react";
import { Row, Col } from "antd";

import styled from "@emotion/styled";
import Card from "../../../components/Card"; //만든 카드 컴포넌트를 메인페이지에서 불러오고
import Menu from "../../../components/Menu"
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { GET_SITES_REQUEST } from "../../../actions";
import Nothing from "../../../components/MyPage/nothing";

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
      cursor: pointer;
    }
  }
`;





const Home = () => {
  const router = useRouter()
  const { where } = router.query
  const dispatch = useDispatch()
  const { me } = useSelector(state => state.user)
  useEffect(() => {
    dispatch({
      type: GET_SITES_REQUEST,
      data: where
    })
  }, [where])
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
              <Menu situation={"main"}/>
            </Col>
            <Col className="main" md={20}>
              <h2>김삼삼님의 사이트</h2>
              <h1>{where}</h1>
              { currentWebsites[0] ? <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  minWidth: "700px"
                }}>
                  {currentWebsites.map((data) => (
                    <Card key={data.id} href={data.href} content={data.content} title={data.title} imgsrc={data.imgsrc} />
                  ))}
              </div>
              : <Nothing category={where} />}
            </Col>
          </Row>
        </Col>
        <Col md={6}></Col>
      </Row>
    </StyledHome>
  );
};

export default Home;
