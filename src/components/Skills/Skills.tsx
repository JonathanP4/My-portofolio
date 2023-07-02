import styles from "./Skills.module.css";
import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.section
      id="skills"
      viewport={{ once: true }}
      className="relative"
      initial={{ transform: "translateX(100%)", opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      whileInView={{ transform: "translateX(0)", opacity: 1 }}
    >
      <h2>Skills</h2>
      <motion.div
        viewport={{ once: true }}
        className={`${styles.iconsContainer} w-full flex justify-between`}
        initial={{ transform: "scaleX(0%) ", opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        whileInView={{ transform: "scaleX(1)", opacity: 1 }}
      >
        <i className="devicon-html5-plain colored" title="HTML5" />
        <i className="devicon-css3-plain colored" title="CSS3" />
        <i className="devicon-sass-plain colored" title="SASS" />
        <i className="devicon-tailwindcss-plain colored" title="TailwindCSS" />
        <i className="devicon-javascript-plain colored" title="Javascript" />
        <i className="devicon-typescript-plain colored" title="Typescript" />
        <i className="devicon-react-plain colored" title="React" />
        <i className="devicon-git-plain colored" title="Git" />
      </motion.div>
    </motion.section>
  );
}

export default Skills;
