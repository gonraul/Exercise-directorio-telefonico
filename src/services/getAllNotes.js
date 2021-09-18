import axios from "axios";

export const getAllNotes = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      const { data } = response;
      return data;
    });
};
