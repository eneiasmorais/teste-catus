import { StyledHeader } from "../styles/StyledHeader"

export const Header = () => {
    return(
        <StyledHeader>
        <div className="titlePage">
            <img src="./src/assets/logo.png"></img>
            <h1 className="pageName">Catus</h1>
        </div>
        <nav className="navBar">
            <button className="navBtn">Loja</button>
            <button className="navBtn">Login</button>
            <button className="navBtn">Sobre</button>
            <button className="navBtn">Contato</button>
        </nav>
        <div className="search">
            <input className="inputSearch" type="text" placeholder="Digite aqui sua busca" />
            <img className="searchBtn" src="./src/assets/Union.png"></img>
            <img className="cartBtn" src="./src/assets/cart.png"></img>
        </div>
        </StyledHeader>
    )
}