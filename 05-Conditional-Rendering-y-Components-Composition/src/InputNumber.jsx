import React from "react";

export default function InputNumber({ value, onChange, onGuess, disabled }) {
  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Escribe un número"
        disabled={disabled}
      />
      <button onClick={onGuess} disabled={disabled}>
        Adivinar
      </button>
    </div>
  );
}

