import axios from "axios";
import config from "./config";

const setUp = {
  getMethod(endpoint) {
    return axios.get(config.rootUrl + endpoint).then((response) => {
      return response.data;
    });
  },
};

export default setUp;
