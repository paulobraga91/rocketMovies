import styled from "styled-components";
import{Link as RouteLink} from "react-router-dom";

export const Container = styled.div`
    
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100; 
    }

padding-top: 80px;
    
   
    > div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 1000px;
        margin: 40px auto;



        button{
            width: 207px;
        }

        h1{
        font-size: 30px;
    }
    }

`;

export const Content = styled.div`
        max-height: 700px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
`;


export const Details = styled(RouteLink)`

text-decoration: none;
color: #F4EDE8;

`;