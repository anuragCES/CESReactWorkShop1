import React, { Component } from 'react';

class TakeInput extends Component {
  constructor () {
    super();
    this.state = {
      text: ''
    }

    // Bindings
    this.changeText = this.changeText.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  changeText (event) {
    this.setState({
      text: event.target.value
    })
  }

  addItem (event) {
    this.props.add(this.state.text);
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <h3>{this.props.label}</h3>
        <input type='text' value={this.state.text} onChange={this.changeText}/>
        <button onClick={this.addItem}>Add Item</button>
      </div>
    );
  }
}

export default TakeInput;
