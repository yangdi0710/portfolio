import "./App.css";
import AboutMe from "./components/AboutMe";
import AdditionalSkills from "./components/AdditionalSkills";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Introduce from "./components/Introduce";
import Project from "./components/Project";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Introduce />
      <Project />
      <Technologies />
      <AdditionalSkills />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
