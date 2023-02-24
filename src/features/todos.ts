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
    },
    removeTodo: (state: TodoState, action) => {
      state.value.splice(action.payload.value.id, 1);
      state.value.map((content, index) => (content.id = index));
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
