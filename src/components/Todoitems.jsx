import React from 'react';
import cherry from '../assets/cherry.png';
import not_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';

const Todoitems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div onClick={() => { toggle(id); }} className='flex flex-1 items-center cursor-pointer'>
        <img src={isComplete ? cherry : not_tick} alt='tick' className='w-6' />
        
        
        <p className={`text-slate-700 ml-4 text-[17px] ${isComplete ? 'line-through' : ''} decoration-slate-500`}>
          {text}
        </p>
      </div>

      <img onClick={() => { deleteTodo(id); }} src={delete_icon} alt="delete" className='w-3.5 cursor-pointer' />
    </div>
  );
};

export default Todoitems;
