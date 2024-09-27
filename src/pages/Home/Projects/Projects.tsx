import { EDARCODE } from "../../../database/edarcode";
import ProjectCard from "./ProjectCard/ProjectCard";
import css from "./css.module.css";

export default function Projects() {
  return (
    <section>
      <h3>Proyectos</h3>
      <div className={css.projects}>
        <ProjectCard project={EDARCODE.projects[1]} />
      </div>
    </section>
  );
}
