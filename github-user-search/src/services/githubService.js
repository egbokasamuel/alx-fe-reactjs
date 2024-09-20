import axios from "axios";

// Function to fetch GitHub users based on a search query
export const fetchUserData = async (username, location, minRepos) => {
  try {
    // Construct the query for the GitHub Search API
    let query = `q=${username}`;

    // Add location to the query if it's provided
    if (location) {
      query += `+location:${location}`;
    }

    // Add minimum repository count to the query if it's provided
    if (minRepos) {
      query += `+repos:>${minRepos}`;
    }

    // GitHub Search API URL
    const url = `https://api.github.com/search/users?q{query}`;

    // Fetch data from GitHub API using axios
    const response = await axios.get(url);

    // Return the list of users matching the search criteria
    return response.data.items;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
