import { createSlice } from "@reduxjs/toolkit";

interface TodoState {
  value: [{ id: number; content: string }];
}

const initialState: TodoState = {
  value: [
    {
      id: 0,
      content: "",
    },
  ],
};
const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state: TodoState, action) => {
      if (action.payload.value.content === "") return;
      state.value.push({
        id: state.value[state.value.length - 1].id + 1,
        ...action.payload.value,
      });
      console.log(state.value.length);
    },
    removeTodo: (state: TodoState, action) => {
      state.value
        .filter((content) => content.id !== action.payload.value.id)
        .map();
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
