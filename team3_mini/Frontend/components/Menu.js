import React, { useEffect } from 'react';
import { useRouter } from "next/router"
import styled from "@emotion/styled"
import Link from "next/link"
import { useDispatch, useSelector } from 'react-redux';
import { GET_CATEGORY_REQUEST } from '../actions';



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
      </ul>
    );
};

export default Menu;