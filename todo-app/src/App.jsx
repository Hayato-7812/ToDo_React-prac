import React from "react";
import { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState(["test1", "test2"]);
  const [completeTodos, setCompleteTodos] = useState([
    "test1-done",
    "test2-done",
  ]);
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

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        ></input>

        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
