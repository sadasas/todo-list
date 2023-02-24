import { createSlice } from "@reduxjs/toolkit";

interface TodoState {
  value: [{ id: number; content: string; finished: boolean }];
}

const initialState: TodoState = {
  value: [
    {
      id: 0,
      content: "",
      finished: false,
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
    updateTodo: (state: TodoState, action) => {
      state.value.map((content) => {
        if (
          content.id == action.payload.value.id &&
          action.payload.type === "CHECK"
        ) {
          content.finished = !content.finished;
        }
      });
    },
    removeTodo: (state: TodoState, action) => {
      state.value.splice(action.payload.value.id, 1);
      state.value.map((content, index) => (content.id = index));
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
