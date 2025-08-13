import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      alert("Por favor, ingresa un nombre de usuario");
      return;
    }
    onLogin(username);
    navigate("/");
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "0.5rem", marginRight: "0.5rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem" }}>
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
