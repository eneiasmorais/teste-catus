import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{
    --color-1: rgba(238, 238, 238, 1);
    --color-2: rgba(0, 0, 0, 1);
    --color-3: rgba(72, 72, 72, 1);
    --color-4: rgba(255, 255, 255, 1);
    --color-5: rgba(64, 64, 64, 1);
    --color-6: rgba(164, 190, 191, 1);



;
    --color-secondary: #972b12;
    --color-tertiary-0: #d6a60d;
    --color-tertiary-1: #dfb01c;
    --option-1: #D4AF37;
    --option-2: #CFB53B;
    --option-3: #C5B358;
    --orange-0: #ED9121; //acho que este é o correto! acho quew não deu certo para as

    
    --color-grey-0: #dee2e6;
    --color-grey-1: #868E96;
    --color-grey-2: #343B41;
    --color-grey-3: #212529;
    --color-grey-4: #121214;

    --color-success: #168821;
    --color-negative: #E83F5B;
    --color-whatsapp: #32cd32;
        
    
    --radius-default: 10px;
    --shadow: 0 4px 4px 0 #00000040;

    --font-size-0: 4.5rem;
    --font-size-1: 3.5rem;
    --font-size-2: 3rem;
    --font-size-3: 2.5rem;
    --font-size-4: 2rem;
    --font-size-5: 1.5rem;
    --font-size-6: 1.25rem;
    --font-size-7: 1rem;
    --font-size-8: 0.75rem;
    --font-size-9: 0.5rem;
    --font-size-10: 0.25rem;

    
}

body{
    font-family: 'Inter', sans-serif;
    overflow-x: hidden ;
    background-color: var(--color-4)
}

`;
