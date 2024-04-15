import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GitHubUser from "./GitHubUser"; // Importa il componente per mostrare i dettagli dell'utente

function GitHubUserList() {
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  async function fetchUser() {
    try {
      const response = await fetch("https://api.github.com/users");
      const json = await response.json();
      setUsers(json);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  const handleUserClick = (username) => {
    setSelectedUser(username);
  };

  return (
    <div>
      <h1>Lista degli utenti GitHub</h1>
      {error && <p>Si è verificato un errore: {error.message}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to="#" onClick={() => handleUserClick(user.login)}>
              {user.login}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        {selectedUser ? (
          <div>
            <h2>Dettagli dell'utente selezionato</h2>
            <GitHubUser username={selectedUser} />
          </div>
        ) : (
          <div>
            <h1>Seleziona un utente per favore</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default GitHubUserList;
