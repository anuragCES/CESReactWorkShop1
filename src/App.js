import React, { Component } from 'react';
import TakeInput from './Components/TakeInput'
import List from './Components/List'

class App extends Component {
  constructor () {
    super()
    this.state = {
      listItems: ['1', '2', '3']
    }

    // Bindings
    this.addListItem = this.addListItem.bind(this)
  }

  addListItem (newItem) {
    const list = this.state.listItems;
    list.push(newItem);
    this.setState({
      listItems: list
    })
  }

  render() {
    const label = 'Name :';
    console.log('App Render - listItems : ', this.state.listItems);
    return (
      <div>
        <TakeInput label={label} add={this.addListItem}/>
        <List data={this.state.listItems}/>
      </div>
    );
  }
}

export default App;
