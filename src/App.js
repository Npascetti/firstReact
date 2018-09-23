import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
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
      </div>
    )
  }
}

export default App
