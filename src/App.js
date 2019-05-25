import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h3>Todos</h3>
          <TodoForm />
          <br/>
          <hr/>
          <Todos />
        </div>
      </Provider>
     
    )
  }
}

export default App
