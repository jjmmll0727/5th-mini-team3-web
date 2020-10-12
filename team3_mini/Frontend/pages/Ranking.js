import React from "react";
import { Row, Col } from "antd";
import shortid from "shortid";
import faker from "faker";

import styled from "@emotion/styled";
import RankFirst from "../components/RankFirst";
import RankCard from "../components/RankCard";

const StyledHome = styled.div`
  font-family: Noto Sans CJK KR;
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

const RankFirstDataDummy = Array(1)
  .fill(0)
  .map(() => ({
    id: shortid.generate(),
    rank: 1,
    title: faker.name.findName(),
    imgsrc: faker.image.image(104, 104),
    href: faker.internet.url(),
  }));

const RankCardDataDummy = Array(10)
  .fill(0)
  .map(() => ({
    id: shortid.generate(),
    rank: 1,
    title: faker.name.findName(),
    imgsrc: faker.image.image(104, 104),
    href: faker.internet.url(),
  }));

const Ranking = () => {
  return (
    <StyledHome>
      {RankFirstDataDummy.map((data) => (
        <RankFirst
          key={data.id}
          imgsrc={data.imgsrc}
          rank={data.rank}
          title={data.title}
          href={data.href}
        />
      ))}

      {RankCardDataDummy.map((data) => (
        <RankCard
          key={data.id}
          imgsrc={data.imgsrc}
          rank={data.rank}
          title={data.title}
          href={data.href}
        />
      ))}
    </StyledHome>
  );
};

export default Ranking;
