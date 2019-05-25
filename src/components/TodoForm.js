import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createTodos } from '../actions/todoAction';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const todo = {
      title: this.state.title
    }

    this.props.createTodos(todo);
  }
  render() {
    return (
      <div>
        <h2>Add Todo</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label><br/>
            <input type="text" name='title' onChange={this.handleChange} value={this.state.title}/>
          </div>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

TodoForm.prototypes = {
  createTodos: PropTypes.func.isRequired,
}
export default connect(null, { createTodos })(TodoForm);
