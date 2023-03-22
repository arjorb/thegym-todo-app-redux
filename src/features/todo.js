import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [];
export const todoSlice = createSlice({
  name: 'todo',
  initialState: { value: initialState },
  reducers: {
    addTodo: (state, action) => {
      state.value.push({ id: nanoid(), title: action.payload, isChecked: false, isEdited: false });
    },

    removeTodo: (state, action) => {
      state.value = state.value.filter(prev => prev.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.value = state.value.map(prev => {
        return prev.id === action.payload.id && prev.isEdited ? { ...prev, title: action.payload.value } : prev;
      });
    },

    editTodo: (state, action) => {
      state.value = state.value.map(prev => {
        return prev.id === action.payload ? { ...prev, isEdited: !prev.isEdited } : prev;
      });
    },
    completedTodo: (state, action) => {
      state.value = state.value.map(prev => {
        if (prev.id === action.payload) {
          return { ...prev, isChecked: !prev.isChecked };
        }
      });
    },
  },
});

export const { addTodo, removeTodo, updateTodo, editTodo, completedTodo } = todoSlice.actions;
export default todoSlice.reducer;
