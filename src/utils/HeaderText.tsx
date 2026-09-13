import GradientText from "../components/GradientText";
import ParticleText from "../components/GradientText";
import TextType from "../components/TextType";

function HeaderText() {
  return (
    <div className="row justify-content-center text-center w-100">
      <div className="col-12 col-lg-10">
        <GradientText
          colors={["#BE95C4", "#9F86C0", "#942193"]}
          animationSpeed={8}
          showBorder={false}
          className="gradient-text display-1 fw-semibold"
        >
          Solutions for Tomorrow's Problems
        </GradientText>
        <div className="mt-5 fst-italic">
          <TextType
            text={[
              "The world is changing faster than ever before.",
              "It's time to adapt.",
            ]}
            textColors={["white", "#99129c"]}
            typingSpeed={30}
            deletingSpeed={20}
            pauseDuration={2500}
            showCursor
            cursorCharacter="▌"
            cursorBlinkDuration={0.5}
            startOnVisible={true}
            className="h1 h-md-5 mt-5 text-secondary"
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderText;
