import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

export default class GameSetup extends React.Component {
  handlePress() {
    this.props.handlePress();
  }

  render() {
    return(
      <View style={styles.gameSetupWrapper}>
        <View style={styles.inputSection}>
          <View style={styles.inputSectionRow} >
            <Text style={styles.inputLabel}>
              Player one
            </Text>
          </View>
          <View style={styles.inputSectionRow} >
            <TextInput
              placeholder={this.props.playerOne}
              ></TextInput>
          </View>
          <View style={styles.inputSectionRow} >
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={this.handlePress.bind(this)}
              >
              <Text>
                Start Game
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  gameSetupWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  primaryButton: {
    flex: 1,
    height: 45,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputSection: {
    backgroundColor: '#eaeaea',
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
    paddingBottom: 10,
  }
});
