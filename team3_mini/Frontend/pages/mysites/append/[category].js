import React, { useEffect, useState } from 'react';
import { Button, Input, Form, Upload, Switch } from "antd";
import styled from "@emotion/styled";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import AppLayout from "../../../components/AppLayout"
import TextArea from 'antd/lib/input/TextArea';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_SITE_REQUEST } from '../../../actions';

const StyledMain = styled.div`
    .submit_btn{
        width: 110px;
        height: 40px;
        cursor: pointer;
        border-radius: 8px;
        border: 0.5px solid black;
        background-color: #113358;
        letter-spacing: -1.5px;
        font-weight: bolder;
        color: white;
        margin-top: 100px;
        margin-bottom: 100px;
    }
    .cancel_btn{
        margin-right: 20px;
        background-color: white;
        color: black
    }
    h2 {
      font-size: 15px;
    }
    h1{
        font-weight: bolder;
        margin-bottom: 70px;
        letter-spacing: -2px;
    }
    padding-left: 50px;
    .append_form{
        .append_text{
            margin-bottom: 100px;
            margin-top: 20px;
        }
        input{
            border: none;
            border-bottom: 1px solid #767676;
            padding: 0px;
            width: 900px;
        }
        textarea{
            padding: 15px;
            width: 900px;
            max-width: none;

        }
        .append_title{
            display: flex;
            flex-wrap: nowrap;
            margin-bottom: 20px;
            img{
                width: 34px;
                height: 28px;
                margin-right: 20px;
                margin-top: 3px;
            }
            input{
                width: 600px;
                border: none;
                font-size: 20px;
                ::placeholder{
                    letter-spacing: -2px;
                    font-weight: bolder;
                    font-size: 20px;
                }
            }
        }
    }
  
`
const Append = () => {
    const router = useRouter()
    const [name, setName] = useState()
    const [open, setOpen] = useState(false)
    const { category } = router.query
    const layout = {
        labelCol: { span: 0 },
        wrapperCol: { span: 16 },
      };
    const dispatch = useDispatch()
    const { token } = useSelector(state => state.user)
    const { Categories } = useSelector(state => state.site)
    const onFinish = async (data) => {
        const sendMe = {
            ...data,
            category_id : category,
            open
        }
        await dispatch({
            type: ADD_SITE_REQUEST,
            data : sendMe,
            token
        })
        await router.push(`/mysites/main/${category}`)
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };
      const { me } = useSelector(state => state.user)
    useEffect(() => {
        if(!me){
            alert("로그인 후 이용해주세요!aaa")
            router.push('/login')
        }
    }, [ me ])
    useEffect(() => {
        console.log(Categories)
        setName(Categories.find(x => x._id === category).name)
      }, [ Categories, category ])

    return (
        <>
            <AppLayout>
                <StyledMain>
                <h2>김삼삼님의 사이트</h2>
                <h1>{name}</h1>
                <div className="append_form">
                    <Form onFinish={onFinish} onFinishFailed={onFinishFailed} {...layout} name="basic" initialValues={{ remember: true }}>
                        <div className="append_title" style={{display: "flex", flexWrap: "nowrap"}}>
                            <img src="/title.PNG" />
                            <Form.Item name="title" rules={[{ required: true, message: "제목을 입력해주세요!" }]}>
                                <Input maxLength="30" placeholder="제목을 입력하세요 (30자 이내)"/>
                            </Form.Item>
                        </div>
                        <Form.Item label="URL" name="url" rules={[{ required: true, message: "URL을 입력해주세요!" }]}>
                            <Input maxLength="50" placeholder="URL을 입력하세요"/>
                        </Form.Item>
                        <Form.Item className="append_text" label="메모" name="description">
                            <TextArea
                                rows="10"
                                placeholder="메모를 입력하세요"
                                style={{
                                    border: "1px solid #767676",
                                    resize: "none",
                                    marginLeft: "6px"
                                }}
                            />
                        </Form.Item>
                        <Form.Item label="공개 설정">
                            <Switch onClick={() => {
                                setOpen(prev => !prev)
                            }} />
                        </Form.Item>
                        <Form.Item
                        style={{ float: "right" }}
                            wrapperCol={{
                            md: { span: 24 }
                            }}
                        >
                            <button className="submit_btn cancel_btn" htmlType="submit">
                            취소하기
                            </button>
                            <button className="submit_btn" htmlType="submit">
                            등록하기
                            </button>
                        </Form.Item>
                    </Form>
                </div>
            </StyledMain>
        </AppLayout>
        </>
    );
};

export default Append;