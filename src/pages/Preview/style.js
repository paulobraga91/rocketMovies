import styled from "styled-components";


export const Container = styled.div`
 
*::-webkit-scrollbar {
  width: 8px;
}

*::-webkit-scrollbar-track {
  background: none;
}

*::-webkit-scrollbar-thumb {
  background-color: #FF859B;
  border-radius: 10px;
  
}
scrollbar-width: thin;

main{
    width: 1000px;
    height: 70vh;
   
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  
}





`;

export const Content = styled.div`
margin-left: 20vw;
margin-top:20px ;

position: absolute;

`;

export const Title = styled.div`
    display:flex;
    align-items: center;
    gap: 20px;
    font-size: 30px;

    svg{
        margin-top:20px;
        color: #FF859B;
    }

`;

export const UserPost = styled.div`

display: flex;
align-items: center;
gap: 10px;

img{
    width: 30px;
    height: 30px;
    border-radius: 35px;
    border: 1px solid #3E3B47;
}

svg{
    color: #FF859B;
}

`;

export const Tags =styled.div`

display: flex;
gap:10px;
margin: 40px 0;

`;

export const TextMovieComplet = styled.a`
`;