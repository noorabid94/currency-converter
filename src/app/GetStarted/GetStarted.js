"use client";
import { useRouter } from "next/navigation";
import styles from "./GetStarted.module.css";

const GetStarted = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Currency</h1>
      <p className={styles.subtitle}>Easy Exchange</p>
      <button 
        className={styles.getStartedBtn} 
        onClick={() => router.push("/currency")}  
      >
        Get Started
      </button>
    </div>
  );
};

export default GetStarted;
