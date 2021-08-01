// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNum = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + this.getRandomNum(),
    }))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="app-container">
        <div className="count-container">
          <h1 className="count">Count {count}</h1>
          <p className="number-category">Count is {displayText}</p>
          <button
            onClick={this.onIncrement}
            className="increment-button"
            type="button"
          >
            Increment
          </button>
          <p className="note">Increase by random number between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
