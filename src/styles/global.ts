import { createGlobalStyle } from "styled-components";

/* 

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
 
*/

export default createGlobalStyle`
    :root {
        --color-primary: #FF577F;
        --color-primary-focus: #e54f73;
        --color-primary-negative: #59323F;
        --color-gray-4: #121214;
        --color-gray-3: #212529;
        --color-gray-2: #343B41;
        --color-gray-1: #868E96;
        --color-gray-0: #F8F9FA;
        --color-sucess: #3FE864;
        --color-negative: #E83F5B;
    }

    * {
        margin: 0;
        padding: 0;
        list-style-type: none;
        text-decoration: none;
        font-family: 'Inter', sans-serif;
        color: black;
        box-sizing: border-box;
    }

    body, html {
        width: 100%;
        height: 100vh;
        position: relative;

        /* Largura da barra de rolagem */
        ::-webkit-scrollbar {
            width: 8px;
        }

        /* Fundo da barra de rolagem */
        ::-webkit-scrollbar-track-piece {
            border: none;
            background: var(--color-gray-4);
        }

        /* Cor do indicador de rolagem */
        ::-webkit-scrollbar-thumb:vertical,
        ::-webkit-scrollbar-thumb:horizontal {
            background-color: var(--color-gray-2);
            border-radius: 5px;
        }

        /* Cor do indicador de rolagem - ao passar o mouse */
        ::-webkit-scrollbar-thumb:vertical:hover,
        ::-webkit-scrollbar-thumb:horizontal:hover {
            background-color: var(--color-gray-1);
        }

    }
    
    button {
    cursor: pointer;}
`;
