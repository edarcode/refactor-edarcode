import Banner from "./Banner/Banner";
import css from "./css.module.css";
import Experiences from "./Experiences/Experiences";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";

export default function Home() {
  return (
    <div className={css.home}>
      <Banner />
      <Experiences />
      <Projects />
      <Skills />
    </div>
  );
}
