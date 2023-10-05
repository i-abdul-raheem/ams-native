import axios from "axios";
import config from "./config";

const url = config.BASE_URL;

export const login = (values) => {
  return axios
    .post(url + '/login', values)
    .then(res => {
      return res?.data;
    })
    .catch(err => {
      return err;
    });
};