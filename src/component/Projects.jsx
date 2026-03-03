import { FaAward, FaBriefcase } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";

const Projects=()=>{
  return (
    <div id="projects" className="projects">
      <div className="projectbox">
        <h1>Projects</h1>
      </div>

      <div className="cardbox">
        <div className="cards">
          <FaBriefcase size={50} />
          <div className="textofcards"><h3>Completed</h3></div>
          <div className="exp"><label>15+ Finished Projects</label></div>
        </div>

        <div className="cards">
          <MdPeopleAlt size={50} />
          <div className="textofcards"><h3>Clients</h3></div>
          <div className="exp"><label>25+ Happy Clients</label></div>
        </div>

        <div className="cards">
          <FaAward size={50} />
          <div className="textofcards"><h3>Experience</h3></div>
          <div className="exp"><label>7+ Years in Field</label></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
