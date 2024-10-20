"use client";
import ToastProvider from "@/components/ToastProvider";
import TodoList from "../components/TodoList";
import styles from "./page.module.scss";
export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>To-Do List</h1>

      <TodoList />
      <ToastProvider />
    </div>
  );
}
