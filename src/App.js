import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Projects from "./Components/Projects/Projects";
import Education from "./Components/Education/Education";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/Skills/Skills";
import Footer from "./Components/Footer/Footer";
import "./App.css";


function App() {
  return (
    <div className="whole-container">


      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects/>
      <Skills />
      <Contact />
      <Footer />



    </div>
  );
}

export default App;
