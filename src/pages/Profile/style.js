import styled from "styled-components";

export const Container = styled.div`
body{
    background-color: #312E38;
    width: 100%;
    height: 100vh;
   
}
padding-bottom: 100px;


header{
    height: 144px;
    width: 100%;
    background-color: #1C1B1E;
    display: flex;
    padding: 0 124px;
    align-items: center;
   
   
}
`;

export const Form = styled.form`
    max-width: 340px;
    margin: 30px auto 0;
    text-align: center;
    
`;

export const Avatar = styled.div`
    position: relative;
   margin:  -100px auto 0px;

  >img {
    margin-bottom: 64px ;
    width:186px;
    height: 186px;
    border-radius: 50%;
 }

 label{
    position: absolute;
    bottom: 70px;
    right:100px;
    padding: 12px;
    background-color: #FF859B;
    border-radius: 50%;
    display: flex;
 }

 input{
    display: none;
 }

`;