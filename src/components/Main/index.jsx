import React from "react";
import "./style.css";

const Main = () => {
  const playlists = [
    {
      id: 1,
      title: "Boas festas",
      imgSrc: "../../assets/playlist/1.jpeg",
    },
    {
      id: 2,
      title: "Feitos para você",
      imgSrc: "../../assets/playlist/2.png",
    },
    {
      id: 3,
      title: "Lançamentos",
      imgSrc: "../../assets/playlist/3.png",
    },
    {
      id: 4,
      title: "Creators",
      imgSrc: "../../assets/playlist/4.png",
    },
    {
      id: 5,
      title: "Para treinar",
      imgSrc: "../../assets/playlist/5.png",
    },
    {
      id: 6,
      title: "Podcasts",
      imgSrc: "../../assets/playlist/6.jpeg",
    },
    {
      id: 7,
      title: "Sertanejo",
      imgSrc: "../../assets/playlist/7.png",
    },
    {
      id: 8,
      title: "Samba e pagode",
      imgSrc: "../../assets/playlist/8.png",
    },
    { id: 9, title: "Funk", imgSrc: "../../assets/playlist/9.png" },
    {
      id: 10,
      title: "MPB",
      imgSrc: "../../assets/playlist/10.png",
    },
    {
      id: 11,
      title: "Rock",
      imgSrc: "../../assets/playlist/11.png",
    },
    {
      id: 12,
      title: "Hip Hop",
      imgSrc: "../../assets/playlist/12.jpeg",
    },
    {
      id: 13,
      title: "Indie",
      imgSrc: "../../assets/playlist/13.png",
    },
    {
      id: 14,
      title: "Relax",
      imgSrc: "../../assets/playlist/14.png",
    },
    {
      id: 15,
      title: "Música Latina",
      imgSrc: "../../assets/playlist/15.png",
    },
  ];

  return (
    <div className="main-container">
      <div class="playlist_container">
        <div id="result-playlists">
          <div class="playlist">
            <h1 id="greeting"></h1>
            <h2 class="session">Navegar por todas as seções</h2>
          </div>

          <div class="offer__scroll-container">
            <div class="offer__list">
              <section class="offer__list-item">
                {playlists.map((playlist) => (
                  <a key={playlist.id} href="" className="cards">
                    <div className={`cards card${playlist.id}`}>
                      <img key={playlist.imgSrc} src={playlist.imgSrc} alt="" />
                      <span>{playlist.title}</span>
                    </div>
                  </a>
                ))}
              </section>
            </div>
          </div>
        </div>

        <div id="result-artist" class="hidden">
          <div class="grid-container">
            <div class="artist-card" id="">
              <div class="card-img">
                <img id="artist-img" class="artist-img" />
                <div class="play">
                  <span class="fa fa-solid fa-play"></span>
                </div>
              </div>
              <div class="card-text">
                <a title="Foo Fighters" class="vst" href="">
                  <span class="artist-name" id="artist-name"></span>
                  <span class="artist-categorie">Artista</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
