import styled from "styled-components";

export const Container = styled.button`


background: #FF859B;
width: 100%;
height: 56px;
padding: 0 16px;
color: #312E38;
border: none;
margin-top: 8px;
border-radius: 10px;

text-align: center;
font-family: Roboto Slab;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
cursor: pointer;

&:disabled{
    opacity: 0.5;
}

&:hover{
    opacity: .7;
}




`;