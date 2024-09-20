import axios from "axios";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};

export const fetchUsers = async (query) => {
  const url = `https://api.github.com/search/users?q=${query}`;
  const response = await axios.get(url);
  return response.data.items; // return user list
};
