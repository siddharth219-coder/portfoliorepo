import { FaArrowTurnDown } from "react-icons/fa6";

const Contact=()=>{
  return (
    <div id="contact" className="getintouch">
      <div className="para">
        <h1>Get in touch</h1>
        <span className="words">Do you have a project in your mind, contact me here</span>
      </div>

      <div className="contactbox">
        <div className="findmebox">
          <div className="mainfind">
            <div className="firstchild">
              Find Me <FaArrowTurnDown />
            </div>
            <p><i className="fa-regular fa-envelope"></i> Email: Siddharthmohanty704@gmail.com</p>
            <p><i className="fa-solid fa-phone"></i> Tel: +91 9348178305</p>
          </div>
        </div>

        <div className="input">
          <div className="nameemail">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
          </div>

          <div className="message">
            <textarea id="input" placeholder="Message"></textarea>
          </div>

          <div className="sendbtn">
            <button className="sendbutton">
              Send <FaArrowTurnDown />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
