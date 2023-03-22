import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [];
export const todoSlice = createSlice({
  name: 'todo',
  initialState: { value: initialState },
  reducers: {
    addTodo: (state, action) => {
      const { payload } = action;
      state.value = { ...state.value, id: nanoid(), title: payload, isChecked: false };
    },
  },
});

export default todoSlice.reducer;
