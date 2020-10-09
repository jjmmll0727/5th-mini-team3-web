import React from 'react';
import { Row, Col } from "antd"
import Menu from './Menu';
import styled from "@emotion/styled"

const StyledAppLayout = styled.div`
    font-family: Noto Sans CJK KR;
    margin-top: 200px;
    color: #767676;
    letter-spacing: -1px;
    label{
        margin-right: 13px;
    }
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        border-right: 1px solid #bbbbbb;
        li {
        cursor: pointer;
        font-size: 18px;
        margin-bottom: 30px;
        }
    }
`

const AppLayout = ({ children }) => {
    return (
        <StyledAppLayout>
            <Row>
                <Col md={4}></Col>
                        <Menu />
                        {children}
                <Col md={4}></Col>
            </Row>
        </StyledAppLayout>
    );
};

export default AppLayout;