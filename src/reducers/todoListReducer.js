import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'todo',
  initialState: [
    { id: 0, text: 'Get up', done: true },
    { id: 1, text: 'Write report', done: false },
    { id: 2, text: 'Drink matcha', done: false }
  ], reducers: {
    // increment: (state, action) => {
    //   state.value += action.payload;
    // },
    // decrement: (state, action) => {
    //   state.value -= action.payload;
    // }
  }
});

// export const { increment, decrement } = todoSlice.actions;
export default todoSlice.reducer;