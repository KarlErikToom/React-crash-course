import "./App.css";
import Todo from "./compontents/Todo.jsx";
import Title from "./compontents/title.jsx";
import Modal from "./compontents/Modal.jsx";
function App() {
  return (
    <div>
      <Title />
      <div>
        <input type="text" onChange={(event) =>{
console.log(event.target.value)
        }} />
        <button>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo title="Finish frontend Simplified" />
        <Todo title="complete the interview section" />
        <Todo title="Land a Job" />
      </div>
      {<Modal title="Are you sure you want do delete?" />}
    </div>
  );
}

export default App;
