import React from "react";
import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { IncomplteTodos } from "./components/IncompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };

  const onClickAdd = () => {
    //押された時のtodeTextのstateを確認
    // alert(todoText);
    if (todoText === "") return;
    //未完了のTODOの配列に追加(今のお内容に加えて)
    const newToDos = [...incompleteTodos, todoText];
    setIncompleteTodos(newToDos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    setIncompleteTodos(incompleteTodos.filter((todos, i) => i !== index));
  };

  const onClickDone = (index) => {
    setIncompleteTodos(incompleteTodos.filter((todos, i) => i !== index));
    const newTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickBack = (index) => {
    setCompleteTodos(completeTodos.filter((todos, i) => i !== index));
    const newTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncomplteTodos
        todos={incompleteTodos}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
