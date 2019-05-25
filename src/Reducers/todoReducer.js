import { NEW_TODO, FETCH_TODOS } from '../actions/types';

const initialState = {
  todoItems: [],
}


const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        todoItems: action.payload
      }
    case NEW_TODO:
      return {
        ...state,
        todoItems: [action.payload, ...state.todoItems]
      }
    default:
      return state;
  }
}

export default todoReducer;