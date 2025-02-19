import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

const colors = ['green', 'blue', 'brown', 'yellow', 'red', 'black'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      backgroundColor: '#fff',
    };
  }

  handleButtonClick = (newColor) => {
    this.setState({ backgroundColor: newColor });
  };

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.backgroundColor }]}>
        <ButtonComponent
          backgroundColor="green"
          onClick={this.handleButtonClick}
          colorChange="green"
        />
        <ButtonComponent
          backgroundColor="blue"
          onClick={this.handleButtonClick}
          colorChange="blue"
        />
        <ButtonComponent
          backgroundColor="brown"
          onClick={this.handleButtonClick}
          colorChange="brown" 
        />
        <ButtonComponent
          backgroundColor="yellow"
          onClick={this.handleButtonClick}
          colorChange="yellow" 
        />
        <ButtonComponent
          backgroundColor="red"
          onClick={this.handleButtonClick}
          colorChange="red"
        />
        <ButtonComponent
          backgroundColor="black"
          onClick={this.handleButtonClick}
          colorChange="black"
        />
      </View>
    );
  }
}

class TitleComponent extends Component {
  render() {
    const { title, color } = this.props;
    return <Text style={[styles.title, { color: color }]}>{title}</Text>;
  }
}

class ButtonComponent extends Component {
  render() {
    const { backgroundColor, message, onClick, colorChange } = this.props;
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onClick(colorChange)}
      >
        <Text style={styles.buttonText}>{backgroundColor}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 70,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  message: {
    marginTop: 20,
    fontSize: 18,
    color: 'gray',
  },
});

export default App;
