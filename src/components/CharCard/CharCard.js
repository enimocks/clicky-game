import React from 'react';
import './CharCard.css';

// pass each image into a card to get all 12
const CharCard = props => (
    <div className="card" onClick={() => props.handleClick(props.id)}>
      <div className="img-container">
        <img alt={props.image.replace(".jpg", "")} src={require("../../img/" + props.image)} />
      </div>
    </div>
);

export default CharCard;