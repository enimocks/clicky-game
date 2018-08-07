import React from 'react';
import './Navbar.css';


const Navbar = props => (
  <div className="navbar bg-primary text-white fixed-top pt-3">
    <ul>
      <li id="game">Test your memory!</li>
      <li id="score">Score: {props.score} | Best Score: {props.bestScore}</li>
    </ul>
  </div>
);


export default Navbar;