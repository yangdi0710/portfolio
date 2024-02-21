import "./App.css";
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
    </div>
  );
}

export default App;
