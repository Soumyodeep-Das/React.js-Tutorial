import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from '../Apis';
import "./Post.css";  // Assuming you will add styles here

const Post = () => {
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    getPostById(params.id).then((data) => {
      setPostData(data);
      setLoading(false);  // Stop loading once data is fetched
    });
  }, [params.id]);

  if (loading) {
    return (
      <div className="loading-container">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="post-container">
      <h1 className="post-title">{postData.title}</h1>
      <p className="post-body">{postData.body}</p>
    </div>
  );
};

export default Post;
