import React from "react";
import "./HoverCard.css";

const HoverCard = ({ label, visible, imageUrl, paragraph }) => {
  const cardClassName = visible ? "hover-card" : "hover-card hidden";

  return (
    <div className={cardClassName}>
      <h2>{label}</h2>{" "}
      <div className="img-container">
        <img src={imageUrl} alt={label} />
      </div>
      <p>{paragraph}</p>
    </div>
  );
};

export default HoverCard;
