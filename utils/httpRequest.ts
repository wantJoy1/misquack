import { Endpoint } from "./Endpoint";
import { accessToken } from "./accessToken";

export const baseUrl = "http://192.168.13.101:30100/api";

type RequestParams = {
  [key: string]: string;
};

export const createRequestBody = (params?: RequestParams) => {
  return {
    method: "POST",
    header: "Content-Type: application/json",
    i: accessToken,
    ...params,
  };
};

export const getUrl = (endpoint: Endpoint) => {
  return new URL(endpoint, baseUrl);
};
