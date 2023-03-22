const { createSlice } = require('@reduxjs/toolkit');

const initialState = [];
export const todoSlice = createSlice({
  name: 'todo',
  initialState: { value: initialState },
  reducers: {
    addTodo: (state, action) => {},
  },
});

export default todoSlice.reducer;
