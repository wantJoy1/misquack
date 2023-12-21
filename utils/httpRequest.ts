import { Endpoint } from "./Endpoint";
import { accessToken } from "./accessToken";

export const base = "http://192.168.13.101:30100";

type RequestBodyParams = {
  [key: string]: string;
};

export const createRequest = (bodyParams?: RequestBodyParams) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...bodyParams,
      i: accessToken,
    }),
  };
};

export const getUrl = (endpoint: Endpoint) => {
  return new URL("api/" + endpoint, base);
};
