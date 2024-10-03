import React, { useEffect, useState } from "react";
import { getAllPost } from "../Apis";
import { NavLink } from "react-router-dom";
import "./Home.css";  // Assuming the CSS is stored in Home.css

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPost().then((posts) => setPosts(posts));
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Blogging App using ReactJS</h1>
      <div className="posts-list">
        {posts.map((post) => (
          <NavLink key={post.id} className="post-link" to={`/${post.id}`}>
            {`${post.id}. ${post.title}`}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Home;
