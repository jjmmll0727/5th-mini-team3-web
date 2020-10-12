import React from "react";
import styled from "@emotion/styled";
import Pointer from "../icons/icon_goSite_mySite_ranking.svg";

const Container = styled.div`
    display: flex;
    position: relative;
    margin: 30px 0px;
`;

const Logo = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 220px;
    height: 150px;
    box-shadow: 7px 7px 10px #7373731A;
    margin-right: 20px;
`;
const TextWrapper = styled.div`
    display: inline-flex;
    width: 600px;
    margin: 0px;
    padding: 0px;
    border-bottom: 1px solid #113358;
`;

const Rank = styled.div`
    display: inline-flex;
    color: #113358;
    margin: 10px; 
    font: normal 900 24px noto-sans;
`;

const Content = styled.div`
    display: block;
    color: #113358;
    margin: 18px 10px;

    #title{
        font: normal 900 18px Noto Sans CJK KR, noto-sans;
    }
    #href{
        text-decoration: none;
        font-family: Noto Sans CJK KR, noto-sans;
        color: #767676;
    }
`;
const Shape = styled.div`
    position: absolute;
    right: -123px;
    bottom: -19px;

    width: 123px;
    height: 43px;
    background: #113358 0% 0% no-repeat padding-box;
    border-radius: 22px;

    cursor: pointer;
`;

const PointWrapper = styled.div`
    padding-top: 8px;
`;


const RankCard = ({rank, title, imgsrc, href}) => {
    return(
        <Container>
            <Logo><img src={imgsrc} /></Logo>
            <TextWrapper>
                <Rank>
                    <span>{rank}</span>
                </Rank>
                <Content>                    
                    <div id='title'>{title}</div>
                    <a href={href} target='_blank' id='href'>{href}</a>
                </Content>
                <Shape><PointWrapper><Pointer /></PointWrapper></Shape>  
            </TextWrapper>
        </Container>
    );
}

export default RankCard;