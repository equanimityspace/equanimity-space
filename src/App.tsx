import Stars from "./components/Stars";
import Rocket from "./components/Rocket";
import Planet from "./components/Planet";
import Card from "./components/Card";

function App() {
  return (
    <div className="space-container container-fluid bg-black min-vh-100 vw-100 p-0 position-relative">
      <Stars />
      <Rocket />
      <Planet />
    </div>
  );
}

export default App
