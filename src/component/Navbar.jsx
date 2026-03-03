import { IoDocumentTextOutline } from "react-icons/io5"

const Navbar=()=>{
    return (
        <nav>
            <div className="logo">
              <p className="navname">Siddharth</p>
            </div>

            <div className="navlist">
              <ul>
                <li><a className="anchor" href="#home">Home</a></li>
                <li><a className="anchor" href="#about">About</a></li>
                <li><a className="anchor" href="#projects">Projects</a></li>
                <li><a className="anchor" href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="btn">
              <a className="downcv" href="./assets/SiddharthKedarMohantyresume.pdf" download><button className="cvbtn">Download CV <IoDocumentTextOutline size={13} /></button>
              </a>
            </div>
        </nav>

    )
}

export default Navbar