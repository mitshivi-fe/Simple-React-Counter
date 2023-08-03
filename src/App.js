import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(1);
  const [factor, setFactor] = useState(1);
  function incCount() {
    setCount((prev) => prev + +factor);
  }

  function decCount() {
    setCount((prev) => prev - +factor);
  }

  function handleOnInpChange(event) {
    setFactor(() => event.target.value);
  }

  function resetState() {
    setCount(1);
    setFactor(1);
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Counter</h1>
      <div style={{ padding: '20px' }}>{count}</div>
      <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        <Button text="-" btnClickHandler={decCount} />
        <Button text="+" btnClickHandler={incCount} />
      </div>
      <IncDec handleOnChange={handleOnInpChange} val={factor} />
      <div style={{ padding: '20px' }}>
        <Button text="Reset" btnClickHandler={resetState} />
      </div>
    </div>
  );
}

function Button({ text, btnClickHandler }) {
  return <button onClick={btnClickHandler}>{text}</button>;
}

function IncDec({ handleOnChange, val }) {
  return (
    <div>
      <span>Increment/Decrement by</span>
      <input type="number" onChange={handleOnChange} value={val} />
    </div>
  );
}
