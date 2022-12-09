import Axios from "axios";

const axios = Axios.create({
  baseURL:
    process.env.REACT_APP_AXIOS === "development"
      ? "http://localhost:3010/api"
      : "/api",
  timeout: 50000,
});

export default axios;
