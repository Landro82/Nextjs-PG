import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Paderborn() {
  const [state, setState] = useState(0);
  function handleClickAdd() {
    setState(state + 1);
  }
  function handleClickSubtract() {
    setState(state - 1);
  }
  return (
    <div className={styles.paderborn}>
      <button onClick={handleClickSubtract} className={styles.paderbornButton}>
        -
      </button>
      {state}
      <button onClick={handleClickAdd} className={styles.paderbornButton}>
        +
      </button>
    </div>
  );
}
