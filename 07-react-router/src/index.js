import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import Home from "./Routes/Home";
import Post from "./Routes/Post"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Post />} />
    </Routes>
  </BrowserRouter>
);
