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
    dispatch({ type: ADD_TODO, text });
  }
}

export const deleteTodo = (id) => {
  return async (dispatch) => {
    dispatch({ type : DELETE_TODO, id });
  }
}

export const editTodo = (id, text) => {
  return async (dispatch) => {
    dispatch({ type : EDIT_TODO, id, text });
  }
}

export function completeTodo(id) {
  return { type: COMPLETE_TODO, id }
}

export function completeAll() {
  return { type: COMPLETE_ALL }
}

export function clearCompleted() {
  return { type: CLEAR_COMPLETED }
}

