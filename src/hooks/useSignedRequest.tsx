import Axios from "axios";
import { getDomain } from "../util/env";
import { getToken } from "../util/jwt";

export const useSignedRequest = (
  method: string,
  route: string,
  body?: object
) => {
  const url = `${getDomain()}${route}`;
  const config = { headers: { Authorization: `Bearer ${getToken()}` } };
  switch (method) {
    case "GET":
      return async () => await Axios.get(url, config);
      break;
    case "POST":
      return async () => await Axios.post(url, body, config);
      break;
    case "PATCH":
      return async () => await Axios.patch(url, body, config);
    case "DELETE":
      return async () => await Axios.delete(url, config);
    default:
      break;
  }
};
