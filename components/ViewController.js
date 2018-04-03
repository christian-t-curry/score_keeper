import React from 'react';
import { Text, View } from 'react-native';

import TwoScores from './TwoScores.js';
import GameSetup from './GameSetup.js';

export default class ViewController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
      playerOne: "Chris",
      playerTwo: "Kinsey",
    };
  }

  startGame() {
    this.setState({gameStarted: true,});
  }

  handleBack() {
    this.setState({gameStarted: false,})
  }

  updatePlayerOne(newName) {
    this.setState({playerOne: newName});
  }

  render() {
    if (this.state.gameStarted) {
      return (
        <TwoScores
          playerOne={this.state.playerOne}
          playerTwo={this.state.playerTwo}
          handleBack={this.handleBack.bind(this)}
          />
      );
    } else {
      return(
        <GameSetup
          playerOne={this.state.playerOne}
          updatePlayerOne={this.updatePlayerOne.bind(this)}
          playerTwo={this.state.playerTwo}
          handlePress={this.startGame.bind(this)}/>
      );
    }
  }
}
