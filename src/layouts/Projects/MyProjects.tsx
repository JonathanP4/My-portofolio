import ProjectItem from "../../components/ProjectItem/ProjectItem";
import styles from "./MyProjects.module.css";
import { motion } from "framer-motion";

function MyProjects() {
  return (
    <motion.section
      id="projects"
      className={styles.projects}
      initial={{ transform: "translateY(50px)", opacity: 0 }}
      transition={{ type: "tween", duration: 0.6 }}
      whileInView={{
        transform: "translateY(0)",
        opacity: 1,
      }}
    >
      <h2>My Projects</h2>
      <ProjectItem
        title="E-commerce product page"
        image="/e-commerce-page.png"
      />
    </motion.section>
  );
}

export default MyProjects;
