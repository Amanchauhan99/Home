import React, { Component } from 'react';

class AddItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      // Update form fields when itemId prop changes
      this.setState({
        name: this.props.item.name,
        description: this.props.item.description
      });
    }
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // Add new item using this.state.name and this.state.description
    // e.g., make an API call or update the parent component's state
    console.log('New item:', this.state.name, this.state.description);
    // Reset form fields
    this.setState({
      name: '',
      description: ''
    });
  };

  render() {
    return (
      <div>
        <h2>Add Item</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddItemForm;
