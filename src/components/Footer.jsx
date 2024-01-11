import { StyledFooter } from "../styles/StyledFooter"

export const Footer = () => {
    return(
        <StyledFooter>
        <div className="contacts">
            <h3 className="titleContacts">Central de Atendimento</h3>
            <h4 className="contactItem">Ajuda e suporte</h4>
            <h4 className="contactItem">Fale conosco</h4>
            <h4 className="contactItem">Faq</h4>
            <h4 className="contactItemWhats">WhatsApp: (11) 99999-9999</h4>
            <h4 className="contactItemTitle">Nossos horários</h4>
            <h4 className="contactItem">Segunda a sexta das 9h às 18h</h4>
        </div>
        <div className="security">
            <h3 className="titleSecurity">Selos de segurança</h3>
            <div className="securityImages">
                <img src="/src/assets/googleIcon.png"></img>
                <img src="/src/assets/protectedStore.png"></img>
            </div>
        </div>
        <div className="payments">
            <h3 className="titlePayments">Formas de pagamento</h3>
            <div className="paymentsImages">
                <img src="/src/assets/payments/visa.png"></img>
                <img src="/src/assets/payments/mastercard.png"></img>
                <img src="/src/assets/payments/amex.png"></img>
                <img src="/src/assets/payments/diners.png"></img>
                <img src="/src/assets/payments/discover.png"></img>
                <img src="/src/assets/payments/boleto.png"></img>                
                <img src="/src/assets/payments/pix.png"></img>
            </div>
        </div>
        </StyledFooter>
    )
}