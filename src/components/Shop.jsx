import { StyledShop } from "../styles/StyledShop"

export const Shop = () => {
    return (
        <StyledShop>
        <h1 className="titleShop">Oportunidades para economizar</h1>
        <ul className="products">
            <li className="item">
                <div className="top">
                    <img src="/src/assets/banco.png" alt="Banco" />
                    <h3 className="description">Aliquam congue nisl ele ac ligula convallis, luctus blandit augue.</h3>
                </div>
                <div className="prices">
                    <h4 className="wrongPrice">de R$ 582,90</h4>
                    <h2 className="rightPrice">R$ 238,41</h2>
                    <h4 className="installments"><p className="bolder">5x</p> de <p className="bolder">R$ 47,68</p> sem juros</h4>
                </div>
                <button className="addBtn">Adicionar ao carrinho</button>
            </li>
            <li className="item">
                <div className="top">
                    <img src="/src/assets/relogio.png" alt="Relógio" />
                    <h3 className="description">Aliquam congue nisl ele ac ligula convallis, luctus blandit augue.</h3>
                </div>
                <div className="prices">
                    <h4 className="wrongPrice">de R$ 582,90</h4>
                    <h2 className="rightPrice">R$ 238,41</h2>
                    <h4 className="installments"><p className="bolder">5x</p> de <p className="bolder">R$ 47,68</p> sem juros</h4>
                </div>
                <button className="addBtn">Adicionar ao carrinho</button>
            </li>
            <li className="item">
                <div className="top">
                    <img src="/src/assets/pa.png" alt="Pá com escova" />
                    <h3 className="description">Aliquam congue nisl ele ac ligula convallis, luctus blandit augue.</h3>
                </div>
                <div className="prices">
                    <h4 className="wrongPrice">de R$ 582,90</h4>
                    <h2 className="rightPrice">R$ 238,41</h2>
                    <h4 className="installments"><p className="bolder">5x</p> de <p className="bolder">R$ 47,68</p> sem juros</h4>
                </div>
                <button className="addBtn">Adicionar ao carrinho</button>
            </li>
            <li className="item">
                <div className="top">
                    <img src="/src/assets/poltrona.png" alt="Poltrona" />
                    <h3 className="description">Aliquam congue nisl ele ac ligula convallis, luctus blandit augue.</h3>
                </div>
                <div className="prices">
                    <h4 className="wrongPrice">de R$ 582,90</h4>
                    <h2 className="rightPrice">R$ 238,41</h2>
                    <h4 className="installments"><p className="bolder">5x</p> de <p className="bolder">R$ 47,68</p> sem juros</h4>
                </div>
                <button className="addBtn">Adicionar ao carrinho</button>
            </li>
        </ul>
        </StyledShop>
    )
}