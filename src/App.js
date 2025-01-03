import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Projects from "./Components/Projects/Projects";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";


function App() {
  return (
    <div>


      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects/>
      <Contact />



    </div>
  );
}

export default App;
