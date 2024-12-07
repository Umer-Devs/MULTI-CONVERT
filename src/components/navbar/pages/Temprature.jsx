import {  useState } from 'react';
import { FaTemperatureHigh } from "react-icons/fa";

const TemperatureConverter = () => {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('Celsius');
  const [toUnit, setToUnit] = useState('Fahrenheit');
  const [result, setResult] = useState(null);

  const units = ['Celsius', 'Fahrenheit', 'Kelvin', 'Rankine', 'Réaumur'];

  const convertTemperature = (value, fromUnit, toUnit) => {
    let celsius;

    // Convert input value to Celsius
    switch (fromUnit) {
      case 'Celsius':
        celsius = value;
        break;
      case 'Fahrenheit':
        celsius = (value - 32) * 5 / 9;
        break;
      case 'Kelvin':
        celsius = value - 273.15;
        break;
      case 'Rankine':
        celsius = (value - 491.67) * 5 / 9;
        break;
      case 'Réaumur':
        celsius = value * 5 / 4;
        break;
      default:
        celsius = value;
    }

   
    switch (toUnit) {
      case 'Celsius':
        return celsius;
      case 'Fahrenheit':
        return (celsius * 9 / 5) + 32;
      case 'Kelvin':
        return celsius + 273.15;
      case 'Rankine':
        return (celsius + 273.15) * 9 / 5;
      case 'Réaumur':
        return celsius * 4 / 5;
      default:
        return celsius;
    }
  };

  const handleConvert = (e) => {
    e.preventDefault();
    if (value === '') {
      alert("Please enter a value to convert.");
      return;
    }
    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) {
      alert("Please enter a valid number.");
      return;
    }
    const convertedValue = convertTemperature(numericValue, fromUnit, toUnit);
    setResult(convertedValue.toFixed(2));
  };

  return (
    <div>
      <div className='h-[20vh] w-full flex justify-center items-center'>
        <form onSubmit={handleConvert}>
          <input
            className='h-16 w-[460px] border rounded-lg px-8'
            type="number"
            placeholder='Enter the Value'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
      </div>
      <div className="h-[25vh] w-full flex">
        <div className="h-full w-[47%] flex justify-center items-center">
          <select
            className='h-16 w-[460px] border rounded-lg px-8'
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
          >
            {units.map(unit => (
              <option key={unit} className='text-lg font-semibold' value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>
        <div className="h-full w-[10%] flex justify-center items-center "> <FaTemperatureHigh className='text-4xl' /> </div>
        <div className="h-full w-[47%] flex justify-center items-center">
          <select
            className='h-16 w-[460px] border rounded-lg px-8'
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
          >
            {units.map(unit => (
              <option key={unit} className='text-lg font-semibold' value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className='h-[20vh] w-full flex justify-center items-center'>
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
      <div className='h-[20vh] w-full flex justify-center items-center'>
        {result !== null && (
          <div className="h-[50%] w-[40%]  text-center content-center">
            <h2 className='text-lg'>Converted Value:</h2>
            <h3 className='text-xl'>{result} {toUnit}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemperatureConverter;
