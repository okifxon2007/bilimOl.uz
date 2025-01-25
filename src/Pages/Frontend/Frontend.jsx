import React, { useEffect, useState } from "react";
import "../../Pages/Frontend/Frontend.css";
import data from "../../../src/Data/data.json";

const Frontend = () => {
  const [datas, setdatas] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0); 

  useEffect(() => {
    const modifiedUrls = data.dasturlash.map((item) => ({
      id: item.id,
      url: item.url.slice(17), 
    }));
    setdatas(modifiedUrls);
  }, []);

  
  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % datas.length);
  };

  const handleVideoClick = (index) => {
    setCurrentVideoIndex(index);
  };

  return (
    <div className="container">
       <button className="custom-button">
              <a href="/hometwo">Orqaga</a>
            </button>
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
