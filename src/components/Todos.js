import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTodos } from '../actions/todoAction';


class Todos extends Component {

  componentDidMount() {
    this.props.fetchTodos();
  }
  
  render() {
    const todoItems = this.props.todos.map(todo => (
      <div key={todo.id}>
        <span><input type="checkbox" name="completed"/>{todo.isCompleted}</span>
        <span>{todo.title}</span>
      </div>
    ));

    return (
      <div>
        <div>
          <h3>Todos</h3>
          { todoItems }
        </div>
      </div>
    )
  }
}

Todos.prototypes = {
  fetchTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  todos: state.todos.todoItems,
})
export default connect(mapStateToProps, { fetchTodos })(Todos)
