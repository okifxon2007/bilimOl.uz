import React, { useEffect, useState } from "react";
import "../../Pages/Frontend/Frontend.css";
import data from "../../../src/Data/data.json";

const Frontend = () => {
  const [datas, setdatas] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0); // Hozirgi video uchun indeks

  useEffect(() => {
    const modifiedUrls = data.dasturlash.map((item) => ({
      id: item.id,
      url: item.url.slice(17), // 17-ta belgidan keyingi qismini olamiz
    }));
    setdatas(modifiedUrls);
  }, []);

  // Keyingi videoni ko'rsatish
  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % datas.length);
  };

  // Bosilgan cardning id dagi videoni ko'rsatish
  const handleVideoClick = (index) => {
    setCurrentVideoIndex(index);
  };

  return (
    <div className="container">
      <header className="header">Frontend</header>
      <div className="content">
        <div className="video-section">
          <h1>Video darsliklar</h1>
          {datas.length > 0 && (
            <iframe
              src={`https://www.youtube.com/embed/${datas[currentVideoIndex].url}`}
              className="video-player"
              title={`Video Player ${datas[currentVideoIndex].id}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
          <div className="video-description">
            <button className="custom-button" onClick={handleNextVideo}>
              Keyingi video
            </button>
          </div>
        </div>

        <div className="video-list">
          {datas.map((value, index) => (
            <div
              className="video-card"
              key={value.id}
              onClick={() => handleVideoClick(index)}
            >
              <span>
                {value.id}-dars
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frontend;
