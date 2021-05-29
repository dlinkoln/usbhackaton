import axios from "axios";

const BASE_URL = "http://localhost:8000";

export { getPublicNotes };

function getPublicNotes() {
  const url = `${BASE_URL}/api/public-notes`;
  return axios.get(url)
    .then((response) => {
      return response.data;
    });
}

