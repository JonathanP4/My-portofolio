import styles from "./ProjectItem.module.css";
function ProjectItem({
  title,
  image,
}: {
  title: string;
  image: string;
  description?: string;
}) {
  return (
    <div className={styles.project}>
      <img src={image} alt="" />
      <h1>{title}</h1>
    </div>
  );
}

export default ProjectItem;
