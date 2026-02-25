import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { greeting, projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

const projectSections = [
  {
    category: "mern",
    title: "MERN Stack + Next.js",
    subtitle:
      "Full-stack web applications built with MongoDB, Express, React, Node.js, and Next.js",
    icon: "🚀",
  },
  {
    category: "blockchain",
    title: "Blockchain Projects",
    subtitle:
      "Decentralized applications, smart contracts, and blockchain-based systems built with Solana, Rust, and Ethereum tools",
    icon: "⛓️",
  },
  {
    category: "ai",
    title: "AI Engineering & ML/DL",
    subtitle:
      "Machine learning models, recommendation systems, and AI-powered applications using Python, Scikit-learn, and NLP",
    icon: "🤖",
  },
];

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        {projectSections.map((section) => {
          const sectionProjects = ProjectsData.data.filter(
            (repo) => repo.category === section.category
          );
          if (sectionProjects.length === 0) return null;
          return (
            <div key={section.category} className="project-section">
              <Fade bottom duration={1500} distance="30px">
                <div className="project-section-header">
                  <h2
                    className="project-section-title"
                    style={{ color: theme.text }}
                  >
                    <span className="project-section-icon">{section.icon}</span>
                    {section.title}
                  </h2>
                  <p
                    className="project-section-subtitle subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {section.subtitle}
                  </p>
                </div>
              </Fade>
              <div className="repo-cards-div-main">
                {sectionProjects.map((repo) => (
                  <GithubRepoCard repo={repo} theme={theme} key={repo.id} />
                ))}
              </div>
            </div>
          );
        })}

        <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
