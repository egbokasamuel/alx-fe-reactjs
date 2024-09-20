import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserData();
  };

  const fetchUserData = async () => {
    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=location:${location}+repos:>=${minRepos}`
      );
      setUserData(response.data.items);
    } catch (error) {
      setError("Error fetching user data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub Advanced User Search</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <label
            className="block text-gray-700 font-bold mb-1"
            htmlFor="location"
          >
            Location:
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            className="border rounded px-2 py-1"
          />
        </div>
        <div className="mb-2">
          <label
            className="block text-gray-700 font-bold mb-1"
            htmlFor="minRepos"
          >
            Minimum Repositories:
          </label>
          <input
            type="number"
            id="minRepos"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="Min Repos"
            className="border rounded px-2 py-1"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {userData && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Search Results:</h2>
          <ul>
            {userData.map((user) => (
              <li key={user.id} className="mb-2">
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  width={50}
                  className="rounded-full mr-2"
                />
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {user.login}
                </a>
                <p className="text-gray-600">{user.location}</p>
                <p className="text-gray-600">
                  {user.public_repos} Repositories
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
