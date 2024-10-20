"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import styles from "../app/page.module.scss";
import { toast } from "react-toastify";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
      toast.success("Task added successfully!");
    } else {
      toast.error("Please enter a valid task!");
    }
  };

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className={styles.todoInput}
      />
      <button type="submit" className={styles.addButton}>
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
