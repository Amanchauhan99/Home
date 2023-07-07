import React, { Component } from 'react';

class ClassItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true
    };
  }

  componentDidMount() {
    // Fetching items from API using fetch or any library (e.g., axios)
    fetch('https://api.example.com/items')
      .then(response => response.json())
      .then(data => {
        this.setState({
          items: data,
          loading: false
        });
      })
      .catch(error => {
        console.error('Error fetching items:', error);
        this.setState({
          loading: false
        });
      });
  }

  render() {
    const { items, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>Item List</h2>
        <ul>
          {items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ClassItem;
