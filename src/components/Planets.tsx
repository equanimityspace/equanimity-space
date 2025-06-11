// import { motion } from "motion/react";

function Planets() {
  // create animation

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* sun */}
      <div>
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* create orange gradient for sun */}
            <radialGradient id="sun-gradient">
              <stop offset="5%" stopColor="#FFD450" />
              <stop offset="95%" stopColor="#FF8C00" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="100" fill="url(#sun-gradient)" />
        </svg>
      </div>

      {/* planet one */}
      <div>
        <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* create orange gradient for sun */}
            <radialGradient id="planet-one-gradient">
              <stop offset="5%" stopColor="#cf3000" />
              <stop offset="95%" stopColor="#703725" />
            </radialGradient>
          </defs>
          <circle cx="25" cy="25" r="25" fill="url(#planet-one-gradient)" />
        </svg>
      </div>

      {/* planet two */}
      <div>
        <svg width="90" height="90" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* create orange gradient for sun */}
            <radialGradient id="planet-two-gradient">
              <stop offset="5%" stopColor="#6278f0" />
              <stop offset="95%" stopColor="#2f386a" />
            </radialGradient>
          </defs>
          <circle cx="45" cy="45" r="45" fill="url(#planet-two-gradient)" />
        </svg>
      </div>

      {/* planet three */}
      <div>
        <svg width="130" height="130" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* create orange gradient for sun */}
            <radialGradient id="planet-three-gradient">
              <stop offset="5%" stopColor="#74dd94" />
              <stop offset="95%" stopColor="#515e51" />
            </radialGradient>
          </defs>
          <circle cx="65" cy="65" r="65" fill="url(#planet-three-gradient)" />
        </svg>
      </div>
    </div>
  );
}

export default Planets;
