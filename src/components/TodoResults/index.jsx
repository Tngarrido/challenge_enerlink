import "./styles.css";

const TodoResults = ({counterDone}) => {
  // Fix an ability to calculate completed tasks
  return <div className="todo-results">Done: {counterDone}</div>;
};

export default TodoResults;
