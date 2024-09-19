import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      if (response.status === 200) {
        setUserData(response.data);
      } else {
        setError("Looks like we can't find the user");
      }
    } catch (error) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>

      {/* Search form */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional Rendering: Loading, Error, and User Data */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.login} width={100} />
          <h2>{userData.login}</h2>
          <p>
            <a
              href={userData.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit GitHub Profile
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;
