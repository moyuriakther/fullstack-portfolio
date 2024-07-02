import Typewriter from "typewriter-effect";

function Title() {
  return (
    <Typewriter
      options={{
        strings: [
          "Frontend Developer",
          "Full Stack Developer",
          "Backend Developer",
          "Software Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Title;
