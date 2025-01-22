import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  threejs,
  metacube,
  clickfq,
  cws,
  chess,
  chatApplication,
  microserviceAuthentication,
  mysteryMessage,
  portfolio,
  socialMediaClone,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "MERN stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Microservices Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Sr. Software Engineer",
    company_name: "Metacube Software Ltd. — Jaipur",
    icon: metacube,
    iconBg: "#383E56",
    date: "Jan 2022 - Present",
    points: [
      "Architected and developed scalable microservices and RESTful APIs using Node.js and Express.js, increasing system scalability by 30% and reducing response time.",
      "Integrated GraphQL to optimize data fetching in RESTful API endpoints, enhancing application performance and reducing redundant network calls.",
      "Implemented Zustand for state management and utilized WebSockets to enable real-time communication, boosting user engagement by 15%.",
      "Actively collaborated in an Agile environment, leading Sprint reviews, mentoring junior developers, and ensuring high-quality, timely delivery.",
      "Enhanced testing practices by integrating Jest and Mocha for unit testing, ensuring robustness and reducing defects by 20%.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "ClickFq",
    icon: clickfq,
    iconBg: "#4F5D73",
    date: "Jul 2020 - Dec 2021",
    points: [
      "Developed and optimized WebSocket connections for real-time updates, enhancing responsiveness, and improving user satisfaction by 20%.",
      "Integrated secure authentication protocols using JWT and OAuth for seamless login across microservices.",
      "Designed and implemented high-performance RESTful APIs using Node.js and Express.js, resulting in improved backend response time.",
      "Collaborated closely with cross-functional teams to ensure features met both technical and business requirements, delivering on time.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Code World Software",
    icon: cws,
    iconBg: "#F55B5F",
    date: "Aug 2019 - Jun 2020",
    points: [
      "Developed and deployed MERN stack applications, ensuring scalability and high performance.",
      "Utilized Zod for robust data validation in Node.js, ensuring data accuracy and minimizing errors.",
      "Implemented and automated CI/CD pipelines using Jenkins, ensuring smooth and efficient deployments.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Aman proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Aman does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Aman optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Chat Application",
    description:
      "A real-time chat application built with the MERN stack, featuring JWT authentication, WebSocket-based communication, and state management using Axios and Mongoose.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "jwt",
        color: "pink-text-gradient",
      },
      {
        name: "websockets",
        color: "orange-text-gradient",
      },
    ],
    image: chatApplication,
    source_code_link: "https://github.com/Amanpawar18/chat-application",
  },
  {
    name: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, with 3D visuals and animations using Three.js and WebGL, built using React.js, TypeScript, and CI/CD pipelines for deployment.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "ci/cd",
        color: "purple-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Amanpawar18/3d-portfolio",
  },
  {
    name: "Chess Game",
    description:
      "A multiplayer chess game built with the MERN stack, utilizing WebSockets for real-time gameplay and Redux for state management.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "websockets",
        color: "pink-text-gradient",
      },
    ],
    image: chess,
    source_code_link: "https://github.com/Amanpawar18/chess-game",
  },
  {
    name: "Social Media Clone",
    description:
      "A social media platform clone featuring user authentication, posts, and real-time messaging using MERN stack, JWT authentication, WebSockets, and Redux for state management.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "jwt",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "websockets",
        color: "orange-text-gradient",
      },
    ],
    image: socialMediaClone,
    source_code_link: "https://github.com/Amanpawar18/social-media-clone",
  },
  {
    name: "Microservice Authentication",
    description:
      "A microservice-based authentication system utilizing Node.js, Express.js, JWT, Docker, Redis, and MongoDB to manage user authentication and authorization across services.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "green-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient",
      },
      {
        name: "microservices",
        color: "purple-text-gradient",
      },
    ],
    image: microserviceAuthentication,
    source_code_link:
      "https://github.com/Amanpawar18/microservice-authentication",
  },
  {
    name: "Mystery Message",
    description:
      "A mystery message platform where users can send encrypted messages. Built using Next.js, TypeScript, JWT for authentication, and WebSockets for real-time interaction.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "jwt",
        color: "pink-text-gradient",
      },
      {
        name: "websockets",
        color: "orange-text-gradient",
      },
    ],
    image: mysteryMessage,
    source_code_link: "https://github.com/Amanpawar18/mystery-message",
  },
];

export { services, technologies, experiences, testimonials, projects };
