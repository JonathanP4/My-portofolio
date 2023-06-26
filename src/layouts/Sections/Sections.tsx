import About from "../../components/About/About";
import MyProjects from "../Projects/MyProjects";
import Skills from "../../components/Skills/Skills";
import styles from "./Sections.module.css";

function Sections() {
  return (
    <div className={styles.sectionsContainer}>
      <About />
      <Skills />
      <MyProjects />
    </div>
  );
}

export default Sections;
