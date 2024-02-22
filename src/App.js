import "./App.css";
import AboutMe from "./components/AboutMe";
import AdditionalSkills from "./components/AdditionalSkills";
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
    </div>
  );
}

export default App;
