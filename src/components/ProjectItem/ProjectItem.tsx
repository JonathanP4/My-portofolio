import RedirectOverlay from "../RedirectOverlay/RedirectOverlay";
import styles from "./ProjectItem.module.css";
import { motion } from "framer-motion";

interface Props {
  title: string;
  image: string;
  link: string;
  delay: number;
  description?: string;
}

function ProjectItem({ title, image, link, delay }: Props) {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ transform: "translateX(-50%", opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeIn", delay }}
      whileInView={{ transform: "translateX(0)", opacity: 1 }}
      className="rounded-2xl p-5 grid shadow-slate-500/40 shadow-lg"
    >
      <figure className={styles.figure}>
        <RedirectOverlay link={link} />
        <img src={image} alt="" />
      </figure>
      <div className={styles.projectText}>
        <h1>{title}</h1>
      </div>
    </motion.div>
  );
}

export default ProjectItem;
