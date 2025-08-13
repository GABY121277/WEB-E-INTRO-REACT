import { Link } from 'react-router-dom';

// Datos de ejemplo de citas
const citasEjemplo = [
  { id: 1, paciente: 'Juan Pérez', fecha: '2025-08-15', hora: '10:00' },
  { id: 2, paciente: 'María Gómez', fecha: '2025-08-16', hora: '14:00' },
  { id: 3, paciente: 'Carlos Ruiz', fecha: '2025-08-17', hora: '09:30' },
];

function Citas() {
  return (
    <div>
      <h2>Lista de Citas</h2>
      <ul>
        {citasEjemplo.map(cita => (
          <li key={cita.id}>
            <Link to={`/cita/${cita.id}`}>
              Cita con {cita.paciente} - {cita.fecha} a las {cita.hora}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Citas;
