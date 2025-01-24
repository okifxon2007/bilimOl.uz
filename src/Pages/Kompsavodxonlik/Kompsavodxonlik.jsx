import React from 'react';
import '../../Pages/Kompsavodxonlik/Kompsavodxonlik.css';

const Kompsavodxonlik = () => {
  return (
    <div className="container">
      <header className="header">Kompsavodxonlik</header>
      <div className="content">
        <div className="video-section">
          <h1>Video darsliklar</h1>
          <iframe
            src="https://www.youtube.com/embed/gI3BaGP5cqU?si=eMrfvEBQXUWxYI6_"
            className="video-player"
            title="Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="video-description">
            <h2>Video nomi tursin</h2>
            <p>Description p shaklida.</p>
          </div>
        </div>
        <div className="video-list">
          {Array.from({ length: 20 }).map((_, index) => (
            <div className="video-card" key={index}>
              <span>play video{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kompsavodxonlik;
