import React from "react";

const FlipCard = () => {
  return (
    <div className="container">
      <div className="card-container">
        <div className="card">
          <figure className="front">
            <h1>On Yüz</h1>
          </figure>
          <figure className="back">
            <h1>Arka yüz</h1>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
