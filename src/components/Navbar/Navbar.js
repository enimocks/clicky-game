import React from 'react';
import 'Navbar.css';


const Navbar = props => (
  <div className='navbar bg-primary text-white fixed-top'>
    <ul>
      <li id='game'>Test your memory!</li>
      <li id='result'>{props.}</li>
      <li id='score'>Count: {props.} | Your Best Count: {props.}</li>
    </ul>
  </div>
);


export default Navbar;