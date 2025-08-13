import React, { useState, useEffect } from "react";
import InputNumber from "./InputNumber";
import Message from "./Message";
import RestartButton from "./RestartButton";

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

export default function Game() {
  const [targetNumber, setTargetNumber] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setTargetNumber(getRandomNumber());
  }, []);

  const handleGuess = () => {
    const guess = Number(inputValue);
    if (isNaN(guess) || guess < 1 || guess > 100) {
      setMessage("Por favor ingresa un número válido entre 1 y 100.");
      return;
    }

    if (guess === targetNumber) {
      setMessage("¡Correcto! 🎉");
      setGameOver(true);
    } else if (guess < targetNumber) {
      setMessage("El número es mayor.");
    } else {
      setMessage("El número es menor.");
    }
  };

  const handleRestart = () => {
    setTargetNumber(getRandomNumber());
    setInputValue("");
    setMessage("");
    setGameOver(false);
  };

  return (
    <div>
      <h1>Adivina el Número</h1>
      <InputNumber
        value={inputValue}
        onChange={setInputValue}
        onGuess={handleGuess}
        disabled={gameOver}
      />
      <Message message={message} />
      {gameOver && <RestartButton onRestart={handleRestart} />}
    </div>
  );
}

