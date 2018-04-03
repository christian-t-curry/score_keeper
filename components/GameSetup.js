/*
NOTES:
--I should move the state of player one and player two out of this component and instead pass them straight
through from the view controller into a text input component.
*/

import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput , KeyboardAvoidingView, Alert } from 'react-native';

export default class GameSetup extends React.Component {

  constructor(props) {
    super (props);
    this.state = {
      playerOne: this.props.playerOne,
    };
  }

  handlePress() {
    this.props.handlePress();
  }

  handleBlur(doThis, player) {
    doThis(player);
  }

  render() {
    return(
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.gameSetupWrapper}>

        <View style={styles.inputSection}>

          //Player One Input
          <View style={styles.inputSectionRow} >
            <Text style={styles.inputLabel}>
              Player one
            </Text>
          </View>

          <View style={styles.inputSectionRow} >
            <TextInput
              value={this.state.playerOne}
              style={styles.textInput}
              onChangeText={(playerOne) => this.setState({playerOne})}
              maxLength={35}
              onBlur={this.handleBlur.bind(this, this.props.updatePlayerOne, this.state.playerOne)}
              ></TextInput>
          </View>

          //Player Two Input
          <View style={styles.inputSectionRow} >
            <Text style={styles.inputLabel}>
              Player Two
            </Text>
          </View>

          <View style={styles.inputSectionRow} >
            <TextInput
              value={this.props.playerTwo}
              style={styles.textInput}
              maxLength={35}
              ></TextInput>
          </View>

          //Start Game Button
          <View style={styles.inputSectionRow} >
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={this.handlePress.bind(this)}
              >
              <Text style={styles.primaryButtonText}>
                Start Game
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  gameSetupWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButton: {
    flex: 1,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: 'black',
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  inputSection: {
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputSectionRow: {
    flexDirection: 'row',
  },
  inputLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    height: 45,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 20,
    paddingLeft: 10,
    fontSize: 16,
  }
});
