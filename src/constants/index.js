import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/Pokedex.png";
import project6 from "../assets/projects/WanderLust.png";
import movieRsys from "../assets/projects/MovieRSystem.png";

export const HERO_CONTENT = `I am a Computer Engineering student and an AI/ML enthusiast with a strong foundation in building intelligent applications, RAG pipelines, and full-stack systems. My recent experience includes developing AI-powered chatbots using LLMs and OpenAI APIs, building robust backend architectures with Python and FastAPI, and streamlining data workflows. I am passionate about solving complex problems and creating innovative, scalable solutions.`;

export const ABOUT_TEXT = `I am currently pursuing a B.Tech in Computer Engineering from Pimpri Chinchwad College of Engineering. I am a dedicated student with a profound interest in Artificial Intelligence, Machine Learning, and Software Development. My experience ranges from building GenAI proofs-of-concept and RAG pipelines to developing full-stack web applications. I thrive in collaborative environments and am constantly seeking opportunities to apply my skills—from Python, FastAPI, and React to Docker and CI/CD pipelines—in real-world projects. I have also solved over 400 LeetCode problems and hold an AWS certification.`;

export const EXPERIENCES = [
  {
    year: "July 2025 - Present",
    role: "AI/ML Intern - IoT and Analytics Team",
    company: "SAS Research and Development",
    description: `Developed a GenAI POC AI-powered chatbot using LLMs and OpenAI APIs, with Function calling and MCP integration. Built a POC Retrieval-Augmented Generation (RAG) pipeline for document-based QA. Designed a semi-automated RAG evaluation pipeline reducing testing time by 80%. Integrated MCP servers with Jira, Confluence, and TestRail to automate workflows. Implemented server-side automation and ETL pipelines. Developed automated Java unit test cases with LLM assistance.`,
    technologies: ["Python", "LLMs", "RAG", "MCP", "Java", "ETL"],
  }
];

export const EDUCATION = [
  {
    year: "2022 - 2026",
    college: "Pimpri Chinchwad College of Engineering",
    description: "Pune, India",
    degree: ["B.Tech in Computer Engineering"],
  },
  {
    year: "2020 - 2022",
    college: "Shri Fattechand Jain Vidyalaya and Jr. College",
    description: "Pune, India",
    degree: ["Higher Secondary Certificate"],
  }
];

export const PROJECTS = [
  {
    title: "Weather Chat-bot with MCP Server",
    image: project1, // Re-using a generic image or you can add specific ones later
    description:
      "Developed an AI-powered weather chatbot using LangGraph with tool calling via a custom MCP server. Integrated weather APIs for real-time weather, geolocation queries, and forecast retrieval. Containerized using Docker and deployed on Hugging Face Spaces with CI/CD via GitHub Actions.",
    technologies: ["LangGraph", "MCP", "Docker", "GitHub Actions"],
    category: "AI",
    link: "https://github.com/sanwadR/full-chatbot",
  },
  {
    title: "Transaction Processing & Fraud Detection System",
    image: project2,
    description:
      "Developed a backend financial transaction processing system using Python and FastAPI. Built RESTful APIs with Pydantic validation. Implemented rule-based fraud detection using risk scoring based on anomalies. Integrated PostgreSQL with SQLAlchemy ORM and optimized queries using Redis caching.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    category: "Backend",
    link: "https://github.com/sanwadR/fraud-detection",
  },
  {
    title: "Movie Recommendation System",
    image: movieRsys,
    description:
      "Developed a movie recommendation system using content-based filtering techniques. Utilized TF-IDF vectorization and cosine similarity to suggest movies based on user preferences. Built an interactive UI using Streamlit and deployed the application on Streamlit Cloud.",
    technologies: ["Python", "Streamlit", "Scikit-Learn", "Pandas"],
    category: "AI",
    link: "https://github.com/sanwadR/moviesRSystem",
  },
  {
    title: "WanderLust",
    image: project6,
    description:
      "Developed a full-stack travel listing platform with REST APIs and authentication using Passport.js. Implemented MongoDB data models, server-side validation, and cloud-based image storage integration.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Passport.js"],
    category: "Fullstack",
    link: "https://github.com/sanwadR/WanderLust",
  },
  {
    title: "Pokedex",
    image: project5,
    description:
      "A place where you can find the pokemon which you have been looking for ",
    technologies: ["HTML", "CSS", "Javascript"],
    category: "Frontend",
    link: "https://sanwadr.github.io/Pokedex/",
  },
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    category: "Fullstack",
    link: "https://sanwadr.github.io/Pokedex/",
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["React", "Firebase", "Tailwind"],
    category: "Frontend",
    link: "https://sanwadr.github.io/Pokedex/",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Framer Motion", "Tailwind"],
    category: "Frontend",
    link: "https://sanwadr.github.io/Pokedex/",
  },
  {
    title: "Blogging Platform API",
    image: project4,
    description:
      "A backend API for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["Node.js", "Express", "mySQL", "Docker"],
    category: "Backend",
    link: "https://sanwadr.github.io/Pokedex/",
  }
];

export const CONTACT = {
  address: "Pune, India",
  phoneNo: "+91 8983828023",
  email: "sanwadrashinkar8888@gmail.com",
};
