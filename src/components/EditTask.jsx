// EditTask.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editTask } from "./reducers/taskSlice";

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const task = useSelector((state) =>
    state.tasks.find((task) => task.id === id)
  );

  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.description : "");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(editTask({ id, title, description }));
    navigate("/");
  };

  return (
    <div className='flex flex-col items-center p-4'>
      <form onSubmit={submitHandler} className='w-full max-w-md'>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className='w-full p-2 mb-2 border border-gray-400 rounded'
          type='text'
          placeholder='Edit Task Title'
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className='w-full p-2 mb-2 border border-gray-400 rounded'
          type='text'
          placeholder='Edit Task Description'
        />
        <button
          type='submit'
          className='w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600'
        >
          Update Task
        </button>
      </form>
    </div>
  );
};

export default EditTask;
