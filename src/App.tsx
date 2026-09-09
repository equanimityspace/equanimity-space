import Stars from "./components/Stars";
import Rocket from "./components/Rocket";
import Planet from "./components/Planet";
import Project from "./utils/Projects";

function App() {
  return (
    <div className="space-container container-fluid bg-black min-vh-100 vw-100 p-0 position-relative">
      <Stars />
      <Rocket />
      <Planet />
      <Project />
    </div>
  );
}

export default App
