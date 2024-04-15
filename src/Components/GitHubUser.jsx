import { useEffect, useState } from "react";

function GitHubUser({ username }) {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  async function fetchGitHubUser(username) {
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      setError(error);
      setData(null);
    }
  }

  useEffect(() => {
    fetchGitHubUser(username);
  }, [username]);

  return (
    <div>
      {error && <p>Si è verificato un errore: {error.message}</p>}
      {data && (
        <>
          <h1>{data.name}</h1>
          <p>{data.login}</p>
          <img src={data.avatar_url} alt="Avatar" />
        </>
      )}
    </div>
  );
}

export default GitHubUser;
