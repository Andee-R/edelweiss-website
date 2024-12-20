import React from "react";
import "../Gallery.css";
import taps from "../Images/bier_taps.jpg";

function Gallery() {
  return (
    <div className="gallery">
      <div className="galleryText container">
        <h1> Gallery</h1>
      </div>
      <div className="images container">
        <div className="slider">
          <div className="slide">
            <img src={taps} className="img-thumbnail img-fluid" alt="..." />

            <img src={taps} className="img-thumbnail img-fluid" alt="..." />

            <img src={taps} className="img-thumbnail img-fluid" alt="..." />

            <img src={taps} className="img-thumbnail img-fluid " alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
