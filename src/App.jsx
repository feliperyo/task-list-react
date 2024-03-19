import React, { useState } from "react";
import { Input, AddButton, Div, Header, Li, Rocket, Trash, H3 } from "./styles";
import { v4 as uuidv4 } from "uuid";

import RocketImage from "./assets/rocket.png";
import TrashImage from "./assets/trash.png";

function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  function InputValue(event) {
    setTask(event.target.value);
  }

  function addNewTask() {
    if (task) {
      setList([{ id: uuidv4(), task, finished: false }, ...list]);
    }
  }

  function checkTask(id) {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    );
    setList(newList);
  }

  function deleteTask(id) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  return (
    <>
      <Div>
        <Header>
          <Input
            onChange={InputValue}
            type="text"
            placeholder="Nova Tarefa"
          ></Input>
          <AddButton onClick={addNewTask}>Adicionar</AddButton>
        </Header>
        <main>
          <ul>
            {list.length > 0 ? (
              list.map((item) => (
                <Li isFinished={item.finished} key={item.id}>
                  <button onClick={() => checkTask(item.id)}>
                    <Rocket src={RocketImage}></Rocket>
                  </button>
                  {item.task}
                  <button onClick={() => deleteTask(item.id)}>
                    <Trash src={TrashImage}></Trash>
                  </button>
                </Li>
              ))
            ) : (
              <H3>Ainda não há tarefas aqui, adicione uma!</H3>
            )}
          </ul>
        </main>
      </Div>
    </>
  );
}

export default App;
