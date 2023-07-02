import { motion } from "framer-motion";
import styles from "./About.module.css";

function About() {
  return (
    <motion.section
      id="about"
      viewport={{ once: true }}
      initial={{ transform: "translateX(-100%)", opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      whileInView={{ opacity: 1, transform: "translateX(0)" }}
      className={styles.aboutSection}
    >
      <h2>About Me</h2>
      <p>
        Welcome to my website! My name is Jonathan Petersen and I'm a web
        developer. I'm very passionate about coding and tech in general and love
        challenging myself and learning new things!
      </p>
    </motion.section>
  );
}

export default About;
