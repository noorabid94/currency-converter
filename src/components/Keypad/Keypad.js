"use client";
import React from "react";
import styles from "./Keypad.module.css"; // Correct file import

const Keypad = ({ onKeypadClick }) => {
  if (!onKeypadClick) {
    return <div className={styles.error}>Keypad not available</div>;
  }
  

  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "←", "C"];

  return (
    <div className={styles.keypad}>
      {buttons.map((btn) => (
        <button key={btn} onClick={() => onKeypadClick(btn)} className={styles.key}>
          {btn}
        </button>
      ))}
    </div>
  );
};

export default Keypad;
