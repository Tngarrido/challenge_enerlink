import {useEffect} from "react";
import { requestIndexTodos } from "actions/todos";
import { useDispatch, useSelector } from 'react-redux';
import TodoListItem from "components/TodoListItem";
import { requestPatchTodos, requestDeleteTodos } from "actions/todos";
import "./styles.css";


const TodoList = ({counterDone, setCounterDonde}) => {
  const {todos: todosObject} = useSelector(state => state);
  const dispatch = useDispatch();
  const {todos} = todosObject;

  useEffect(()=>{
    dispatch(requestIndexTodos());
  }, [dispatch]);

  const handleDelete = (todoId, todoChecked) => {
    // Fix an ability to delete task
    todoChecked && setCounterDonde(counterDone > 0 && counterDone - 1);
    dispatch(requestDeleteTodos({"id":todoId}))
  };

  const toggleCheck = (todoId, isChecked) => {
    // Fix an ability to toggle task
    isChecked ? setCounterDonde(counterDone < todos.length && counterDone + 1) 
      : setCounterDonde(counterDone > 0 && counterDone - 1);
    dispatch(requestPatchTodos({
      'id': todoId, 
      'checked': isChecked}));
  };


  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      { 
        todos.length ? 
          <div className="todo-list-content">
            {todos.map((todo) => (<TodoListItem key={todo.id} label={todo.label} onDelete={() => handleDelete(todo.id, todo.checked) } checked={todo.checked} onCheck={e =>toggleCheck(todo.id, e.target.checked)}/>))}
          </div> :
          <div className="no-todos">
            Looks like you&apos;re absolutely free today!
          </div>
          }
    </div>
  );
};

export default TodoList;
