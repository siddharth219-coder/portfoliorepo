import { FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="title2">
        <h1>Siddharth Mohanty</h1>
      </div>

      <div className="litags">
        <ul>
          <a id="travelbtn" href="#home"><li>Home</li></a>
          <a id="travelbtn" href="#about"><li>About</li></a>
          <a id="travelbtn" href="#projects"><li>Projects</li></a>
          <a id="travelbtn" href="#contact"><li>Contact</li></a>
        </ul>
      </div>

      <div className="socialmedia">
        <div className="footericon"><FaInstagram /></div>
        <div className="footericon"><FaLinkedin /></div>
        <div className="footericon"><FaFacebookSquare /></div>
        <div className="footericon"><FaGithub /></div>
      </div>

      <div className="copyright">
        <h5>Copyright © Sidharth Mohanty - All rights reserved</h5>
      </div>
    </footer>
  );
};

export default Footer;
