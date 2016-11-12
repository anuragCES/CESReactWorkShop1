import React, { Component } from 'react';

class List extends Component {
  render() {
    console.log('List Render - listItems : ', this.props.data);
    return (
      <div>
        <ul className='list'>
          {
            this.props.data.map(
              (item) =>
                <li className='list-item'>{item}</li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default List;
