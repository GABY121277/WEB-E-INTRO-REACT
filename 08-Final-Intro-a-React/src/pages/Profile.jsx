const Profile = ({ user }) => {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Perfil</h1>
      {user ? (
        <p>Nombre de usuario: {user.username}</p>
      ) : (
        <p>No hay información de usuario.</p>
      )}
    </div>
  );
};

export default Profile;
