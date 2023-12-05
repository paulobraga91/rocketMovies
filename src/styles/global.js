import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    background-color: #232129;
    color: #F4EDE8;
     -webkit-font-smoothing: antialiased;
}

body, input, button, textarea{
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;

}

a{
    text-decoration: none;
}

button, a{
    cursor: pointer;
    transition: filter 0.2s;
}

button:hover, a:hover{
    filter: brightness(0.9);
}

`;