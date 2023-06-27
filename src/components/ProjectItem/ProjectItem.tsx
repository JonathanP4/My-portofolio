import RedirectOverlay from "../RedirectOverlay/RedirectOverlay";
import styles from "./ProjectItem.module.css";

interface Props {
  title: string;
  image: string;
  link: string;
  description?: string;
}

function ProjectItem({ title, image, link }: Props) {
  return (
    <div className={styles.project}>
      <figure>
        <RedirectOverlay link={link} />
        <img src={image} alt="" />
      </figure>
      <div className={styles.projectText}>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default ProjectItem;
