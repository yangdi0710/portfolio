import "./App.css";
import Header from "./components/Header";
import Introduce from "./components/Introduce";
import Project from "./components/Project";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Introduce />
      <Project />
    </div>
  );
}

export default App;
