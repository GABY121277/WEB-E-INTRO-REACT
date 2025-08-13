import { useParams } from 'react-router-dom';

// Mismos datos para simular la consulta por ID
const citasEjemplo = [
  { id: 1, paciente: 'Juan Pérez', fecha: '2025-08-15', hora: '10:00', motivo: 'Consulta general' },
  { id: 2, paciente: 'María Gómez', fecha: '2025-08-16', hora: '14:00', motivo: 'Revisión cardiológica' },
  { id: 3, paciente: 'Carlos Ruiz', fecha: '2025-08-17', hora: '09:30', motivo: 'Control diabetes' },
];

function CitaDetalle() {
  const { id } = useParams();
  const cita = citasEjemplo.find(c => c.id === Number(id));

  if (!cita) {
    return (
      <div>
        <h2>Cita no encontrada</h2>
        <p>No existe una cita con el ID {id}.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Detalles de la Cita</h2>
      <p><strong>ID:</strong> {cita.id}</p>
      <p><strong>Paciente:</strong> {cita.paciente}</p>
      <p><strong>Fecha:</strong> {cita.fecha}</p>
      <p><strong>Hora:</strong> {cita.hora}</p>
      <p><strong>Motivo:</strong> {cita.motivo}</p>
    </div>
  );
}

export default CitaDetalle;
