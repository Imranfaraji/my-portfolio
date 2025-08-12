// import Hero from "./Hero";
// import Skills from "./Skills";
// import Projects from "./Projects";
// import Contact from "./Contact";

import About from "../../component/Home/About";
import Contact from "../../component/Home/Contact";
import Hero from "../../component/Home/Hero";
import ProjectSection from "../../component/Home/ProjectSection";
import SkillSection from "../../component/Home/SkillSection";

const HomePage = () => {
  return (
    <>
      <div className=" w-full text-white " id="hero">
        <Hero></Hero>
      </div>
      <div className=" overflow-hidden text-white " id="about">
        <About></About>
      </div>

      <div className=" text-white " id="skills">
        <SkillSection></SkillSection>
      </div>

      <div className=" text-white text-center" id="projects">
        <ProjectSection></ProjectSection>
      </div>

      <div className=" text-white text-center" id="contact">
        <Contact></Contact>
      </div>
    </>
  );
};

export default HomePage;
