import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card" onClick={() => props.clicked(props.id)}>
      <div className="container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default Card;