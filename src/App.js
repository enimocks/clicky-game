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
  }

  // shuffle the cards -- use after each card clicked
  shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  handleClick = id => {
    const characters = this.state.characters.filter(leader => leader.id === id);

    if (!characters[0].clicked) {
      characters[0].clicked = true;
      const newScore = this.state.score + 1;
      this.setState({ score: newScore });
      // score not actually updated yet, so use newScore

      if (newScore >= this.state.bestScore) {
        this.setState({ bestScore: newScore });
      }
    } else {
      // game over, so reset score and clicked
      this.setState({ score: 0 });
      // make copy so not mutating state directly
      const resetArray = this.state.characters.slice();
      resetArray.forEach((leader) => {
        leader.clicked = false;
      });
      this.setState({characters: resetArray});
    }
    // pass a copy so don't mutate state directly
    const charactersNew = this.shuffle(this.state.characters.slice());
    // multiple setState calls in a handler are OK
    this.setState({characters: charactersNew});
  };

  render() {
    return (
      <Wrapper>
        <Navbar
          score={this.state.score}
          bestScore={this.state.bestScore}
        />
        <Title />
        <div className="container">
          <div className="row">
            {this.state.characters.map(char => (
              <CharCard 
              handleClick={this.handleClick}
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
