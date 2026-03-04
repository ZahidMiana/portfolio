import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";

export default function BlogCard({ blog }) {
  return (
    <div className="blog-card-wrapper">
      <div className="blog-container">
        <div className="blog-square">
          <div className="blog-card-image-wrapper">
            <img src={blog.image} alt={blog.title} className="blog-card-image" />
          </div>
          <div className="blog-card-body">
            <div className="blog-meta">
              <span className="blog-date">{blog.date}</span>
              <span className="blog-dot">·</span>
              <span className="blog-read-time">{blog.readTime}</span>
            </div>
            <h3 className="blog-card-title">{blog.title}</h3>
            <p className="blog-card-subtitle">{blog.description}</p>
            <div className="blog-card-bottom">
              <div className="blog-tags">
                {blog.tags &&
                  blog.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="blog-tag">
                      {tag}
                    </span>
                  ))}
              </div>
              <Link to={blog.url} className="blog-read-btn">
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
