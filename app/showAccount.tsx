"use client";

import { useState } from "react";
import { baseUrl, createRequestBody, getUrl } from "../utils/httpRequest";

export default function ShowAccount() {
  const endpoint = getUrl("i");
  const params = createRequestBody();

  const [account, setAccount] = useState("");

  const onButtonClick = () => {
    console.log(endpoint.toString());
    console.log(params);

    fetch(endpoint.toString(), params)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((resJson) => {
        console.log(resJson);
        setAccount(JSON.stringify(resJson));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <button
        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
        onClick={onButtonClick}
      >
        ShowAccount
      </button>
      <p>{account}</p>
    </div>
  );
}
