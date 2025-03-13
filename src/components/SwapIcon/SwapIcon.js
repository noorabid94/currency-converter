import React from "react";
import styles from "./SwapIcon.module.css";

const SwapIcon = ({ onClick }) => {
  return (
    <button 
      className={styles.swapIcon} 
      onClick={() => {
        console.log("Swap icon clicked!"); // ✅ Debugging
        if (onClick) {
          requestAnimationFrame(() => onClick()); // ✅ Prevents unnecessary re-renders
        }
      }} 
      aria-label="Swap currencies"
    >
      ↕ {/* ✅ Vertical Swap Icon */}
    </button>
  );
};

export default SwapIcon;
