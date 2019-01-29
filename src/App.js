import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import characters from './characters.json'
import Card from './components/Card/Card.js'
import Wrapper from './components/Wrapper/Wrapper.js'
import Title from './components/Title/Title.js'

class App extends Component {
  state = {
    characters,
    best: 0,
    correct: 0,
    message: "Click a character to being. Win by not clicking the same character twice!",
    clicked: []
  }

  clicked = id => {
    if(this.state.clicked.includes(id)){
      this.setState({
        correct: 0,
        message: "You clicked incorrectly!",
        clicked: []
      })
    }
    else{
      let correct = (this.state.correct += 1)
      let clicked = this.state.clicked
      clicked.push(id)
      this.setState({
        correct: correct,
        message: "You were correct!",
        clicked: clicked
      })
      if(correct > this.state.best){
        this.setState({
          best: correct
        })
      }
    }
    this.randomIze(this.state.clicked)
  }


randomIze () {
  var array = this.state.characters
  var current = array.length, temp, random

  while(0 !== current){
    random = Math.floor(Math.random() * current)
    current -= 1

    temp = array[current]
    array[current] = array[random]
    array[random] = temp
  }
  this.setState({characters: array})
}







  render() {
    return (
      <div>
      <Title message={this.state.message} best={this.state.best} correct={this.state.correct}/>
      <Wrapper>
        {this.state.characters.map(characters =>
          (<Card id={characters.id} image={characters.image} name={characters.name} clicked={this.clicked}/>)
        )}
      </Wrapper>
      </div>
    );
  }
}

export default App;
