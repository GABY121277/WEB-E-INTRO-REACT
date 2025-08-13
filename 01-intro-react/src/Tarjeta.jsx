import './Tarjeta.css';

export const Card = ({ nombre, profesion, descripcion, direccion }) => {
  return (
    <div className="card">
      <img src={direccion} alt={nombre} className="card-img" />
      <div className="card-body">
        <h3>{nombre}</h3>
        <h5>{profesion}</h5>
        <p>{descripcion}</p>
      </div>
    </div>
  );
};
