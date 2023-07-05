import React, { Component } from 'react';

class AddItemForm extends Component {
  state = {
    name: '',
    description: '',
  };

  componentDidUpdate(prevProps) {
    if (prevProps.itemId !== this.props.itemId) {
      // Reset the form fields when the itemId prop changes
      this.setState({ name: '', description: '' });
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // Perform the action to add a new item using the form data
    const newItem = {
      name: this.state.name,
      description: this.state.description,
    };
    // Code for adding the new item...
  };

  render() {
    return (
      <div>
        <h1>Add Item</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddItemForm;
