import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from "next/router"
import styled from "@emotion/styled"
import Link from "next/link"
import { useDispatch, useSelector } from 'react-redux';
import { GET_CATEGORY_REQUEST, PUT_CATEGORY_REQUEST } from '../actions';
import axios from 'axios';



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
const Menu = ({ situation }) => {
  const [ plusMenu , setPlusMenu ] = useState(false)
  const onpMenuClick = useCallback(() => {
    setPlusMenu(prev => !prev )
  })
  const { token } = useSelector(state => state.user)
  const router = useRouter()
  const { where } = router.query
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({
      type: GET_CATEGORY_REQUEST,
    })
  },[])
  const { Categories } = useSelector((state) => state.site)
  return (
      <ul style={{ paddingRight : "40px", minHeight: "800px" }}>
        {Categories.map((data) => {
          if(where == data){
            return <Active_li><Link href={`/mysites/${situation ? situation : "append"}/${data}`}><a>{data}</a></Link></Active_li>
          }else{
            return <StyledLi><Link href={`/mysites/${situation  ? situation : "append"}/${data}`}><a>{data}</a></Link></StyledLi>
          }
        }
       )}
       <StyledLi onClick={onpMenuClick}>추가하기</StyledLi>
        {plusMenu ? <div>
          <ul>
            <li onClick={() => {
              const id = "5f8709302929f6db717bc9a6" 
              axios.put('/category/include',  id , { headers: { 'authorization' : token }} )
              //dispatch({type: PUT_CATEGORY_REQUEST, id: "5f7c6d655a2c417d28085d5e"})}
            }}>리스토어1</li>
            <li onClick={() => {dispatch({type: PUT_CATEGORY_REQUEST, id: "5f7c6d695a2c417d28085d5f"})}}>리스토어2</li>
          </ul>
        </div> : null}
      </ul>
    );
};

export default Menu;