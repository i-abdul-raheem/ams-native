import axios from "axios";

const BASE_URL =
  process.env.REACT_APP_ENV === 'local'
    ? 'http://localhost:5000/api'
    : 'http://192.168.0.114:5000/api';

const postResponse = (res) => {
  localStorage.setItem("@boq-token", res?.data?.token);
  return res?.data;
};

const config = {
  BASE_URL,
  postResponse,
};

export default config;