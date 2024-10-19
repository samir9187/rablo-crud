"use client";
import { useDispatch } from "react-redux";
import { removeTodo, toggleComplete, editTodo } from "../redux/todoSlice";
import styles from "../app/page.module.scss";
import { useState } from "react";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editText.trim()) {
      dispatch(editTodo({ id: todo.id, newText: editText }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={styles.todoItem}>
      <div className={styles.todoContent}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleComplete(todo.id))}
        />
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className={styles.editInput}
          />
        ) : (
          <span className={todo.completed ? styles.completed : ""}>
            {todo.text}
          </span>
        )}
      </div>
      <div className={styles.buttonGroup}>
        <button
          className={`${styles.editButton} ${
            isEditing ? styles.saveButton : ""
          }`}
          onClick={handleEdit}
        >
          {isEditing ? "Update" : "Edit"}
        </button>
        <button
          className={styles.removeButton}
          onClick={() => dispatch(removeTodo(todo.id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
