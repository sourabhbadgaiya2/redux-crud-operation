// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import EditTask from "./components/EditTask";
import TaskList from "./components/TaskList";
import { store } from "./components/store/store";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<TaskList />} />
        <Route path='/edit/:id' element={<EditTask />} />
      </Routes>
    </Provider>
  );
};

export default App;
