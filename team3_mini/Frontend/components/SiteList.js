import React, { useState } from "react";
import styled from "@emotion/styled";
import { Image, Card, Modal } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import Nothing from "./MyPage/nothing";

const { Meta } = Card;

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 200px;
  img {
    background: #eeeeee;
    border-radius: 50%;
    width: 124px;
    height: 124px;
    margin: 0px auto;
  }
  span:nth-of-type(1) {
    text-align: center;
    color: #767676;
    font-size: 20px;
  }
  span:nth-of-type(2) {
    text-align: center;
    color: #767676;
    font-size: 16px;
  }
  button {
    width: 203px;
    height: 63px;
    background-color: #767676;
    border: none;
    border-radius: 10px;
    color: #ffffff;
    margin: 0 auto;
    margin-top: 30px;
    font-weight: bolder;
  }
  .list {
    width: 100%;
    margin-top: 16px;
    img {
      border-radius: 0;
      width: 330px;
      height: 140px;
    }
    span {
      float: right;
      color: #bbbbbb;
    }
  }
  .ant-card-meta-title {
    font: normal normal bold 19px/25px Noto Sans CJK KR;
    padding-left: 20px;
    color: #767676;
  }
  .ant-card-meta-description {
    font: normal normal normal 16px/24px Noto Sans CJK KR;
    padding-left: 20px;
    color: #bbbbbb;
  }
`;

const SiteList = ({ visible, cardList }) => {
  const [show, setShow] = useState(false);
  const handleOk = () => setShow(false);
  const handleCancel = () => setShow(false);

  return (
    visible && (
      <StyledList>
        {cardList.length === 0 ? (
          <>
            <Nothing />
          </>
        ) : (
          cardList.map((data) => (
            <>
              <Card className="list" hoverable key={data.id}>
                <Meta
                  avatar={<Image src={data.imgsrc} />}
                  title={
                    <>
                      {data.title}
                      <CloseOutlined
                        key={data.id}
                        onClick={() => setShow(true)}
                      />
                    </>
                  }
                  description="2020-00-00/PM 00:00"
                />
              </Card>
              <Modal visible={show} onOk={handleOk} onCancel={handleCancel}>
                {/* <DeleteTwoTone /> */}
                <p>이 사이트를 정말 삭제하시겠습니까?</p>
              </Modal>
            </>
          ))
        )}
      </StyledList>
    )
  );
};

export default SiteList;