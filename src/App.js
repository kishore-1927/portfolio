import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Projects from "./Components/Projects/Projects";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/Skills/Skills";


function App() {
  return (
    <div>


      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects/>
      <Skills />
      <Contact />



    </div>
  );
}

export default App;
