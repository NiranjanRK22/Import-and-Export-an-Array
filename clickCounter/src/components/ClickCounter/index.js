// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="counter-app-container">
        <div className="counter-card-container">
          <h1 className="title">
            The Button has been clicked{' '}
            <span className="counter-number">{count}</span> times
          </h1>
          <p className="description">click the button to increase the count</p>
          <button
            className="click-button"
            type="button"
            onClick={this.onIncrement}
          >
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
