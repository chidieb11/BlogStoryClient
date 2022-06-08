import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogDetails from "./components/BlogDetails";
import AddBlogs from "./components/AddBlogs";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="auth" element={<Auth />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="myBlogPosts" element={<UserBlogs />} />
        <Route path="myBlogPost/:id" element={<BlogDetails />} />
        <Route path="blogs/add" element={<AddBlogs />} />
      </Routes>
    </>
  );
};

export default App;
