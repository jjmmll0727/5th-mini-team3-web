import React, { useState } from "react";
import styled from "@emotion/styled";
import { Card, Modal } from "antd";
import { CloseOutlined, DeleteTwoTone } from "@ant-design/icons";
const { Meta } = Card;
import Nothing from "../components/MyPage/nothing"
import Link from "next/link";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { GET_SITES_REQUEST } from "../actions";

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
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
  const dispatch = useDispatch()
  const { token } = useSelector(state => state.user)
  const router = useRouter()
  const { where } = router.query
  const [show, setShow] = useState(false);
  const handleOk = (id, token, where) => {
    return async () => {
      setShow(false)
      try{
        await Axios.delete("/category/siteInfo/delete",{
          headers: {
            "authorization": token
          },
          data: {
            id: id
          }
        })
        await  dispatch({
          type: GET_SITES_REQUEST,
          token,
          category : where
        })
        console
      }
      catch(err){
        console.log(`카테고리제거 에러 ${err}`)
      }
    };
  }
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
            <a href={`https://${data.url}`} target="_blank" rel="noreferrer noopener">
              <Card className="list" hoverable key={data.id}>
                  <Meta
                    title={
                      <>
                        {data.title}
                        <CloseOutlined
                          key={data.id}
                          onClick={() => setShow(true)}
                        />
                      </>
                    }
                    description={data.description}
                  />
              </Card>
            </a>
            <Modal visible={show} onOk={handleOk(data._id, token, where)} onCancel={handleCancel}>
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
