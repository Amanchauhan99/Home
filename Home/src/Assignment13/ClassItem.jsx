import React, { Component } from 'react';

class ItemList extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    // Fetch the list of items from an API
    fetch('https://api.example.com/items')
      .then(response => response.json())
      .then(data => {
        this.setState({ items: data });
      })
      .catch(error => {
        console.error('Error fetching items:', error);
      });
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <h1>Item List</h1>
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemList;
