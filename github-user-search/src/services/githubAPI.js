import axios from "axios";
const apiKey = process.env.REACT_APP_GITHUB_API_KEY;

// This function will search GitHub users by their username
export const searchUsers = (username) => {
  return axios.get(`https://api.github.com/search/users?q=${username}`);
};
