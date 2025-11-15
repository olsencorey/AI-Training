const { useState, useMemo } = React;

export function CurrencyConverter() {
  const rates = {
    USD: { USD: 1, EUR: 0.93, GBP: 0.81, JPY: 151.23 },
    EUR: { USD: 1.08, EUR: 1, GBP: 0.87, JPY: 162.55 },
    GBP: { USD: 1.24, EUR: 1.15, GBP: 1, JPY: 186.79 },
    JPY: { USD: 0.0066, EUR: 0.0062, GBP: 0.0054, JPY: 1 },
  };

  const currencyCodes = ["USD", "EUR", "GBP", "JPY"];
  const [amount, setAmount] = useState(1);
  const [fromVal, setFromVal] = useState("USD");
  const [toVal, setToVal] = useState("EUR");

  // Memoize conversions
  const conversions = useMemo(() => {
    const num = parseFloat(amount);
    const result = {};
    currencyCodes.forEach(code => {
      result[code] = (!isNaN(num) && num !== 0)
        ? (num * rates[fromVal][code]).toFixed(2)
        : "";
    });
    return result;
  }, [amount, fromVal]);

  const converted = conversions[toVal]
    ? `${conversions[toVal]} ${toVal}`
    : "Converted amount here"; // For initial empty state

  return (
    <div className="currency-converter-container">
      <h2 className="currency-converter-title">Currency Converter</h2>
      <div className="currency-converter-controls">
        <input 
          className="input-green"
          type="number"
          min="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount" 
        />
        <select 
          className="select-green"
          value={fromVal}
          onChange={(e) => setFromVal(e.target.value)}
        >
          {currencyCodes.map(code => (
            <option key={code} value={code}>{code}</option>
          ))} 
        </select>
        <span className="arrow-separator">➔</span>
        <select 
          className="select-red"
          value={toVal}
          onChange={(e) => setToVal(e.target.value)} 
        >
          {currencyCodes.map(code => (
            <option key={code} value={code}>{code}</option>
          ))} 
        </select>
      </div>
      <p className="converted-amount">{converted}</p>
    </div>
  );
}
