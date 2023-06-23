import axios from "axios";

axios.defaults.baseURL = "https://64145ef136020cecfda6b0f0.mockapi.io";

const fetchTweets = async () => {
  try {
    const { data } = await axios.get("/users");
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const API = {
  fetchTweets,
};
