import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [];
export const todoSlice = createSlice({
  name: 'todo',
  initialState: { value: initialState },
  reducers: {
    addTodo: (state, action) => {
      state.value.push({ id: nanoid(), title: action.payload, isChecked: false });
    },

    removeTodo: (state, action) => {
      state.value = state.value.filter(prev => prev.id !== action.payload);
    },
    updateTodo: (state, action) => {},
    completedTodo: (state, action) => {
      state.value = state.value.map(prev => {
        if (prev.id === action.payload) {
          return { ...prev, isChecked: !prev.isChecked };
        }
      });
    },
  },
});

export const { addTodo, removeTodo, updateTodo, completedTodo } = todoSlice.actions;
export default todoSlice.reducer;
