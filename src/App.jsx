import NavBar from "./components/NavBar"
import SectionIntro from "./components/SectionIntro"
import SectionAbout from "./components/SectionAbout"
import SectionSkills from "./components/SectionSkills"
import SectionProjects from "./components/SectionProjects"
import SectionContact from "./components/SectionContact"
import Footer from "./components/Footer"


function App() {

  return (
    <>
      <div className="wrapper">
        <NavBar/>
        <SectionIntro/>
        <SectionAbout/>
        <SectionSkills/>
        <SectionProjects/>
        <SectionContact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
