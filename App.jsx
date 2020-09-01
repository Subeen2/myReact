import React, {useCallback} from 'react';
import TodoTemplate from './Component/TodoTemplate';
import TodoInsert from './Component/TodoInsert';
import TodoList from './Component/TodoList';

import './App.css';

const App =()=>{
  const [todo, setTodo] = React.useState([
    {
      id: 1,
      text: 'hi',
      checked: false,
    },
    {
      id: 2,
      text: 'hi2',
      checked: false,
    },
    {
      id: 3,
      text: 'hi22',
      checked: false,
    },
  ]);

  const nextId = React.useRef(4);

  const Insert =(text)=>{
    const addTodo={
      id: nextId.current,
      text,
      checked: false,
    }
    setTodo(todo.concat(addTodo));
    nextId.current += 1;
  }

  const remove=useCallback((id)=>{
    setTodo(todo.filter(addTodo=>addTodo.id !== id));
  },[todo]);

  const Toggle=(id)=>{
    setTodo(
      todo.map((addTodo)=>
        id === addTodo.id ? {...addTodo, checked: !addTodo.checked} : addTodo,
      )
    );
  }

  return(
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={Insert}></TodoInsert>
        <TodoList todo={todo} onRemove={remove} onToggle={Toggle}></TodoList>
      </TodoTemplate>
    </div>
  );
}

export default App;
