// import res from "express/lib/response";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DataFetch = () => {
  let [posts, setPosts] = useState([]);

  let [limit, setLimit] = useState(20);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((result) => setPosts(result.slice(0, limit)))
      .catch((error) => console.log(error));
  }, [limit]);

  return (
    <>
      {posts.map((post, i) => {
        return (
          <li key={i}>
            <Link to={`/data/${post.id}`}>{post.title}</Link>
          </li>
        );
      })}
      {posts.length < 100 && (
        <button
          className="bg-amber-200 px-3 m-2 py-1 rounded-md text-lg"
          onClick={() => setLimit(limit + 5)}
        >
          Show More
        </button>
      )}
      <br />
      {posts.length > 0 && (
        <button
          className="bg-amber-200 px-3 m-2 py-1 rounded-md text-lg"
          onClick={() => setLimit(limit - 5)}
        >
          Show Less
        </button>
      )}
    </>
  );
};

export default DataFetch;
