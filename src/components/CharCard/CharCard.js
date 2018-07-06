import React from 'react';
import 'CharCard.css';

//pass each image into a card to get all 12
const CharCard = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default CharCard;