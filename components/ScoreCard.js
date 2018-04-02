import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class ScoreCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScore: this.props.startingScore,
    };
  }

  handleScoreChange(number) {
    newScore = this.state.currentScore + number;
    this.setState({currentScore: newScore});
  }

  render() {
    return(
      <View style={styles.scoreCardWrapper}>
        <View style={styles.scoreCardLabel}>
          <Text style={styles.scoreCardLabelText}>{this.props.label}</Text>
        </View>

        <View style={styles.scoreSection}>
          <Text style={styles.printedScore}>{this.state.currentScore}</Text>
        </View>

        <View style={styles.controlSection}>
          <TouchableOpacity style={styles.controlButton} onPress={this.handleScoreChange.bind(this, -5)}>
            <Text style={styles.controlButtonText}>
              -5
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.controlButton} onPress={this.handleScoreChange.bind(this, -1)}>
            <Text style={styles.controlButtonText}>
              -1
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.controlButton} onPress={this.handleScoreChange.bind(this, 1)}>
            <Text style={styles.controlButtonText}>
              +1
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.controlButton} onPress={this.handleScoreChange.bind(this, 5)}>
            <Text style={styles.controlButtonText}>
              +5
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  scoreCardWrapper: {
    flex: 1,
    backgroundColor: "#EAEAEA",
  },
  scoreCardRow: {
    minHeight: 45,
    flex: 1,
  },
  scoreCardLabel: {
    height: 50,
    borderWidth: 1,
    backgroundColor: 'white',
  },
  scoreCardLabelText: {
    fontSize: 21,
    textAlign: 'center',
    lineHeight: 50,
  },
  scoreSection: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  printedScore: {
    fontSize: 70,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  controlSection: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'pink',
  },
  controlButton: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  controlButtonText: {
    fontSize: 21,
  },
});
