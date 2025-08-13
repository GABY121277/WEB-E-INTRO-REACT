const Home = ({ user, logout }) => {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Bienvenido a Twitter</h1>
      {user ? (
        <div>
          <p>Hola, {user.username}!</p>
          <button onClick={logout} style={{ padding: "0.5rem", marginTop: "0.5rem" }}>
            Cerrar sesión
          </button>
        </div>
      ) : (
        <p>Por favor inicia sesión para publicar y ver tu perfil.</p>
      )}
      <div style={{ marginTop: "1rem" }}>
        {/* Aquí podrías mostrar tweets si el usuario está autenticado */}
        {user && <p>📢 ¡Aquí iría tu timeline de tweets!</p>}
      </div>
    </div>
  );
};

export default Home;
