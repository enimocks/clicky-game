import React, { Component } from 'react';
import './App.css';
import CharCard from './components/CharCard';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
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
          <Title />
        <div className="container">
          <div className="row">
            {this.state.characters.map(char => (
              <CharCard 
              id={char.id}
              key={char.id}
              image={char.image}
            />
          ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
