import About from "./component/About"
import Footer from "./component/Footer"
import Contact from "./component/Getintouch"
import Home from "./component/Home"
import Navbar from "./component/Navbar"
import Projects from "./component/Projects"
import BACKIMG from "./assets/Gemini_Generated_Image_nj8me1nj8me1nj8m.png"




const App=()=>{
    return(
        <main>
            <div className="groupings">
                <Navbar/>
                <Home/>
                <About/>
                <Projects/>
                <Contact/>
                <Footer/>
            </div>
        </main>
    )
}

export default App