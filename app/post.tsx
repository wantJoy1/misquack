"use client";
import { createRequest, getUrl } from "@/utils/httpRequest";
import { useState } from "react";

export default function Post() {
  const [message, setMessage] = useState("");
  return (
    <>
      <button
        className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
        type="button"
        onClick={sendPost(message)}
      >
        Post
      </button>
      <input
        type="text"
        placeholder="What's happening?"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></input>
    </>
  );
}

const sendPost = async (message: string) => {
  const endpoint = getUrl("notes/create");
  const params = createRequest({ text: message });
  const response = await fetch(endpoint, params);
  if (response.ok) {
    return response.json();
  }
  throw new Error("Network response was not ok.");
};
