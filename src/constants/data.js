import css3 from "../assets/icons/css3.png";
import git from "../assets/icons/git.png";
import github from "../assets/icons/github.png";
import html5 from "../assets/icons/html5.png";
import javascript from "../assets/icons/javascript.png";
import mui from "../assets/icons/mui.png";
import node from "../assets/icons/node.png";
import react from "../assets/icons/react.png";
import redux from "../assets/icons/redux.png";
import sass from "../assets/icons/sass.png";
import typescript from "../assets/icons/typescript.png";
import sahayata from "../assets/projects/sahayata.jpg";
import hiremate from "../assets/projects/hiremate.jpg";
import newsteller from "../assets/projects/newsteller.jpg";
import innvoicegenerator from "../assets/projects/innvoicegenerator.png";
import dashboard from "../assets/projects/dashboard.jpeg";
import rollingracer from "../assets/projects/rollingracer.png";
import k8s from "../assets/icons/k8s.png";
import docker from "../assets/icons/docker.png";

export const SKILLS = [
  {
    id: 1,
    skill: <img alt="html5" src={html5} />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <img alt="css3" src={css3} />,
    name: "CSS3",
  },
  {
    id: 3,
    skill: <img alt="javascript" src={javascript} />,
    name: "Javascript",
  },
  {
    id: 4,
    skill: <img alt="mui" src={mui} />,
    name: "Material UI",
  },
  {
    id: 5,
    skill: <img alt="react" src={react} />,
    name: "React",
  },
  {
    id: 6,
    skill: <img alt=" node" src={node} />,
    name: "NodeJs",
  },
  {
    id: 7,
    skill: <img alt="redux" src={redux} />,
    name: "Redux",
  },
  {
    id: 8,
    skill: <img alt="typescript" src={typescript} />,
    name: "Typescript",
  },
  {
    id: 9,
    skill: <img alt="sass" src={sass} />,
    name: "SASS",
  },
  {
    id: 10,
    skill: <img alt="docker" src={docker} />,
    name: "Docker",
  },
  {
    id: 11,
    skill: <img alt="k8s" src={k8s} />,
    name: "Kubernetes",
  },
  {
    id: 12,
    skill: <img alt="git" src={git} />,
    name: "Git",
  },
  {
    id: 13,
    skill: <img alt="github" src={github} />,
    name: "GitHub",
  },
];

export const PROJECTS = [
  {
    link: "https://github.com/rutul-kulkarni/react-mui-dashboard",
    title: "Metrics Monitor Dashboard",
    techStack: "Tech Stack: ReactJs, Material UI, Javascript, React Hook Form",
    desc: "I developed a React dashboard using Material UI and React Router with real-time data monitoring through multiple charts and reusable components.",
    image: dashboard,
  },
  {
    link: "https://github.com/rutul-kulkarni/invoice-generator",
    title: "Invoice Generator",
    techStack: "Tech Stack- ReactJs, Material UI, React Hook Form, Typescript",
    desc: "I created a React-based invoice generator for streamlined and efficient invoicing.",
    image: innvoicegenerator,
  },
  {
    link: "https://github.com/rutul-kulkarni/news-teller",
    title: "The Daily Scoop",
    techStack: "Tech Stack- ReactJs, Material UI, Typescript, React Query",
    desc: "The Daily Scoop is a user-friendly news teller app that delivers breaking news and current events in a simple and streamlined format.",
    image: newsteller,
  },
  {
    link: "https://github.com/rutul-kulkarni/boolean-hooligans-main",
    title: "Rolling Racer",
    techStack:
      "Tech Stack- ReactJs, React Three Fiber, Material UI, Javascript",
    desc: "Built a thrilling game using React Three.js where players navigate through obstacles to reach the destination in minimum time. An exciting and challenging game for gamers of all ages.",
    image: rollingracer,
  },
  {
    link: "https://github.com/rutul-kulkarni/Saahayata",
    title: "Saahayata",
    techStack:
      "Tech Stack- Android Studio, Java, Firebase Authentication, Firebase, Firestore, Google Map API",
    desc: "Our donation application simplifies the giving process, making it easy for you to help NGOs and transform lives.",
    image: sahayata,
  },
  {
    link: "https://github.com/rutul-kulkarni/PlacementApp",
    title: "HireMate",
    techStack:
      "Tech Stack- Android Studio, Java, Firebase, Firestore, Firebase Authentication",
    desc: "The all-in-one solution for seamless college placement coordination and material distribution, simplifying the hiring process for all parties involved.",
    image: hiremate,
  },
];

export const RESUME_LINK =
  "https://drive.google.com/file/d/1xjmN5KUidsdse0yk6e5HEwq2YxMNETaN/view?usp=share_link";

export const LINKEDIN_LINK =
  "https://www.linkedin.com/in/rutul-kulkarni-52321516a/";

export const GITHUB_LINK = "https://github.com/rutul-kulkarni";

export const FORM_SUBMIT_LINK =
  "https://formsubmit.co/47347fa752c991989dd3c38d599c2bb9";

export const MY_NAME = "Rutul Kulkarni";
