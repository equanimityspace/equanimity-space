import '../App.css';

function Stars() {
  // create star field
  const stars: number[] = [];
  for (let i = 0; i < 1000; i++) {
    stars.push(i);
  }

  //   for each num in arr stars, create a unique div with a random position for the small star
  return (
    <div className="position-fixed top-0 left-0 vw-100 vh-100">
      {stars.map((star) => {
        const styleTop: string = Math.random() * 100 + "%";
        const styleLeft: string = Math.random() * 100 + "%";

	// Random star twinkle
	const animDuration: string = Math.random() * 3 + 2 + "s";
	const animDelay: string = Math.random() * 5 + "s";

        return (
          <div
            key={star}
            className="bg-white star-twinkle"
            style={{
              position: "absolute",
              width: "1px",
              height: "1px",
              top: styleTop,
              left: styleLeft,
              pointerEvents: "none",
              animationDuration: animDuration,
              animationDelay: animDelay,
              opacity: 0.1, // Render with minimum opacity to avoid "popping" effect for first 5s
            }}
          ></div>
        );
      })}
    </div>
  );
}

export default Stars;
