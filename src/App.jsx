import React, { useState, useRef } from "react";
import { Input, AddButton, Div, Header, Li } from "./styles";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const inputTask = useRef();

  async function addNewTask() {
    const { data: newTask } = await axios.post("http://localhost:3001/tasks", {
      task: inputTask.current.value,
    });
    setTasks([newTask, ...tasks]);
  }

  return (
    <Div>
      <Header>
        <Input ref={inputTask} type="text" placeholder="+ Nova Tarefa"></Input>
        <AddButton onClick={addNewTask}>Adicionar</AddButton>
      </Header>
      <main>
        <ul>
          <Li>Fazer arroz</Li>
        </ul>
      </main>
    </Div>
  );
}

export default App;
