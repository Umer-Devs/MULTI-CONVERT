import  { useState, useEffect } from 'react';
import { MdCurrencyExchange } from "react-icons/md";


const Currency = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('PKR');
  const [amount, setAmount] = useState();
  const [conversionResult, setConversionResult] = useState(null);

  useEffect(() => {
    // Fetch currency data with flags
    async function fetchCurrencies() {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const countries = await response.json();
        
        // Extract currency codes and flags
        const currencyData = countries.flatMap((country) =>
          Object.entries(country.currencies || {}).map(([code, { name }]) => ({
            code,
            name,
            flag: country.flags ? country.flags.png : '',
          }))
        );

        setCurrencies(currencyData);
      } catch (error) {
        console.error('Error fetching currency data:', error);
      }
    }
    
    fetchCurrencies();
  }, []);

  const handleConvert = async () => {
    try {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      const data = await response.json();
      const rate = data.rates[toCurrency];
      setConversionResult((amount * rate).toFixed(2));
    } catch (error) {
      console.error('Error converting currency:', error);
    }
  };

  return (
    <div  >
      <div className='h-[20vh] w-full flex justify-center items-center'>
        <form>
          <input
            className='h-16 w-[460px] border rounded-lg px-8'
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter the Value'
          />
        </form>
      </div>
      <div className="h-[25vh] w-full flex">
        <div className="h-full w-[45%] flex justify-center items-center">
          <select
            className='h-16 w-[460px] rounded-lg px-8 border'
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            {currencies.map(({ code, name, flag }) => (
              <option key={code} value={code}>
                {flag && <img src={flag} alt={name} className="inline h-5 w-5 mr-2" />}
                {name} ({code})
              </option>
            ))}
          </select>
        </div>
        <div className="h-full w-[10%] flex justify-center items-center">
        <MdCurrencyExchange className='text-4xl' />
        </div>
        <div className="h-full w-[45%] flex justify-center items-center">
          <select
            className='h-16 w-[460px] rounded-lg px-8 border'
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            {currencies.map(({ code, name, flag }) => (
              <option key={code} value={code}>
                {flag && <img src={flag} alt={name} className="inline h-5 w-5 mr-2" />}
                {name} ({code})
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='h-[10vh] w-full flex justify-center items-center'>
      <button
          type="submit"
          className="shadow-[0px_4px_12px_0px_rgba(0,_0,_0,_0.1)] group relative inline-block overflow-hidden rounded border border-gray-100 bg-[transparent] px-20 text-lg py-4  font-medium text-slate-800 hover:text-violet-600 focus:outline-none focus:ring active:active:text-white"
          onClick={handleConvert}
        >
          <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-violet-600 transition-all duration-200 group-hover:w-full"></span>
          <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-violet-600 transition-all duration-200 group-hover:h-full"></span>
          <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-violet-600 transition-all duration-200 group-hover:w-full"></span>
          <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-violet-600 transition-all duration-200 group-hover:h-full"></span>
          Convert
        </button>
      </div>
      {conversionResult && (
        <div className='text-center text-2xl font-semibold m-5'>
          {amount} {fromCurrency} = {conversionResult} {toCurrency}
        </div>
      )}
    </div>
  );
};

export default Currency;
