import ProjectItem from "../../components/ProjectItem/ProjectItem";
import { motion } from "framer-motion";

function MyProjects() {
  return (
    <motion.section
      id="projects"
      initial={{ transform: "translateY(100px)", opacity: 0 }}
      transition={{ type: "tween", duration: 0.3 }}
      viewport={{ once: true }}
      whileInView={{
        transform: "translateY(0)",
        opacity: 1,
      }}
    >
      <h2>My Projects</h2>
      <div className="grid grid-cols-2 gap-8 mt-8">
        <ProjectItem
          delay={0}
          title="E-commerce product page"
          image="/e-commerce-page.png"
          link="https://e-commerce-page-beta.vercel.app"
        />
        <ProjectItem
          delay={0.3}
          title="Interactive comments section"
          image="/interactive-comments-section.png"
          link="https://interactive-comments-section-virid.vercel.app"
        />
        <ProjectItem
          delay={0}
          title="Netflix homepage clone"
          image="/netflix-clone.png"
          link="https://netflix-clone-three-psi.vercel.app"
        />
        <ProjectItem
          delay={0.3}
          title="Interactive card"
          image="/interactive-card.png"
          link="https://intercative-card.vercel.app"
        />
        <ProjectItem
          delay={0}
          title="Link shortener"
          image="/link-shortener.png"
          link="https://link-shortener-nine-phi.vercel.app"
        />
        <ProjectItem
          delay={0.3}
          title="Countries details page"
          image="/rest-countries.png"
          link="https://rest-countries-ivory.vercel.app"
        />
      </div>
    </motion.section>
  );
}

export default MyProjects;
