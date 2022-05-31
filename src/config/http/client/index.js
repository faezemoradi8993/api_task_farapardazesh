import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const client = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "X-Client-Version": `${process.env.APP_VER}`,
    "Content-Type": "application/json"
  }
});

export default client;
