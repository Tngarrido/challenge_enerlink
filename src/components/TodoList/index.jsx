import React, {useEffect, useState} from "react";
import { requestIndexTodos } from "actions/todos";
import { useDispatch, useSelector } from 'react-redux';
import TodoListItem from "components/TodoListItem";
import TodoForm from "components/TodoForm";
import { requestPatchTodos } from "actions/todos";
import "./styles.css";


const TodoList = () => {
  const {todos: todosObject} = useSelector(state => state);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const {todos} = todosObject;
  console.log('state', todos);

  useEffect(()=>{
    dispatch(requestIndexTodos());
    setLoaded(true);
  }, []);

  const handleDelete = (todoId) => {
    // Fix an ability to delete task

  };

  const toggleCheck = (todoId, isChecked) => {
    // Fix an ability to toggle task
    console.log(todoId, isChecked, 'request ...');
    dispatch(requestPatchTodos({
      'id': todoId, 
      'checked': isChecked}));
    console.log(todoId, isChecked, 'finished ...');
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      { 
        loaded ? 
          <div className="todo-list-content">
            {todos.map((todo) => (<TodoListItem key={todo.id} label={todo.label} onCheck={e =>toggleCheck(todo.id, e.target.checked)}/>))}
          </div> :
          <div className="no-todos">
            Looks like you&apos;re absolutely free today!
          </div>
          }
    </div>
  );
};

export default TodoList;
