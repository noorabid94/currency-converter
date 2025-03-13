import React from "react";
import styles from "./CurrencyInput.module.css";

const CurrencyInput = ({ currency, setCurrency, amount }) => {
  if (!setCurrency) {
    console.error("❌ setCurrency function is missing! Ensure it is passed as a prop.");
    return null;
  }

  const currencyOptions = [
    "AED", "AUD", "BRL", "CAD", "CHF", "CNY", "DKK", "EGP", "EUR", 
    "GBP", "HKD", "IDR", "INR", "JPY", "KRW", "MXN", "MYR", "NOK", 
    "NZD", "PHP", "PKR", "RUB", "SAR", "SEK", "SGD", "THB", "TRY", 
    "USD", "VND", "ZAR"
  ].sort(); // Sorting currencies alphabetically

  return (
    <div className={styles.inputContainer}>
      <select 
        value={currency || "USD"} 
        onChange={(e) => setCurrency(e.target.value)} 
        className={styles.currencySelect}
      >
        {currencyOptions.map((cur) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </select>

      <input 
        type="text" 
        value={amount || "0.00"} 
        readOnly 
        className={styles.inputField} 
      />
    </div>
  );
};

export default CurrencyInput;
