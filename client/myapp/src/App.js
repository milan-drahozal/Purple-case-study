import { useEffect, useState } from "react";
import './App.css';
import CurrencyRow from './components/CurrencyInput';

// const BASE_URL = "http://data.fixer.io/api/latest?access_key=71eb635fbf884376646c0731ed9aa43e"

function App() {

  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('EUR');
  const [rates, setRates] = useState([]);

  useEffect(() => {
   fetch('/api/')
      .then(res => res.json())
      .then(data => {
        setRates(data.rates);
      })
  }, [])

  useEffect(() => {
    if (!!rates) {
      function init() {
        handleAmount1Change(1);
      }
      init();
    }
    // eslint-disable-next-line
  }, [rates]);

  function format(number) {
    return number.toFixed(4);
  }

  function handleAmount1Change(amount1) {
    if(rates[currency1] === undefined && rates[currency2] === undefined) {
      window.setTimeout(handleAmount1Change, 100);
   } else {
     setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
     setAmount1(amount1);
   }
  }
  
  function handleCurrency1Change(currency1) {
    setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
    setCurrency2(currency2);
  }

  return (
    <>
      <h1>Convert Currency</h1>
      <CurrencyRow 
        onAmountChange={handleAmount1Change} 
        onCurrencyChange={handleCurrency1Change} 
        currencies={Object.keys(rates)} 
        amount={amount1} 
        currency={currency1} />
      <div className="equals">=</div>
      <CurrencyRow 
        onAmountChange={handleAmount2Change} 
        onCurrencyChange={handleCurrency2Change} 
        currencies={Object.keys(rates)} 
        amount={amount2} 
        currency={currency2} />
    </>
  );
}

export default App;
