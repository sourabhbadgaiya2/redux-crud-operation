import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    
    addTask: (state, action) => {
      state.push({ id: nanoid(), ...action.payload, isComplete: false });
    },

    editTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },

    toggleComplete: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.isComplete = !task.isComplete;
      }
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, editTask, toggleComplete, deleteTask } =
  taskSlice.actions;

export default taskSlice.reducer;
