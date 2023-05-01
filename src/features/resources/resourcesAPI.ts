import axios from "axios";

export function fetchResource() {
  return axios
    .get("https://engineering-task.elancoapps.com/api/resources")
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return [];
    });
}

export function fetchResourceData(resources: string | null) {
  return axios
    .get(`https://engineering-task.elancoapps.com/api/resources/${resources}`)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return [];
    });
}
