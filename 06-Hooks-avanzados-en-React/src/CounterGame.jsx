import React, { useReducer, useRef, useEffect, useCallback } from "react";

const initialState = { count: 0, history: [] };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
        history: [...state.history, `+1 (Nuevo valor: ${state.count + 1})`],
      };
    case "decrement":
      return {
        count: state.count - 1,
        history: [...state.history, `-1 (Nuevo valor: ${state.count - 1})`],
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

function CounterGame() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const incrementBtnRef = useRef(null);

  // Enfocar botón de incremento al cargar
  useEffect(() => {
    incrementBtnRef.current?.focus();
  }, []);

  // Optimizar funciones con useCallback
  const handleIncrement = useCallback(() => {
    dispatch({ type: "increment" });
  }, []);

  const handleDecrement = useCallback(() => {
    dispatch({ type: "decrement" });
  }, []);

  const handleReset = useCallback(() => {
    dispatch({ type: "reset" });
  }, []);

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}>
      <h2>Contador: {state.count}</h2>
      <button ref={incrementBtnRef} onClick={handleIncrement} style={{ marginRight: 8 }}>
        +
      </button>
      <button onClick={handleDecrement} style={{ marginRight: 8 }}>
        -
      </button>
      <button onClick={handleReset}>Reset</button>

      <h3>Historial de cambios:</h3>
      <ul>
        {state.history.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}

export default CounterGame;
