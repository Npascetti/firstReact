import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count:    0,
      ipsum: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    axios.get('https://baconipsum.com/api/?type=meat-and-filler&paras=2')
    .then(response => this.setState({ipsum: response.data}))
    this.setState({
      count: this.state.count + 1
    })
    const message = "You clicked it!!" + this.state.count;
    console.log(message)
  }

  render () {
    return (
      <div className='button__container'>
        <button className='button' onClick = {this.handleClick}>Click Me</button>
        <p>{this.state.ipsum[0]}</p>
        <p>{this.state.ipsum[1]}</p>
      </div>
    )
  }
}

export default App
