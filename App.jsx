import "./App.css";
import Todo from "./compontents/Todo.jsx";
import Title from "./compontents/title.jsx";
import Modal from "./compontents/Modal.jsx";
import Counter from "./compontents/Counter.jsx";
import React, { useState, useEffect } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  function onTodoDelete() {
    setShowModal(true);
    console.log("onTodoDelete()");
  }
  function cancelModal() {
    setShowModal(false);
  }

  function confirmModal() {
    setShowModal(false);
  }
  useEffect(() => {
    console.log("ONLY on mount");
  }, []);
  useEffect(()=>{
    console.log("on mount AND on showModal change")
  },[showModal])
  useEffect(()=>{
   console.log("EVERY render") 
  })

  return (
    <div>
      <Title />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo onTodoDelete={onTodoDelete} title="Finish frontend Simplified" />
        <Todo
          onTodoDelete={onTodoDelete}
          title="complete the interview section"
        />
        <Todo onTodoDelete={onTodoDelete} title="Land a Job" />
      </div>
      {showModal ? (
        <Modal
          cancelModal={cancelModal}
          confirmModal={confirmModal}
          title="confirm Delete?"
        />
      ) : null}
    </div>
  );
}

export default App;
