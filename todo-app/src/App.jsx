import React from "react";
import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { IncomplteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

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
    //未完了のTODOの配列に追加(今の内容に加えて)
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
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるTODOの上限に達しました！タスクを消化してください
        </p>
      )}
      <IncomplteTodos
        todos={incompleteTodos}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
