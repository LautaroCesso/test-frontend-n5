import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import React, { useState } from "react";
import "./product-counter.scss";

export default function ProductCounter({ value, onValueChange, maxValue }) {
  const [count, setValue] = useState(1);

  function onCounterButtonClick(newValue) {
    setValue(newValue);
    onValueChange && onValueChange(newValue);
  }

  return (
    <div className="product-counter">
      <IconButton
        size="xs"
        disabled={value === 0}
        aria-label="Decrement value"
        onClick={() => {
          onCounterButtonClick(value !== undefined ? value - 1 : count - 1);
        }}
        variant="ghost"
        colorScheme="orange"
        icon={<MinusIcon />}
      />
      <span className="product-counter__value">
        {value !== undefined ? value : count}
      </span>
      <IconButton
        size="xs"
        disabled={value === maxValue}
        aria-label="Increment value"
        onClick={() => {
          onCounterButtonClick(value !== undefined ? value + 1 : count + 1);
        }}
        variant="ghost"
        colorScheme="orange"
        icon={<AddIcon />}
      />
    </div>
  );
}
