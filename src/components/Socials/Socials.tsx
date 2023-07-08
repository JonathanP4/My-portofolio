import frontendMentor from "/frontend-mentor.svg";
import styles from "./Socials.module.css";
import { motion } from "framer-motion";

export default function Socials() {
  return (
    <section
      id="socials"
      className={`${styles.socials} py-8 px-5 bg-white rounded-lg max-w-lg`}
    >
      <div>
        <h2>You can find me here: </h2>
      </div>
      <div className="flex items-center gap-8">
        <motion.a
          initial={{
            transform: "translate(-30%, 50%) rotate(-30deg)",
            opacity: 0,
          }}
          transition={{ ease: "easeIn", duration: 0.3 }}
          whileInView={{ transform: "translate(0) rotate(0)", opacity: 1 }}
          href="https://github.com/JonathanP4"
        >
          <img
            className=" dark:invert"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          />
        </motion.a>

        <motion.a
          initial={{
            transform: "translate(-6rem, 50%) rotate(-30deg)",
            opacity: 0,
          }}
          transition={{ ease: "easeIn", duration: 0.3 }}
          whileInView={{ transform: "translate(0) rotate(0)", opacity: 1 }}
          href="https://www.linkedin.com/in/jontahan-petersen-a5a4b3280/"
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
        </motion.a>

        <motion.a
          initial={{
            transform: "translate(-12rem, 50%) rotate(-30deg)",
            opacity: 0,
          }}
          transition={{ ease: "easeIn", duration: 0.3 }}
          whileInView={{ transform: "translate(0) rotate(0)", opacity: 1 }}
          href="https://www.frontendmentor.io/profile/htcsjs"
        >
          <img src={frontendMentor} alt="Frontend Mentor logo" />
        </motion.a>
      </div>
    </section>
  );
}
