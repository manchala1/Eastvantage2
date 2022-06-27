const axios = require("axios");

export function getUrl(url) {
  return axios.get(url);
}
