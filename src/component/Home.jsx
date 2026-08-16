
import Profile from "../assets/SiddharthKedarMohantyresume.pdf"

import img from "../assets/IMG_20260807_195042.png"
import { CiDesktopMouse1 } from "react-icons/ci";
import { FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Home=()=> {
  return (
    <div id="home" className="main">
      <div className="left">
        <div className="span">Siddharth Mohanty</div>

        <div className="title">
          <p>I'm</p>
          <p id="element">Siddharth Mohanty</p>
        </div>

        <div className="summary">
          Experienced frontend developer with a passion for creating visually stunning and user-friendly websites.
        </div>

        <div className="btn2">
          <button id="sambtn" className="samebtn">Hire Me</button>
          <a href={Profile} download><button className="samebtn">Download CV <i className="fa-regular fa-file-lines"></i></button></a>
        </div>

        <div className="socialicon">
          <a className="linktags" href="https://www.instagram.com/monty__1708?igsh=MWRpenBpdmFxd3h3Yg==" target="_blank" rel="noreferrer"><div className="media"><FaInstagram /></div></a>
          <a className="linktags" href="https://www.linkedin.com/in/siddharth-mohanty-286737181?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer"><div className="media"><FaLinkedin /></div></a>
          <a className="linktags" href="https://www.facebook.com/share/1Aq9pAvLCn/" target="_blank" rel="noreferrer"><div className="media"><FaFacebookSquare /></div></a>
          <a className="linktags" href="https://github.com/siddharth219-coder" target="_blank" rel="noreferrer"><div className="media"><FaGithub /></div></a>
        </div>
      </div>

      <div className="right">
        <div className="img">
          <img src={img} alt="" />
        </div>
      </div>

      <div className="scrollbtn"><CiDesktopMouse1 /> Scroll down</div>
    </div>
  );
};

export default Home;
