import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from "next/router"
import styled from "@emotion/styled"
import Link from "next/link"
import { useDispatch, useSelector } from 'react-redux';
import { GET_CATEGORY_REQUEST, PUT_CATEGORY_REQUEST } from '../actions';

const categoryList = [
  {
    name: "과제/발표",
    id: "5f8709302929f6db717bc9a6"
  },
  {
    name: "논문",
    id: "5f8709382929f6db717bc9a7"
  },
  {
    name: "디자인",
    id: "5f87093c2929f6db717bc9a8"
  },
  {
    name: "쇼핑",
    id: "5f8709402929f6db717bc9a9"
  },
  {
    name: "여행",
    id: "5f8709442929f6db717bc9aa"
  },
  {
    name: "일상",
    id: "5f8709492929f6db717bc9ab"
  },
  {
    name: "회사",
    id: "5f87094d2929f6db717bc9ac"
  },
  {
    name: "대외활동",
    id: "5f8709522929f6db717bc9ad"
  },
  {
    name: "맛집",
    id: "5f8709562929f6db717bc9ae"
  },
  {
    name: "기타",
    id: "5f8709592929f6db717bc9af"
  }
]

const Active_li = styled.li`
  cursor: pointer;
  font-weight:bolder;
  font-size: 18px;
  margin-bottom: 30px;
  position: relative;

  a{
    color: black;
  }

  ::before{
    content:"";
    display: block;
    width: 70px;
    height: 20px;
    background-color: rgba(255,200,0,.5);
    position: absolute;
    left: -40%;
    top: 5%;
  }
`
const StyledLi = styled.li`
  a{
    color: black;
  }
`

const CustomOption = ({ name, id, onClick, token }) => {
  return <li onClick={onClick}>{name}</li>
}

const Menu = ({ situation }) => {
  const [ plusMenu , setPlusMenu ] = useState(false)
  const onpMenuClick = useCallback(() => {
    setPlusMenu(prev => !prev )
  })
  const { token } = useSelector(state => state.user)
  const { getCategoryDone, putCategoryError } = useSelector(state => state.user)
  const router = useRouter()
  const { where } = router.query
  const dispatch = useDispatch()

  const onPlusClick = (id, token) => {
    return async () => {
     await dispatch({
        type: PUT_CATEGORY_REQUEST,
        id,
        token
      })
      await dispatch({
        type: GET_CATEGORY_REQUEST,
        token: token
      })
    }
  }
  useEffect(() => {
    if(token){
      dispatch({
        type: GET_CATEGORY_REQUEST,
        token: token
      })
    }
  },[ token, getCategoryDone ])
  const { Categories } = useSelector((state) => state.site)
  return (
      <ul style={{ paddingRight : "40px", minHeight: "800px" }}>
        {Categories.map((data) => {
          if(where == data){
            return <Active_li><Link href={`/mysites/${situation ? situation : "append"}/${data._id}`}><a>{data.name}</a></Link></Active_li>
          }else{
            return <StyledLi><Link href={`/mysites/${situation  ? situation : "append"}/${data._id}`}><a>{data.name}</a></Link></StyledLi>
          }
        }
       )}
       <StyledLi onClick={onpMenuClick}>추가하기</StyledLi>
        {plusMenu ? <div>
          <ul>
            {categoryList.map((data) => (
              <CustomOption onClick={onPlusClick(data.id, token)} name={data.name} id={data.id}/>
            ))}
          </ul>
        </div> : null}
      </ul>
    );
};

export default Menu;