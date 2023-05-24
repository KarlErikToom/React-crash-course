import "./App.css";
import Todo from "./compontents/Todo.jsx";
import Title from "./compontents/title.jsx";
import Modal from "./compontents/Modal.jsx";
function App() {
  return (
    <div>
      <Title />
      <div className="todo__wrapper">
        <Todo
          title="Finish frontend Simplified"
          paragraph="Code along step by step"
        />
        <Todo
          title="complete the interview section"
          paragraph="awnser all the interview questions"
        />
        <Todo 
        title="Land a Job"
        paragraph="get an interview and show my skills" />
      </div>
      <Modal title="Are you sure you want do delete?" />
    </div>
  );
}

export default App;
