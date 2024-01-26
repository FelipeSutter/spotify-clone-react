import React from "react";
import "./style.css";
import logoSpotify from "../../assets/icons/logo-spotify.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faGlobe,
  faBook,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar_navigation">
        <div className="logo">
          <a href="#">
            <img src={logoSpotify} alt="logo do spotify" />
          </a>
        </div>
        <ul>
          <li>
            <a href="#">
              <span className="fa">
                <FontAwesomeIcon icon={faHome} />
              </span>
              <span>Início</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fa">
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <span>Buscar</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="library">
        <div className="library_content">
          <div className="library_button">
            <span className="fa">
              <FontAwesomeIcon icon={faBook} />
            </span>
            <span>Sua biblioteca</span>
          </div>
          <div className="plus_background">
            <span>
              <FontAwesomeIcon icon={faPlus} />
            </span>
          </div>
        </div>

        <section className="create-playlist">
          <div className="text">
            <span className="first-text">
              Crie a sua primeira playlist <br />
            </span>
            <span className="second-text">É fácil, vamos te ajudar.</span>
          </div>
          <button className="button-playlist">Criar playlist</button>
        </section>

        <span className="cookies">Cookies</span>

        <button className="language-button">
          <span className="fa">
            <FontAwesomeIcon icon={faGlobe} />
          </span>
          Português do Brasil
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
