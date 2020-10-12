import React from "react";
import styled from "@emotion/styled";
import RankGraphic from "../assets/img_rankGraphic_mySite_ranking_s.svg";

const Container = styled.div`
  display: flex;
  position: relative;
`;

const GraphicWrapper = styled.div`
  position: relative;
  box-shadow: 20px 40px 70px #a9a9a933;
  margin-bottom: 50px;
`;

const AllWrapper = styled.div`
  position: absolute;
  top: 20px;
`;

const Logo = styled.div`
  display: inline-flex;

  width: 104px;
  height: 104px;
  margin: 30px 20px 20px 85px;
`;

const FlexWrapper = styled.div`
  position: flex;
`;

const TextWrapper = styled.div`
  display: absolute;

  width: 600px;
  margin: 20px 10px;
  padding: 0px;
`;

const Rank = styled.div`
  display: inline-flex;

  padding: 20px;
  color: #113358;
  margin: 20px;
  font: normal 900 24px noto-sans;
`;

const Content = styled.div`
  display: block;

  color: #113358;
  margin: 0px 20px;

  #title {
    font: normal 900 48px Noto Sans CJK KR, noto-sans;
  }
  #href {
    font-size: 18px;
    text-decoration: none;
    font-family: Noto Sans CJK KR, noto-sans;
    color: #767676;
  }
`;
const Shape = styled.div`
  position: absolute;
  right: -523px;
  bottom: -35px;

  width: 123px;
  height: 38px;

  text-align: center;
  line-height: 38px;
  color: #ffffff;
  background: #113358 0% 0% no-repeat padding-box;
  border-radius: 19px;

  cursor: pointer;
`;

const RankCard = ({ rank, title, imgsrc, href }) => {
  return (
    <Container>
      <GraphicWrapper>
        <RankGraphic />
      </GraphicWrapper>
      <AllWrapper>
        <Logo>
          <img src={imgsrc} />
          <FlexWrapper>
            <TextWrapper>
              <Rank>
                <span>{rank}ST</span>
                <Content>
                  <div id="title">{title}</div>
                  <a href={href} target="_blank" id="href">
                    {href}
                  </a>
                </Content>
              </Rank>
              <Shape>
                <a href={href} target="_blank">
                  방문하기
                </a>
              </Shape>
            </TextWrapper>
          </FlexWrapper>
        </Logo>
      </AllWrapper>
    </Container>
  );
};

export default RankCard;
