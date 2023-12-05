import styled from "styled-components";
import {Link} from "react-router-dom"

export const Container = styled.header`
grid-area: header;

height: 100px;
min-width: 450px;
display: flex;
padding: 24px 70px;
gap: 64px;
justify-content: space-between;
align-items: center;

background-color:#1C1B1E ;


h1{
    color: #FF859B;
    font-family: Roboto Slab;
    font-size: 34px;
    font-weight: 700;
    line-height: normal;
  
}
`;

export const Profile = styled(Link)`

display: flex;
min-width:250px;
gap: 9px;
align-items: center;



p{
    font-size: 14px;
    font-weight: 700;
    color: #F4EDE8;
    margin: 0;
}

span{
    color: #948F99;
    cursor: pointer;
}

span::hover{
    transition: background-color 0.3s ease-in-out;
}

> img{
margin-left:6px ;
height: 70px;
width: 70px;
border-radius: 50px;
border: solid 2px #3E3B47;
}

>div{
    display: flex;
    flex-direction: column;
   
    text-align: right;
    
}
`;