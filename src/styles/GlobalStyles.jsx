import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{
    --color-1: rgba(238, 238, 238, 1);
    --color-2: rgba(0, 0, 0, 1);
    --color-3: rgba(72, 72, 72, 1);
    --color-4: rgba(255, 255, 255, 1);
    --color-5: rgba(64, 64, 64, 1);
    --color-6: rgba(164, 190, 191, 1);
}

body{
    font-family: 'Inter', sans-serif;
    overflow-x: hidden ;
    background-color: var(--color-4)
}

`;
