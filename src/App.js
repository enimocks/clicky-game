import React, { Component } from 'react';
import './App.css';
import CharCard from './components/CharCard';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import characters from './characters.json';

class App extends Component {

  state = {
    characters,
    score: 0,
    bestScore: 0,
    clicked: [],
  }

  render() {
    return (
      <Wrapper>
        <Navbar />
        {this.state.characters.map(char => (
        <CharCard 
        id={char.id}
        key={char.id}
        image={char.image}
        />
      ))}
      </Wrapper>
    );
  }
}

export default App;
