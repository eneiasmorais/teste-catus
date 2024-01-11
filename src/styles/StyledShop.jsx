import styled from "styled-components";

export const StyledShop = styled.section`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 1rem 6rem;

.titleShop{
    font-size: 28px;
    color: var(--color-2);
    font-weight: 700;
    padding: 2rem;
}

.products{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
}

.item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.6rem;
}

.top{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.description{
    color: var(--color-5);
    font-weight: 400;
    font-size: 16px;
    
    line-height: 19.36px;
}

.prices{
    display: flex;
    flex-direction: column;
    width: 100%;
    color: var(--color-3);
    margin: 1rem 0;
    
}

.wrongPrice{
   font-size: 14px;
    font-weight: 300;
    line-height: 23px;
    text-align: left;
    text-decoration: line-through;
}

.rightPrice{
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    text-align: left;
}

.installments{
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.bolder{
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 700;
}

.addBtn{
    width: 100%;
    height: 50px;
    border: none;
    background-color: var(--color-6);
    color: var(--color-2);
    border-radius: 4px;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    cursor: pointer;
}

@media (min-width: 1023px){
    .products{
        flex-direction: row;
    }
}




`;