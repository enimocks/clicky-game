import React from 'react';
import './CharCard.css';

// pass each image into a card to get all 12
const CharCard = props => (
  <div className="col-xs-12">
    <div className="card d-flex" onClick={() => props.handleClick(props.id)}>
      <div className="img-container justify-content-center align-content-center">
        <img alt={props.image.replace(".jpg", "")} src={require("../../img/" + props.image)} />
      </div>
    </div>
  </div>
);

export default CharCard;