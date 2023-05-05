import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import "../index.css";
import { PROJECTS } from "../constants/data";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const ProjectCard = ({ cardItem }) => {
  return (
    <li>
      <a href={cardItem.link} className="card" target="_blank">
        <img src={cardItem.image} className="card__image" alt="" />
        <div className="card__overlay">
          <div className="card__header">
            <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
            <div className="card__header_text">
              <h3 className="card__title">{cardItem.title}</h3>
              <span className="card__status">{cardItem.techStack}</span>
            </div>
          </div>
          <p className="card__description">{cardItem.desc}</p>
        </div>
      </a>
    </li>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-20 pb-40">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">A glimpse into my past work</p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:gap-y-4 sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ul className="cards">
            {PROJECTS.map((item) => (
              <ProjectCard cardItem={item} />
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
