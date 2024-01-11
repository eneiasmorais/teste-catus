import styled from "styled-components";

export const StyledPhotos = styled.section`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 2rem;
padding: 1rem 6rem;

.column1, .column3{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    gap: 2rem
}

@media (min-width: 1023px){
    flex-direction: row;
}

`;