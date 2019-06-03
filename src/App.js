import React, { Component, } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 }
    this.inc = this.inc.bind(this)
    this.dec = this.dec.bind(this)
  }

    inc() {
      this.setState({ value: this.state.value + 1 });
    };
    
    dec() {
      this.setState({ value: this.state.value - 1 });
    };

  render() {
    return (
      <div className="App">
        <h1>Counter Example</h1>
        <p>{this.state.value}</p>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
   )
  }
}
export default App;
