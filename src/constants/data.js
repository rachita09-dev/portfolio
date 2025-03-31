import css3 from "../assets/icons/css3.png";
import git from "../assets/icons/git.png";
import github from "../assets/icons/github.png";
import html5 from "../assets/icons/html5.png";
import javascript from "../assets/icons/javascript.png";
import mui from "../assets/icons/mui.png";
import react from "../assets/icons/react.png";
import figma from "../assets/icons/figma.png";
import redux from "../assets/icons/redux.png";
import sass from "../assets/icons/sass.png";
import bootstrap from "../assets/icons/bootstrap.png";
import newsteller from "../assets/projects/newsteller.jpg";
import innvoicegenerator from "../assets/projects/innvoicegenerator.png";
import bitbucket from "../assets/icons/bitbucket.jpeg";

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
    skill: <img alt=" Figma" src={figma}/>,
    name: "Figma",
  },
  {
    id: 7,
    skill: <img alt="redux" src={redux} />,
    name: "Redux",
  },
  {
    id: 8,
    skill: <img alt="botstrap" src={bootstrap} style={{borderRadius: "15px"}}/>,
    name: "Bootstrap",
  },
  {
    id: 9,
    skill: <img alt="sass" src={sass} />,
    name: "SASS",
  },
  {
    id: 10,
    skill: <img alt="git" src={git} />,
    name: "Git",
  },
  {
    id: 11,
    skill: <img alt="github" src={github} />,
    name: "GitHub",
  },
  {
    id: 12,
    skill: <img alt="bitbucket" src={bitbucket} />,
    name: "Bitbucket",
  },
];

export const PROJECTS = [
  {
    link: "https://github.com/rachita09-dev/Invoice-Generator",
    title: "Invoice Generator",
    techStack: "Tech Stack- ReactJs, Material UI, React Hook Form, Typescript",
    desc: "I created a React-based invoice generator for streamlined and efficient invoicing.",
    image: innvoicegenerator,
  },
  {
    link: "https://github.com/rachita09-dev/Daily-Scoop",
    title: "The Daily Scoop",
    techStack: "Tech Stack- ReactJs, Material UI, Typescript, React Query",
    desc: "The Daily Scoop is a user-friendly news teller app that delivers breaking news and current events in a simple and streamlined format.",
    image: newsteller,
  }
];

export const RESUME_LINK =
  "https://drive.google.com/file/d/1KQsqbXrFoeANA_M1XT4DrbephSed0m88/view?usp=drive_link";

export const LINKEDIN_LINK =
  "https://www.linkedin.com/in/rachita-dandekar-624952178/";

export const GITHUB_LINK = "https://github.com/rachita09-dev";

export const FORM_SUBMIT_LINK =
  "https://formsubmit.co/47347fa752c991989dd3c38d599c2bb9";

export const MY_NAME = "Rachita Dandekar";
