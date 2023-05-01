import axios from "axios";

export function fetchApplication() {
  return axios
    .get("https://engineering-task.elancoapps.com/api/applications")
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return [];
    });
}

export function fetchApplicationData(application: string | null) {
  return axios
    .get(
      `https://engineering-task.elancoapps.com/api/applications/${application}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      return [];
    });
}
