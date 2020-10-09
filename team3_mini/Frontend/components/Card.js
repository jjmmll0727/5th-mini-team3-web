import React from "react";
import styled from "@emotion/styled";
import PropTypes from 'prop-types'

const StyledCard = styled.div`
  a{
    color: #767676
  }
  margin: 20px;
  h3 {
    position: absolute;
    z-index: 50;
    background: #767676;
    color: white;
    padding: 3px 15px;
  }
  img {
    width: 300px;
    height: 130px;
  }
  ul {
    padding: 0;
    margin: 0;
    margin-top: 10px;
    border-right: none;
    list-style-type: square;
    margin-left: 20px;
    min-height: 100px;
    li {
      max-width: 280px;
      font-size: 15px;
      margin-bottom: 0px;
    }
  }
`;

const Card = ({ href ,title, imgsrc, content }) => { 
  return (
    <StyledCard>
      <a href={href} target="_blank" rel="noreferrer noopener">
        <h3>{title}</h3>
        <img src={imgsrc} />
        <ul>
          {content[0] ? content.map((data,index) => (<li key={index}>{data}</li>)) : <span>내용이 없습니다.</span>}

        </ul>
      </a>

    </StyledCard>
  );
};

Card.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imgsrc: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired
}

export default Card;
