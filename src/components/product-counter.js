import React, { useState } from "react";
import "./product-counter.scss";

export function ProductCounter({ value, onValueChange, maxValue }) {
  const [count, setValue] = useState(1);

  function onCounterButtonClick(newValue) {
    setValue(newValue);
    onValueChange && onValueChange(newValue);
  }

  return (
    <div className="product-counter">
      <button
        disabled={value === 0}
        aria-label="Decrement value"
        onClick={() => {
          onCounterButtonClick(value !== undefined ? value - 1 : count - 1);
        }}
      >
        -
      </button>
      <span className="product-counter__value">
        {value !== undefined ? value : count}
      </span>
      <button
        disabled={value === maxValue}
        aria-label="Increment value"
        onClick={() => {
          onCounterButtonClick(value !== undefined ? value + 1 : count + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
