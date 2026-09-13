import ParticleText from "../components/ParticleText";
import TextType from "../components/TextType";

function HeaderText() {
  return (
    <div className="row justify-content-center text-center w-100">
      <div className="col-12 col-lg-10">
        <ParticleText
          text="Solutions for Tomorrow"
          particleSize={2.2}
          density={4}
          color="#f8fafc"
          highlightColor="#8b5cf6"
          scatter={80}
          gatherDuration={1600}
          stagger={420}
          pointerRepel={42}
          repelRadius={120}
          idleDrift={0.8}
          trigger="mount"
          fontSize="clamp(3rem, 12vw, 8rem)"
          fontWeight={800}
          fontFamily="inherit"
          glow
        />
        <div className="mt-3">
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
