import styled from "styled-components";


export const Container = styled.button`

background: none;
border: none;
color: #FF859B;
text-align: center;
font-family: Roboto Slab;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
display: flex;
align-items: center;

cursor: pointer;

&:disabled{
    opacity: 0.5;
}

&:hover{
    opacity: .7;
}



`;