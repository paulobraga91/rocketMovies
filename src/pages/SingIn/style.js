import styled from "styled-components";
import backgroundImg from "../../assets/fundoSingIn.jpeg"

export const Container = styled.div`
display: flex;
height: 100vh;
button{
    margin: 0 auto;
}
`;


export const Content = styled.div`
height: 100vh;
width: 600px;
display: flex;
justify-content: center;
gap: 50px;
flex-direction: column;
padding: 0 120px;


p{
    font-size: 24px;
}
`;

export const Form = styled.form``;



export const Title = styled.form`
display:flex;
flex-direction: column;
gap: 10px;

h1{
    color: #FF859B;
    font-size: 48px;
}

p{
    color: #CAC4CF;
    font-size: 14px;
}

`;


export const Background = styled.div` 
flex: 1;
background: url(${backgroundImg}) no-repeat center center;
background-size: cover;
opacity: .5;`