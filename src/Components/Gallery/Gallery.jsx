import React from "react";
import "../Gallery/Gallery.css";

function Gallery() {
  return (
    <div className="gallery">
      <div className="galleryText container">
        <h1> Gallery</h1>
      </div>
      <div className="images container">
        <div className="slider">
          <div className="slide">
            <img src={""} className="img-thumbnail img-fluid" alt="..." />

            <img src={""} className="img-thumbnail img-fluid" alt="..." />

            <img src={""} className="img-thumbnail img-fluid" alt="..." />

            <img src={""} className="img-thumbnail img-fluid " alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
