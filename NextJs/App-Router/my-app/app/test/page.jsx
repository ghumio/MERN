"use client";
import React, { useState } from "react";

const testpage = () => {
  let [input, setInput] = useState("");
  let [result, setResult] = useState("");

  const generateImage = async () => {
    //     // const url = "https://google-translator9.p.rapidapi.com/v2";
    //     // const options = {
    //     //   method: "POST",
    //     //   headers: {
    //     //     "x-rapidapi-key": "a2e767b20dmshf4e0fc1eeb9f3d3p155ecdjsn0489136529e4",
    //     //     "x-rapidapi-host": "google-translator9.p.rapidapi.com",
    //     //     "Content-Type": "application/json",
    //     //   },
    //     //   body: JSON.stringify({
    //     //     q: input,
    //     //     source: "no",
    //     //     target: "en",
    //     //     format: "text",
    //     //   }),
    //     // };

    //     // try {
    //     //   const response = await fetch(url, options);
    //     //   const result = await response.json();
    //     //   console.log(result.data.translations[0].translatedText);
    //     //   setResult(result.data.translations[0].translatedText);
    //     // } catch (error) {
    //     //   console.error(error);
    //     // }
    const url = "https://ai-text-to-image-generator-api.p.rapidapi.com/3D";
    const options = {
      method: "POST",
      headers: {
        "x-rapidapi-key": "a2e767b20dmshf4e0fc1eeb9f3d3p155ecdjsn0489136529e4",
        "x-rapidapi-host": "ai-text-to-image-generator-api.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: input,
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        className="text-blue-500"
      />
      <button onClick={generateImage}>Generate</button>

      {/* {result && <h1>{result}</h1>} */}
    </div>
  );
};

export default testpage;
