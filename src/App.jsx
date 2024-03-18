import React, { useState } from "react";
import { Input, AddButton, Div, Header, Li } from "./styles";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState([]);

  function InputValue(event) {
    setTask(event.target.value);
  }

  function addNewTask() {
    setList([{ id: uuidv4(), task }, ...list]);
  }

  return (
    <>
      <Div>
        <Header>
          <Input
            onChange={InputValue}
            type="text"
            placeholder="+ Nova Tarefa"
          ></Input>
          <AddButton onClick={addNewTask}>Adicionar</AddButton>
        </Header>
        <main>
          <ul>
            {list.map((item) => (
              <Li key={item.id}>{item.task}</Li>
            ))}
          </ul>
        </main>
      </Div>
    </>
  );
}

export default App;
