import TodoList from "./components/TodoList";
import TodoResults from "./components/TodoResults";
import TodoForm from "components/TodoForm";
import Alert from 'components/Alert/alert';
import "./App.css";
import { useState } from "react";

const App = () => {
  const [counterDone, setCounterDonde] = useState(0);
  return (
    <div className="root">
      <TodoList counterDone={counterDone} setCounterDonde={setCounterDonde}/>
      <TodoResults counterDone={counterDone}/>
      <TodoForm />
      <Alert />
    </div>
  );
};

export default App;
