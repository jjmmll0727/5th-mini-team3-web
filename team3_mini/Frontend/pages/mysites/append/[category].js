import React, { useEffect, useState } from 'react';
import { Button, Input, Form, Upload, Switch } from "antd";
import styled from "@emotion/styled";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import AppLayout from "../../../components/AppLayout"
import TextArea from 'antd/lib/input/TextArea';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

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
    const { category } = router.query
    const layout = {
        labelCol: { span: 0 },
        wrapperCol: { span: 16 },
      };
      
    const onFinish = (data) => {
        console.log(data);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };
      const { me } = useSelector(state => state.user)
    useEffect(() => {
        if(!me){
        alert("로그인 후 이용해주세요!")
        router.push('/login')
        }
    }, [ me ])
    function beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('사진만 업로드 할 수 있습니다!');
            return false
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('이미지 크기가 2MB 이하여야 합니다!');
            return false
        }
        setIsUpload(true)
        return isJpgOrPng && isLt2M;
    }
  const [ isUpload, setIsUpload ] = useState(false)
  const [ loading, setLoading ] = useState(false)
    return (
        <>
            <AppLayout>
                <StyledMain>
                <h2>김삼삼님의 사이트</h2>
                <h1>{category}</h1>
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
                        <Form.Item className="append_text" label="메모" name="memo">
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
                        <Form.Item label="사진" name="picture">
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                beforeUpload={beforeUpload}
                                style={{ width: "300px" }}
                            >
                                {isUpload ? null :
                                <div>
                                    {loading ? <LoadingOutlined /> : <PlusOutlined />}
                                    <div style={{ marginTop: 8 }}>Upload</div>
                                </div>}
                            </Upload>
                        </Form.Item>

                        <Form.Item label="공개 설정" name="isPrivate">
                            <Switch />
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