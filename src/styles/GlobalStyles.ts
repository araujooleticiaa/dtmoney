import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    :root{
        --blue: #5429CC;
        --blue-light: #6933FF;

        --green: #33CC95;
        --red:#E62E4D;

        --text-title:#363F5F;
        --text-text:#969CB3;

        --shape: #FFFF;
        --background: #f0f2f5;
    }
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    html{
        @media(max-width: 1000px){
        font-size: 93.75%;

        }
        @media(max-width: 720px){
            font-size: 87.5%;

        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button, input, textarea, body{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1,h2,h3,h4,h5, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6%;
        cursor: not-allowed;
    }
`