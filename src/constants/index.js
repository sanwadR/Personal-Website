import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/pokedex.png";
import project6 from "../assets/projects/WanderLust.png";
export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.  I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Currently, I am pursuing a B.Tech in Computer Engineering from Pimpri Chinchwad College of Engineering. I am a dedicated and passionate student with a strong interest in software development, artificial intelligence, web development, and data science. My academic journey has equipped me with a solid foundation in programming languages and algorithms. I thrive in collaborative environments and am constantly seeking opportunities to apply my skills in real-world projects. With a commitment to continuous learning and innovation, I aim to contribute to cutting-edge technological advancements and drive impactful solutions in the tech industry.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];
export const EDUCATION = [
  {
    year: "2022- Present",
    college: "Pimpri Chinchwad College of Engineering",
    description: "............",
    degree: ["Bachelor of Technology in Computer Science and Engineering"],
  },
  {
    year: "2020- 2021",
    college: "Shri Fattechand Jain Vidyalaya and Junior College",
    description: "............",
    degree: ["12th [HSC]"],
  },
  {
    year: "2010- 2020",
    college: "Judson High School",
    description: "............",
    degree: ["10th [SSC]"],
  },
];
export const PROJECTS = [
  {
    title: "WanderLust",
    image: project6,
    description:
      "Developed WanderLust, a web app similar to Airbnb, using Node.js, Express.js, and MongoDB. Features include user authentication, property management, search filters, and booking functionalities. Focused on providing a user-friendly interface and seamless experience for both property owners and travelers. Used RESTful APIs for data handling and ensured secure data storage with MongoDB.",
    technologies: [
      "Nodejs",
      "Passport",
      "Express Js ",
      "Bootstrap",
      "Javascript",
    ],
    link: "https://wanderlust-1uuk.onrender.com/listings",
  },
  {
    title: "Pokedex",
    image: project5,
    description:
      "A place where you can find the pokemon which you have been looking for ",
    technologies: ["HTML", "CSS", "Javascript"],
    link: "https://sanwadr.github.io/Pokedex/",
  },
  // {
  //   title: "E-Commerce Website",
  //   image: project1,
  //   description:
  //     "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
  //   technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  //   link: "https://sanwadr.github.io/Pokedex/",
  // },
  // {
  //   title: "Task Management App",
  //   image: project2,
  //   description:
  //     "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
  //   technologies: ["HTML", "CSS", "Angular", "Firebase"],
  //   link: "https://sanwadr.github.io/Pokedex/",
  // },
  // {
  //   title: "Portfolio Website",
  //   image: project3,
  //   description:
  //     "A personal portfolio website showcasing projects, skills, and contact information.",
  //   technologies: ["HTML", "CSS", "React", "Bootstrap"],
  //   link: "https://sanwadr.github.io/Pokedex/",
  // },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  //   link: "https://sanwadr.github.io/Pokedex/",
  // },
];

export const CONTACT = {
  address: "Pimpri Chinchwad",
  phoneNo: "+12 4555 666 00 ",
  email: "sanwad8cloud@gmail.com",
};
