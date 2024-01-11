import styled from "styled-components";

export const StyledFooter = styled.footer`

display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
background-color: var(--color-5);
color: var(--color-4);
padding: 1rem 6rem;

.titleContacts, .titleSecurity, .titlePayments{
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--color-4);
    margin-bottom: 1rem;
}

.contactItem{
    font-size: 14px;
    font-weight: 400;
    line-height: 21.5px;
    cursor: pointer;
}

.contactItemWhats, .contactItemTitle{
    font-size: 14px;
    font-weight: 700;
    line-height: 21.5px;
    cursor: pointer;
}

.contactItemWhats{
    padding: 1rem 0;
    cursor: pointer;
}

.paymentsImages{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
}

@media (min-width: 1023px){
    flex-direction: row;
}
`;