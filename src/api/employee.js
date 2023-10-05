import axios from "axios";
import config from "./config";

const url = config.BASE_URL;

export const getEmployee = (id) => {
  return axios
    .get(url + `/employee/${id}`)
    .then(res => {
      return res?.data;
    })
    .catch(err => {
      return err;
    });
};