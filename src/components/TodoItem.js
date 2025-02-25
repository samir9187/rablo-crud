"use client";
import { useDispatch } from "react-redux";
import { removeTodo, toggleComplete, editTodo } from "../redux/todoSlice";
import styles from "../app/page.module.scss";
import { useState } from "react";
import { toast } from "react-toastify";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editText.trim()) {
      dispatch(editTodo({ id: todo.id, newText: editText }));
      toast.success("Task updated successfully!");
    }
    setIsEditing(!isEditing);
  };
  const handleRemove = () => {
    dispatch(removeTodo(todo.id));
    toast.success("Task removed!");
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
        <button className={styles.removeButton} onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
