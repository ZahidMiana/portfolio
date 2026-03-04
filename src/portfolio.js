/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Zahid Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Zahid Portfolio",
    type: "website",
    url: "http://zahidmiana.com/",
  },
};

//Home Page
const greeting = {
  title: "Zahid Iqbal",
  logo_name: "zahidiqbal",
  nickname: "404NotFound ",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/ZahidMiana/portfolio_1",
  githubProfile: "https://github.com/ZahidMiana",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // https://github.com/ZahidMiana",
  // linkedin: "https://www.linkedin.com/in/zahid-iqbal-a18498257",
  // gmail: "zahidmiana67@gmail.com",
  // twitter: "https://x.com/zahidmiana67/",

  {
    name: "Github",
    link: "https://github.com/ZahidMiana",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/zahid-iqbal-a18498257",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:zahidmiana67@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/zahidmiana67/",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
];

const skills = {
  data: [
    {
      title: "AI & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "• Building and fine-tuning deep learning models for NLP tasks including text classification, sentiment analysis, and named entity recognition",
        "• Developing Generative AI applications using LLMs, prompt engineering, and RAG pipelines",
        "• Training and deploying machine learning models for real-world predictive analytics and data-driven solutions",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "HuggingFace",
          fontAwesomeClassname: "noto-v1:hugging-face",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "OpenAI",
          fontAwesomeClassname: "simple-icons:openai",
          style: {
            backgroundColor: "transparent",
            color: "#412991",
          },
        },
        {
          skillName: "LangChain",
          fontAwesomeClassname: "simple-icons:langchain",
          style: {
            backgroundColor: "transparent",
            color: "#1C3C3C",
          },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            backgroundColor: "transparent",
            color: "#F7931E",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "• Building responsive and scalable web applications using the MERN Stack (MongoDB, Express, React, Node.js)",
        "• Developing server-rendered and SEO-friendly apps with Next.js and RESTful APIs",
        "• Building Solana blockchain applications using Rust for decentralized solutions",
        "• Containerizing applications with Docker and orchestrating with Kubernetes for production deployments",
      ],
      softwareSkills: [
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Rust",
          fontAwesomeClassname: "simple-icons:rust",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Solana",
          fontAwesomeClassname: "simple-icons:solana",
          style: {
            color: "#9945FF",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "• Deploying and managing full-stack applications on AWS using EC2, S3, Lambda, and RDS",
        "• Hosting and scaling web apps on Heroku with CI/CD pipelines for rapid deployments",
        "• Containerizing applications with Docker and managing clusters with Kubernetes",
        "• Setting up databases, serverless functions, and cloud storage for production-grade apps",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#430098",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "simple-icons:nginx",
          style: {
            color: "#009639",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#2088FF",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
          },
        },
      ],
    },
    {
      title: "System Design",
      fileName: "SystemDesignImg",
      skills: [
        " Designing scalable distributed systems and microservices architectures",
        " Building high-performance systems with load balancing and caching strategies",
        " Creating database schemas and optimizing system performance for millions of users",
        " Implementing event-driven architectures and message queuing systems",
      ],
      softwareSkills: [
        {
          skillName: "Redis",
          fontAwesomeClassname: "simple-icons:redis",
          style: {
            color: "#DC382D",
          },
        },
        {
          skillName: "Apache Kafka",
          fontAwesomeClassname: "simple-icons:apachekafka",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "System Design",
          fontAwesomeClassname: "fas fa-sitemap",
          style: {
            color: "#FF6B6B",
          },
        },
        {
          skillName: "Load Balancer",
          fontAwesomeClassname: "fas fa-balance-scale",
          style: {
            color: "#4ECDC4",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Punjab Group of Colleges (PGC)",
      subtitle: "F.Sc Pre-Engineering",
      logo_path: "pgc.png",
      alt_name: "PGC",
      duration: "2019 - 2021",
      descriptions: [
        "• Studied core Pre-Engineering subjects including Mathematics, Physics, and Chemistry",
        "• Developed strong analytical and problem-solving skills through rigorous coursework in Calculus, Mechanics, and Organic Chemistry",
        "• Built a solid foundation in logical thinking and scientific reasoning that later helped in Computer Science",
      ],
      website_link: "https://pgc.edu/",
    },
    {
      title: "FAST National University (NUCES)",
      subtitle: "B.S. in Computer Science",
      logo_path: "fast.png",
      alt_name: "FAST NUCES",
      duration: "2022 - 2026",
      descriptions: [
        "• Studied core CS courses including Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Operating Systems, Computer Networks, and Software Engineering",
        "• Completed advanced courses in Artificial Intelligence, Machine Learning, Deep Learning, Natural Language Processing, and Computer Vision",
        "• Gained hands-on experience with Web Development, Cloud Computing, and Distributed Systems through project-based coursework",
        "• Worked on semester projects involving MERN Stack applications, AI/ML models, and blockchain-based solutions",
      ],
      website_link: "https://www.nu.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Freelance Work and Volunteership",
  description:
    "I have worked as a freelance MERN Stack Developer and AI Developer with local brokers and clients. I enjoy building impactful web applications and AI solutions. Apart from work, I actively participate in university events and sports activities.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Freelance Work",
      work: true,
      experiences: [
        {
          title: "MERN Stack Developer",
          company: "Freelance (Local Brokers)",
          company_url: "",
          logo_path: "mern_logo.svg",
          duration: "2023 - Present",
          location: "Pakistan",
          description:
            "Working as a freelance MERN Stack Developer through local brokers. Building full-stack web applications using MongoDB, Express.js, React.js, and Node.js for various clients. Delivering responsive, scalable, and production-ready solutions including dashboards, e-commerce platforms, and custom web apps.",
          color: "#e17055",
        },
        {
          title: "AI Developer",
          company: "Freelance (Local Brokers)",
          company_url: "",
          logo_path: "ai_dev_logo.svg",
          duration: "2024 - Present",
          location: "Pakistan",
          description:
            "Developing AI-powered solutions for clients including chatbots, NLP-based text analysis tools, and machine learning models for data-driven decision making. Working with LLMs, RAG pipelines, and deep learning frameworks to build intelligent applications.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Sports Head - Volleyball Tournament",
          company: "FAST NUCES Sports Gala",
          company_url: "https://www.nu.edu.pk/",
          logo_path: "fast.png",
          duration: "2025",
          location: "FAST NUCES, Pakistan",
          description:
            "Served as Sports Head for the Volleyball Tournament at FAST NUCES Sports Gala. Organized and managed the entire tournament including team registrations, match scheduling, coordinating with referees, and ensuring smooth execution of all matches.",
          color: "#00274d",
        },
        {
          title: "Sports Head - Ludo Tournament",
          company: "FAST NUCES Sports Gala",
          company_url: "https://www.nu.edu.pk/",
          logo_path: "fast.png",
          duration: "2024",
          location: "FAST NUCES, Pakistan",
          description:
            "Served as Sports Head for the Ludo Tournament at FAST NUCES Sports Gala. Managed participant registrations, organized brackets, ensured fair play, and coordinated the event from start to the final rounds.",
          color: "#00274d",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "2023 - Present",
          location: "Remote",
          description:
            "Actively contributing to open-source projects and building personal projects on GitHub. Collaborating with the developer community and sharing code solutions.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Here are some of my personal projects built using modern web technologies including MERN Stack, Next.js, Firebase, and AI integrations. Each project showcases real-world problem-solving and full-stack development skills.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "zahid.png",
    description:
      "Feel free to reach out to me! I'm available on all major platforms and typically respond within 24 hours. Whether you need help with MERN Stack, Next.js, Blockchain, AI/ML, or any Full Stack Development — I'd love to connect and collaborate.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I write about my development journey, technical deep-dives, and lessons learned building real-world projects in Web3, AI, and Full Stack Development.",
    link: "/blogs",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Vijhianwala, Khanewal, Punjab, Pakistan",
    locality: "Khanewal",
    country: "Pakistan",
    region: "Punjab",
    postalCode: "58150",
    streetAddress: "Vijhianwala",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Khanewal,+Punjab,+Pakistan",
  },
  phoneSection: {
    title: "Email Me Directly",
    subtitle: "zahidmiana67@gmail.com",
  },
};

// Blog Data
const blogSection = {
  title: "Blogs",
  subtitle:
    "I write about my development journey, technical deep-dives, and lessons learned building real-world projects in Web3, AI, and Full Stack Development.",
  link: "/blogs",
  avatar_image_path: "blogs_image.svg",
  blogs: [
    {
      id: 1,
      title: "Building Scalable MERN Stack Applications",
      description:
        "A comprehensive guide on architecting and building production-ready MERN stack applications with best practices, performance optimization, and deployment strategies.",
      image: "/skills/deeplearning_ai_logo.png",
      url: "/blog/mern-stack-guide",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["MERN", "React", "Node.js", "MongoDB", "Full Stack"],
      content:
        "# Building Scalable MERN Stack Applications\n\nThe MERN stack has become one of the most popular choices for building modern web applications. In this guide, I will walk you through building scalable applications.\n\n## Architecture Overview\n\nWhen building a MERN application, structure your project for maintainability and scalability. Separate your client and server into distinct directories with shared utilities.\n\n## Backend Setup\n\nStart by setting up a robust Express.js server with proper middleware and database connections. Use environment variables for configuration and implement proper error handling from the start.\n\n## Frontend Development\n\nUse React with a component-based architecture and proper state management. Keep your components small, focused and reusable. Use Context API or Redux for global state.\n\n## Database Design\n\nDesign MongoDB schemas with performance and scalability in mind. Use proper indexing strategies and avoid deeply nested documents.\n\n## Deployment\n\nUse containerization with Docker and deploy to modern platforms. Set up CI/CD pipelines for automated testing and deployment.\n\nBuilding MERN applications requires attention to performance, security, and scalability from day one.",
    },
    {
      id: 2,
      title: "Next.js 14: Server Components and App Router",
      description:
        "Exploring the latest features in Next.js 14, including Server Components, the App Router, and how these changes improve performance and developer experience.",
      image: "/skills/deeplearning_ai_logo.png",
      url: "/blog/nextjs-14-guide",
      date: "2024-02-10",
      readTime: "6 min read",
      tags: ["Next.js", "React", "Server Components", "Performance"],
      content:
        "# Next.js 14: Server Components and App Router\n\nNext.js 14 introduces groundbreaking features that revolutionize how we build React applications. Let us explore Server Components and the App Router.\n\n## What are React Server Components?\n\nServer Components allow you to render components on the server, reducing the JavaScript bundle size and improving performance. They fetch data on the server and send only the rendered HTML to the client.\n\n## App Router Benefits\n\nThe new App Router provides:\n- File-based routing with layouts\n- Nested routing and layouts\n- Streaming and Suspense support\n- Built-in SEO optimization\n- Enhanced TypeScript support\n\n## Performance Improvements\n\nServer Components reduce client-side JavaScript and improve Core Web Vitals scores. Pages load faster because less JavaScript needs to be downloaded and executed.\n\n## Best Practices\n\n1. Use Server Components for data fetching\n2. Client Components for interactivity\n3. Combine both for optimal performance\n4. Leverage Suspense boundaries\n\nNext.js 14 represents a significant step forward in React development.",
    },
    {
      id: 3,
      title: "Solana Blockchain Development with Rust",
      description:
        "Getting started with Solana blockchain development using Rust. Learn to build decentralized applications, smart contracts, and interact with the Solana ecosystem.",
      image: "/skills/deeplearning_ai_logo.png",
      url: "/blog/solana-rust-development",
      date: "2024-02-28",
      readTime: "10 min read",
      tags: ["Solana", "Rust", "Blockchain", "Web3", "DeFi"],
      content:
        "# Solana Blockchain Development with Rust\n\nSolana has emerged as one of the fastest blockchain platforms. Learn how to build on Solana using Rust.\n\n## Why Solana?\n\nSolana offers several advantages:\n- High throughput (50,000+ TPS)\n- Low transaction fees\n- Rust-based smart contracts\n- Growing ecosystem\n- Excellent developer tools\n\n## Setting Up Development\n\nInstall the Solana CLI and Rust toolchain to get started with development. Use solana-test-validator for local testing.\n\n## Building Programs\n\nCreate smart contracts (programs) using Rust with the Solana SDK. The Anchor framework simplifies development with macros and abstractions.\n\n## Frontend Integration\n\nConnect your web applications to Solana using the solana/web3.js library and wallet adapters for user authentication.\n\n## Best Practices\n\n1. Use Anchor framework for complex programs\n2. Test thoroughly on devnet\n3. Implement proper error handling\n4. Optimize for transaction fees\n5. Follow security guidelines\n\nSolana development opens up exciting possibilities in Web3 and DeFi.",
    },
  ],
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  blogSection,
};
