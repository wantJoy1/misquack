"use client";

import { useState } from "react";
import { base, createRequest, getUrl } from "../utils/httpRequest";

export default function ShowAccount() {
  // const endpoint = getUrl("i");
  const endpoint = "http://192.168.13.101:30100/i";
  const params = createRequest();

  const [account, setAccount] = useState("");

  const onButtonClick = () => {
    fetch(endpoint, params)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((resJson) => {
        console.log(resJson);
        setAccount(JSON.stringify(resJson, null, 2));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <button
        className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
        onClick={onButtonClick}
      >
        ShowAccount
      </button>
      <p>{account}</p>
    </div>
  );
}
