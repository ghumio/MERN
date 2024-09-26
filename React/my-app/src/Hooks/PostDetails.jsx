import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  // const params = useParams()
  // const id = params.id

  const { id } = useParams();

  let [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => setPost(response.data));
  }, []);

  return (
    <div>
      <h1>{post.id}</h1>
      <h1>{post.title}</h1>
      <h1>{post.body}</h1>
    </div>
  );
};

export default PostDetails;
