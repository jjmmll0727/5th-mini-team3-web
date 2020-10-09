import React from 'react';
import styled from "@emotion/styled";

import AppLayout from "../AppLayout"
import Link from 'next/link';
import { useRouter } from 'next/router';

const StyledMuck = styled.div`
    button{
        cursor: pointer;
    }
    h2 {
      font-size: 15px;
    }
    margin-top: 20px;
    h1{
        font-weight: bolder;
        margin-bottom: 30px;
        letter-spacing: -2px;
    }
    .button_list{
        margin-bottom: 50px;
        button{
            letter-spacing: -1px;
            padding: 5px 14px;
            font-weight: bolder;
            border: none;
            margin-right: 10px;
        }
        .btn_active{
            color: #113358;
            border-radius: 20px;
            border: 1px solid #113358;
        }
    }
    .plusPage_main{
        width: 900px;
        margin: 0 auto;
        margin-bottom: 100px;
        text-align: center;
        letter-spacing: -1px;
        h4{
            color: #113358;
            font-weight: bolder;
            margin-top: 20px;
        }
        button{
            margin-top: 50px;
            background-color: #113358;
            color: white;
            padding: 10px 50px;
            border-radius: 10px;
            a{
                color: white;
            }
        }
    }
`

const Nothing = ({category}) => {
    return (
            <StyledMuck>
                <div className="button_list">
                    <button className="btn_active">사이트 목록</button>
                    <button>좋아요 리스트</button>
                    <button>랭킹</button>
                </div>
                <div className="plusPage_main">
                    <img src="/logo_2.PNG" />
                    <h4>필요한 사이트를 저장해보세요!</h4>
                    <h5>간단한 메모 작성, PDF 첨부 등이 가능합니다.</h5>
                    <button><Link href={`/mysites/append/${category}`}><a>추가하기</a></Link></button>
                </div>
            </StyledMuck>
    );
};

export default Nothing;