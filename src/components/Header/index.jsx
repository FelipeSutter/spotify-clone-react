import React from "react";
import "./style.css";
import arrowLeft from "../../assets/icons/small-left.png";
import arrowRight from "../../assets/icons/small-right.png";
import search from "../../assets/icons/search.png";

const Header = ({ handleInputChange }) => {
  return (
    <nav class="header_navigation">
      <div class="navigation">
        <button class="arrow-left">
          <img src={arrowLeft} alt="Seta esquerda" />
        </button>
        <button class="arrow-right">
          <img src={arrowRight} alt="Seta direita" />
        </button>
      </div>

      <div class="header_search">
        <img src={search} alt="Pesquisar" />

        <input
          id="search-input"
          type="text"
          maxlength="800"
          placeholder="O que você quer ouvir?"
          onChange={handleInputChange}
        />
      </div>

      <div class="header_login">
        <button class="subscribe">Inscrever-se</button>
        <button class="login">Entrar</button>
      </div>
    </nav>
  );
};

export default Header;
