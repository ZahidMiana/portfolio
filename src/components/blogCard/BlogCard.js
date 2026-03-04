import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";

export default function BlogCard({ blog }) {
  return (
    <div className="blog-card-wrapper">
      <div className="blog-container">
        <div className="blog-square">
          <div
            className="blog-card-cover"
            style={{
              background:
                blog.gradient ||
                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            }}
          >
            <span className="blog-card-cover-icon">
              {blog.icon || "\u270D\uFE0F"}
            </span>
          </div>
          <div className="blog-card-body">
            <div className="blog-meta">
              <span className="blog-date">{blog.date}</span>
              <span className="blog-dot">&middot;</span>
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
                Read More &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
