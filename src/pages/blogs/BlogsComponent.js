import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Blogs from "../../containers/blogs/Blogs";
import { blogSection } from "../../portfolio.js";
import "./BlogsComponent.css";

class BlogsPage extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="blogs-main">
        <Header theme={theme} />
        <div className="basic-blog">
          <div className="blog-hero-section">
            <div className="blog-hero-icon">{"\u270D\uFE0F"}</div>
            <h1
              className="blog-heading-text"
              style={{ color: theme.text }}
            >
              {blogSection.title}
            </h1>
            <p
              className="blog-header-detail-text subTitle"
              style={{ color: theme.secondaryText }}
            >
              {blogSection.subtitle}
            </p>
          </div>
        </div>
        <Blogs theme={theme} />
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default BlogsPage;
