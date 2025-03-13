// 'use client'
// import React, { useState } from "react";
// import styles from "./page.module.css";
// import CurrencyInput from "@/components/CurrencyInput/CurrencyInput";
// import Keypad from "@/components/Keypad/Keypad";
// import SwapIcon from "@/components/SwapIcon/SwapIcon";

// const Page = () => {
//   const [amount, setAmount] = useState("");
//   const [fromCurrency, setFromCurrency] = useState("USD");
//   const [toCurrency, setToCurrency] = useState("VND");
//   const [convertedAmount, setConvertedAmount] = useState("0.00");

//   const handleKeypadClick = (value) => {
//     if (value === "C") {
//       setAmount("");
//       setConvertedAmount("0.00");
//     } else if (value === "←") {
//       setAmount((prev) => prev.slice(0, -1));
//     } else {
//       setAmount((prev) => prev + value);
//     }
//   };

//   const swapCurrencies = () => {
//     setFromCurrency(toCurrency);
//     setToCurrency(fromCurrency);
//   };

//   // Function to fetch exchange rate and convert currency
//   const convertCurrency = async () => {
//     if (!amount || isNaN(parseFloat(amount))) {
//       alert("Please enter a valid amount!");
//       return;
//     }

//     try {
//       const response = await fetch(
//         `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
//       );

//       if (!response.ok) {
//         throw new Error("Failed to fetch exchange rates.");
//       }

//       const data = await response.json();
//       const rate = data.rates?.[toCurrency];

//       if (!rate) {
//         alert("Exchange rate not available for this currency pair.");
//         return;
//       }

//       const result = (parseFloat(amount) * rate).toFixed(2);
//       setConvertedAmount(result);
//     } catch (error) {
//       console.error("Error fetching exchange rates:", error);
//       alert("Error fetching exchange rates. Please try again later.");
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Kurrency</h1>
//       <div className={styles.currencyContainer}>
//         <CurrencyInput 
//           currency={fromCurrency} 
//           setCurrency={setFromCurrency} 
//           amount={amount} 
//         />
//         <SwapIcon onClick={swapCurrencies} />
//         <CurrencyInput 
//           currency={toCurrency} 
//           setCurrency={setToCurrency} 
//           amount={convertedAmount} 
//         />
//       </div>
//       <button className={styles.convertButton} onClick={convertCurrency}>
//         Convert
//       </button>
//       <Keypad onKeypadClick={handleKeypadClick} />
//     </div>
//   );
// };

// export default Page;




import GetStarted from "./GetStarted/GetStarted";

export default function Home() {
  return <GetStarted />;
}
