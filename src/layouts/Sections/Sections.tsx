import About from "../../components/About/About";
import MyProjects from "../Projects/MyProjects";
import Skills from "../../components/Skills/Skills";
import styles from "./Sections.module.css";
import Socials from "../../components/Socials/Socials";

function Sections() {
  return (
    <div className={styles.sectionsContainer}>
      <About />
      <Skills />
      <MyProjects />
      <Socials />
    </div>
  );
}

export default Sections;
