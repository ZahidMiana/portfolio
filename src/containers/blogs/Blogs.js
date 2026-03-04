import React from "react";
import "./Blog.css";
import BlogCard from "../../components/blogCard/BlogCard";
import { blogSection } from "../../portfolio";

export default function Blogs() {
  if (!blogSection.blogs || blogSection.blogs.length === 0) {
    return null;
  }
  return (
    <div className="main" id="blogs">
      <div className="blog-main-div">
        <div className="blog-text-div">
          {blogSection.blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}
