import React from "react";
import "./style.css";
import arrowLeft from "../../assets/icons/small-left.png";
import arrowRight from "../../assets/icons/small-right.png";
import search from "../../assets/icons/search.png";

const Header = () => {
  return (
    <nav className="header__navigation">
      <div className="navigation">
        <button className="arrow-left">
          <img src={arrowLeft} alt="Seta esquerda" />
        </button>
        <button className="arrow-right">
          <img src={arrowRight} alt="Seta direita" />
        </button>
      </div>
      <div className="header__search">
        <img src={search} alt="Buscar" />
        <input
          id="search-input"
          maxLength="800"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          placeholder="O que você quer ouvir?"
        />
      </div>
      <div className="header__login">
        <button className="subscribe">Inscreva-se</button>
        <button className="login">Entrar</button>
      </div>
    </nav>
  );
};

export default Header;
