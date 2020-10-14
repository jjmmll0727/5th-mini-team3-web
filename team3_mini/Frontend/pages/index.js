import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { Carousel, Row, Col } from "antd";
import { useDispatch } from "react-redux";
import { LOG_OUT_REQUEST } from "../actions";

const StyledMain = styled.div`
  background: #bbbbbb;
  height: 801px;
  margin: auto;
  top: 50%;
  margin-top: 200px;
  overflow: hidden;
  button {
    width: 165px;
    height: 59px;
    background-color: #eeeeee;
    border: none;
    border-radius: 10px;
    margin-top: 100px;
    float: left;
    margin-left: 500px;
    span {
      font-size: 18px;
      color: #767676;
    }
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  margin-left: 500px;
  .Carousel {
    display: flex;
    flex-direction: column;
    span:nth-of-type(1) {
      color: #767676;

      font: normal normal normal 36px/75px Noto Sans CJK KR;
    }
    span:nth-of-type(2) {
      color: #767676;
      font: normal normal 900 48px/75px Noto Sans CJK KR;
    }
    span:nth-of-type(3) {
      color: #767676;
      font: normal normal 900 48px/75px Noto Sans CJK KR;
    }
  }
`;

const Main = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({
      type: LOG_OUT_REQUEST
    })
  })
  return (
    <StyledMain>
      <Row>
        <Col md={12}>
          <Carousel autoplay>
            <StyledContent>
              <div className="Carousel">
                <span>계정만 있으면</span>
                <span>언제 어디서나</span>
                <span> 내가 저장한 사이트를 확인!</span>
              </div>
            </StyledContent>
            <StyledContent>
              <div className="Carousel">
                <span>다른 사람들이</span>
                <span>많이 사용하는 분야별 사이트를</span>
                <span> 순위로 한눈에!</span>
              </div>
            </StyledContent>
          </Carousel>
          <button>
            <span>시작하기</span>
          </button>
        </Col>
        <Col md={12}>
          <img
            style={{
              background: "#EEEEEE",
              borderRadius: "50%",
              width: "502px",
              height: "502px",
              margin: "0px auto",
              float: "left",
              marginTop: "150px",
            }}
            src="/img_slide1_main.png"
          />
        </Col>
      </Row>
    </StyledMain>
  );
};
export default Main;
