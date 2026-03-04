import React from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { blogSection } from "../../portfolio.js";
import "./BlogPostStyles.css";

function BlogPost(props) {
  const { id } = useParams();
  const theme = props.theme;

  if (!blogSection.blogs || blogSection.blogs.length === 0) {
    return <Redirect to="/blogs" />;
  }

  const blog = blogSection.blogs.find(
    (b) => b.url === "/blog/" + id || b.id.toString() === id
  );

  if (!blog) {
    return <Redirect to="/blogs" />;
  }

  function renderContent(content) {
    if (!content) return null;
    var lines = content.split("\n");
    var result = [];
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      if (line.startsWith("# ")) {
        result.push(<h1 key={i} className="blog-content-h1">{line.substring(2)}</h1>);
      } else if (line.startsWith("## ")) {
        result.push(<h2 key={i} className="blog-content-h2">{line.substring(3)}</h2>);
      } else if (line.startsWith("### ")) {
        result.push(<h3 key={i} className="blog-content-h3">{line.substring(4)}</h3>);
      } else if (line.startsWith("- ")) {
        result.push(<li key={i} className="blog-list-item">{line.substring(2)}</li>);
      } else if (/^\d+\.\s/.test(line)) {
        result.push(<li key={i} className="blog-list-item-numbered">{line.replace(/^\d+\.\s/, "")}</li>);
      } else if (line.trim() === "") {
        result.push(<br key={i} />);
      } else {
        result.push(<p key={i} className="blog-content-p">{line}</p>);
      }
    }
    return result;
  }

  return (
    <div className="blog-post-main">
      <Header theme={theme} />
      <article className="blog-post-container">
        <div className="blog-post-header">
          <div className="blog-post-meta">
            <span className="blog-post-date">{blog.date}</span>
            <span className="blog-post-separator">&#183;</span>
            <span className="blog-post-read-time">{blog.readTime}</span>
          </div>
          <h1 className="blog-post-title" style={{ color: theme.text }}>
            {blog.title}
          </h1>
          <p className="blog-post-description" style={{ color: theme.secondaryText }}>
            {blog.description}
          </p>
          <div className="blog-post-tags">
            {blog.tags &&
              blog.tags.map(function (tag, index) {
                return (
                  <span key={index} className="blog-post-tag">
                    {tag}
                  </span>
                );
              })}
          </div>
        </div>
        <div className="blog-post-divider"></div>
        <div className="blog-post-content" style={{ color: theme.text }}>
          {renderContent(blog.content)}
        </div>
        <div className="blog-post-footer-nav">
          <Link to="/blogs" className="back-to-blogs-btn" style={{ backgroundColor: theme.headerColor }}>
            &#8592; Back to All Blogs
          </Link>
        </div>
      </article>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}

export default BlogPost;
