import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED
} from '../constants/ActionTypes'

export const addTodo = (text) => {
  return async (dispatch) => {
    dispatch({ type: ADD_TODO,  text });
  }
}

export const deleteTodo = (id) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_TODO, id });
  }
}

export const editTodo = (id, text) => {
  return async (dispatch) => {
    dispatch({ type: EDIT_TODO, id, text });
  }
}

export const completeTodo = (id) => {
  return async (dispatch) => {
    dispatch({ type: COMPLETE_TODO, id });
  }
}

export const completeAll = () => {
  return async (dispatch) => {
    dispatch({ type: COMPLETE_ALL });
  }
}

export const clearCompleted = () => {
  return async (dispatch) => {
    dispatch({ type: CLEAR_COMPLETED });
  }
}
