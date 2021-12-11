import React from "react";

const FlipCard = ({ name, img, descriptıon }) => {
  return (
    <div className="container">
      <div className="card-container">
        <div className="card">
          <figure className="front">
            <img src={img} alt={name} />
            <h4>{name}</h4>
          </figure>
          <figure className="back">
            <div>
              <h3>{name} Contants</h3>
            </div>
            <div>
              {descriptıon.map((des) => (
                <h5>{`* ${des}`}</h5>
              ))}
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
