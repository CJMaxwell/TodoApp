import { NEW_TODO, FETCH_TODOS } from './types';


export const fetchTodos = () => dispatch => {
  fetch('http://jsonplaceholder.typicode.com/todos?_start=0&_limit=10')
    .then(res => res.json())
    .then(todos =>
      dispatch({
        type: FETCH_TODOS,
        payload: todos
      })
  );
}

export const createTodos = todoData => dispatch => {
  fetch('http://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(todoData)
  })
  .then(res => res.json())
  .then(todo => 
    dispatch({
      type: NEW_TODO,
      payload: todo
    })
  );
};
