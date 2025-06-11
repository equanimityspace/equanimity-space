function Planets() {
  return (
    <div className="solar-system">
      {/* Sun */}
      <div className="sun">
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="sun-gradient">
              <stop offset="5%" stopColor="#FFD450" />
              <stop offset="95%" stopColor="#FF8C00" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="100" fill="url(#sun-gradient)" />
        </svg>
      </div>

      {/* Planet 1 */}
      <div className="orbit orbit-one">
        <div className="planet planet-one">
          <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="planet-one-gradient">
                <stop offset="5%" stopColor="#cf3000" />
                <stop offset="95%" stopColor="#703725" />
              </radialGradient>
            </defs>
            <circle cx="25" cy="25" r="25" fill="url(#planet-one-gradient)" />
          </svg>
        </div>
      </div>

      {/* Planet 2 */}
      <div className="orbit orbit-two">
        <div className="planet planet-two">
          <svg width="90" height="90" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="planet-two-gradient">
                <stop offset="5%" stopColor="#6278f0" />
                <stop offset="95%" stopColor="#2f386a" />
              </radialGradient>
            </defs>
            <circle cx="45" cy="45" r="45" fill="url(#planet-two-gradient)" />
          </svg>
        </div>
      </div>

      {/* Planet 3 */}
      <div className="orbit orbit-three">
        <div className="planet planet-three">
          <svg width="130" height="130" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="planet-three-gradient">
                <stop offset="5%" stopColor="#74dd94" />
                <stop offset="95%" stopColor="#515e51" />
              </radialGradient>
            </defs>
            <circle cx="65" cy="65" r="65" fill="url(#planet-three-gradient)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Planets;
