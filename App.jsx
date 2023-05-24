import "./App.css";
import Todo from "./compontents/Todo.jsx";
import Title from "./compontents/title.jsx";
import Modal from "./compontents/Modal.jsx"
function App() {
  return (
    <div>
      <Title />
      <div className="todo__wrapper">
        <Todo />
        <Todo />
        <Todo />
      </div>
      <Modal />
    </div>
  );
}

export default App;
