import React, { useState, useRef, useEffect } from 'react';
import hellokittyreading from '../assets/hellokittyreading.png';
import Todoitems from './Todoitems';
import Timer from './Timer'; 
import backgroundd from '../assets/backgroundd.jpeg';

const Todo = () => {
  const [todoList, setTodoList] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return; 
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = ""; 
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className='flex justify-between p-7 min-h-[550px]'>
      <div
        style={{
          backgroundImage: `url(${backgroundd})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className='bg-white w-11/12 max-w-md flex flex-col p-7 rounded-xl'
      >
        {/* Title */}
        <div className='flex items-center mt-7 gap-2'>
          <img className='w-12' src={hellokittyreading} alt='logo' />
          <h1 className='text-3xl font-serif'>To-Do</h1>
        </div>

        {/* Input Box */}
        <div className='flex items-center my-7 rounded-full h-14'>
          <input
            ref={inputRef}
            style={{
              background: 'transparent',
              padding: '10px',
              color: 'black',
              flex: 1,
              border: 'none',
            }}
            className='outline-none pl-6 pr-2 placeholder:text-slate-600'
            type='text'
            placeholder='Add your task'
          />
          <button
            onClick={add}
            className='border-none rounded-full bg-red-500 w-32 h-14 text-white text-lg font-medium cursor-pointer'
          >
            ADD +
          </button>
        </div>

        {/* Todo List */}
        <div>
          {todoList.map((item) => (
            <Todoitems
              key={item.id}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          ))}
        </div>
      </div>

      
      <div className='flex flex-col items-center ml-5'>
        <Timer />

        {/* Spotify Playlist */}
        <div className="spotify-playlist mt-5">
          <iframe
            src="https://open.spotify.com/embed/playlist/3cnkhyqinMpD5O6f6qh5l4"
            width="300"
            height="380"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
            title="Spotify Playlist"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Todo;
