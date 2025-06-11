function Stars() {
  // create star field
  const stars: number[] = [];
  for (let i = 0; i < 1000; i++) {
    stars.push(i);
  }

  //   for each num in arr stars, create a unique div with a random position for the small star
  return (
    <>
      {stars.map((star) => {
        const styleTop: string = Math.random() * 100 + "%";
        const styleLeft: string = Math.random() * 100 + "%";
        return (
          <div
            key={star}
            className="star"
            style={{
              width: "1px",
              height: "1px",
              top: styleTop,
              left: styleLeft,
            }}
          ></div>
        );
      })}
    </>
  );
}

export default Stars;
