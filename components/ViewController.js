import React from 'react';
import { Text, View } from 'react-native';

import TwoScores from './TwoScores.js';
import GameSetup from './GameSetup.js';

export default class ViewController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
      playerOne: "Player One",
      playerTwo: "Player Two",
    };
  }

  startGame() {
    this.setState({gameStarted: true,});
  }

  render() {
    if (this.state.gameStarted) {
      return (
        <TwoScores
          playerOne={this.state.playerOne}
          playerTwo={this.state.playerTwo}
          />
      );
    } else {
      return(
        <GameSetup
          playerOne={this.state.playerOne}
          handlePress={this.startGame.bind(this)}/>
      );
    }
  }
}
