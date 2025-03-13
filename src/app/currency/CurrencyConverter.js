"use client";
import React, { useState } from "react";
import styles from "@/app/currency/CurrencyConverter.module.css";
import CurrencyInput from "@/components/CurrencyInput/CurrencyInput";
import Keypad from "@/components/Keypad/Keypad"; 
import SwapIcon from "@/components/SwapIcon/SwapIcon";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("VND");
  const [convertedAmount, setConvertedAmount] = useState("0.00");

  const fetchConversionRate = async () => {
    try {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      const data = await response.json();
      return data.rates[toCurrency] || null;
    } catch (error) {
      console.error("Error fetching conversion rate:", error);
      return null;
    }
  };

  const handleConvert = async () => {
    if (!amount || isNaN(parseFloat(amount))) return;

    const rate = await fetchConversionRate();
    if (rate !== null) {
      const result = (parseFloat(amount) * rate).toFixed(2);
      setConvertedAmount(result);
    } else {
      setConvertedAmount("Error");
    }
  };

  const handleSwap = async () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertedAmount("0.00");

    if (amount) {
      setTimeout(handleConvert, 100); // ✅ Ensures conversion updates after swap
    }
  };

  const handleKeypadClick = (btn) => {  
    if (btn === "C") {
      setAmount("");
    } else if (btn === "←") {
      setAmount(amount.slice(0, -1)); 
    } else if (!isNaN(btn) || btn === ".") {
      setAmount((prev) => prev + btn); 
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Currency Converter</h1>
      <div className={styles.currencyContainer}>
        
        <CurrencyInput currency={fromCurrency} setCurrency={setFromCurrency} amount={amount} />
        
        <SwapIcon onClick={handleSwap} />
        
        <CurrencyInput currency={toCurrency} setCurrency={setToCurrency} amount={convertedAmount} />
      </div>

      <Keypad onKeypadClick={handleKeypadClick} />

      <button className={styles.convertButton} onClick={handleConvert}>
        Convert
      </button>
    </div>
  );
};

export default CurrencyConverter;
