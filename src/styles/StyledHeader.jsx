import styled from "styled-components";

export const StyledHeader = styled.header`

background-color: var(--color-1);
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 1rem 6rem;

.titlePage{
    display: flex;
    align-items: center;
    justify-content: center;
}

.pageName{
    font-size: 2.5rem;
    color: var(--color-3);
}

.navBar{
    display: flex;
    gap: 30px
}

.navBtn{
    border: none;
    font-size: 18px;
    color: var(--color-2);
    font-weight: 400;
    cursor: pointer;
}

.search{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.inputSearch{
    border: none;
    border-bottom: 1px solid ;
    height: 2.5rem;
    width: 15rem;
}

.inputSearch::placeholder{
    font-family: 'Poppins', sans-serif;
}

.searchBtn, .cartBtn{
    cursor: pointer;
}

@media (min-width: 1023px) {
    flex-direction: row;
}

`;