import React from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const handleSearch = (username) => {
    console.log("Search for:", username);
    // You can call your GitHub API search function here
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
}

export default App;
