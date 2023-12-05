import styled from "styled-components";

export const Container = styled.div`
    min-width: 900px;
   
    title{
        display: flex;
        flex-direction:column ;
        padding: 0 150px;
        margin: 30px 0;
    }
    
    main{
    width: 100%;
    height: 100vh;
    padding: 0 150px;
    }

    footer{
        display: flex;
        gap: 20px;
    }

    #buttonDelete{
        background: #0D0C0F;
        color: #FF859B;
        width: 100%;
        height: 56px;
        padding: 0 16px;

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
    }
   



`;

export const Form = styled.form`


display: flex;
flex-direction: column;
gap: 20px;

div{
    display: flex;
    gap: 20px;
}


    
`;

export const Tags = styled.div`
background-color: black;
border-radius: 10px;
padding: 16px; 


`;
