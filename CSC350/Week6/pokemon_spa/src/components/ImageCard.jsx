import React from "react";

function ImageCard({ src, alt, caption }) {
  return (
    <div className="card my-3" style={{ width: "18rem" }}>
      <img src={src} className="card-img-top" alt={alt} />
      <div className="card-body">
        <p className="card-text">{caption}</p>
      </div>
    </div>
  );
}

export default ImageCard;
