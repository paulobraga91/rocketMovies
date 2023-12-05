import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    width: fit-content;
    background-color: ${({isNew})=> isNew ? "transparent" : "#262529" };
    color: #948F99;
    border:  ${({isNew})=> isNew ? `2px dashed #948F99` : "none" };
   
    border-radius:10px;
    padding-right:16px;

    >button {
        border:none;
        background:none;
        color: #FF859B;
    }

    >input{
        height:56px;
        width:100%;
        padding:12px;
        color:white;
        background:transparent;
        border:none;
        color:#948F99;
        
    }
`;


