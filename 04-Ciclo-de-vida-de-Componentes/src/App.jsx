import React, { useState, useEffect, useMemo } from 'react';
import Planeta from './Planeta';

function App() {
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState('En órbita');
  const [planetasVisitados, setPlanetasVisitados] = useState([]);

  useEffect(() => {
    console.log('¡El panel de control está listo!');

    const intervalo = setInterval(() => {
      setDistancia((d) => d + 10);
      setCombustible((c) => (c > 0 ? c - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(intervalo);
      console.log('El panel de control se ha apagado.');
    };
  }, []);

  useEffect(() => {
    console.log('¡Combustible actualizado!', combustible);
  }, [combustible]);

  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`;
  }, [estadoNave]);

  const aterrizar = () => {
    setEstadoNave('Aterrizando');
    // Añadimos planeta simulado con nombre único
    setPlanetasVisitados((prev) => [
      ...prev,
      `Planeta ${prev.length + 1} - ${new Date().toLocaleTimeString()}`,
    ]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Panel de Control - Explorador Espacial</h1>
      <p>Distancia recorrida: {distancia} km</p>
      <p>Combustible restante: {combustible}%</p>
      <p>{mensajeEstado}</p>
      <button onClick={aterrizar} disabled={combustible === 0}>
        Aterrizar
      </button>

      <h2>Planetas Visitados</h2>
      {planetasVisitados.length === 0 && <p>No se ha aterrizado en ningún planeta.</p>}
      <ul>
        {planetasVisitados.map((planeta, index) => (
          <li key={index}>
            <Planeta nombre={planeta} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

