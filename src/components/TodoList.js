"use client";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import styles from "../app/page.module.scss";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className={styles.todoContainer}>
      {/* <h2 className={styles.title}>Todo List</h2> */}
      <TodoForm />
      <ul className={styles.todoList}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
