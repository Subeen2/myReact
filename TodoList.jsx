import React ,{memo}from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList=({onRemove, onToggle, todo})=>{
  return(
    <div>
      {todo.map((i)=>{
        return <TodoListItem todo={i} key={i.id} onRemove={onRemove} onToggle={onToggle}/>;
      })}
    </div>
  );
}

export default memo(TodoList);