import { FaDownload } from "react-icons/fa";

const About =()=>{
  return (
    <div id="about" className="aboutme">
      <div className="aboutbox">
        <h1>About Me</h1>
      </div>

      <div className="contentbox">
        <div className="aboutinfo">
          <h3>My introduction</h3>
          <p>
            I am well-versed in HTML, CSS and JavaScript, and other cutting edge
            frameworks and libraries, which allows me to implement interactive
            features. Additionally, I have experirence working with content
            management systems (CMS) like WordPress.
          </p>
          <button className="aboutinfobtn">
            Download CV <FaDownload />
          </button>
        </div>

        <div className="skillbox">
          <div className="frontend">
            <div className="head"><h3>Frontend</h3></div>
            <div className="skills">
              <span className="set">HTML</span>
              <span className="set">CSS</span>
              <span className="set">Bootstrap</span>
              <span className="set">JavaScript</span>
              <span className="set">Tailwind css</span>
              <span className="set">React</span>
            </div>
          </div>

          <div className="backend">
            <div className="head"><h3>Backend</h3></div>
            <div className="skills">
              <span className="set">Node js</span>
              <span className="set">Express js</span>
              <span className="set">Java</span>
            </div>
          </div>

          <div className="database">
            <div className="head"><h3>Database</h3></div>
            <div className="skills">
              <span className="set">MongoDB</span>
              <span className="set">MySQL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
