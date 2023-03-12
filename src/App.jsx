import TodoList from "./components/TodoList";
import TodoResults from "./components/TodoResults";
import TodoForm from "components/TodoForm";
import Alert from 'components/Alert/alert';
import "./App.css";

const App = () => {
  return (
    <div className="root">
      <TodoList />
      <TodoResults />
      <TodoForm />
      <Alert />
    </div>
  );
};

export default App;
