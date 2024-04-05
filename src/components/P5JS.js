import { Rnd } from "react-rnd";
import { ReactP5Wrapper } from "@p5-wrapper/react";

const P5JS = (props) => {
  function sketch(p5) {
    p5.setup = () =>
      p5.createCanvas(window.innerWidth, window.innerHeight - 100, p5.WEBGL);

    p5.draw = () => {
      p5.background(250);
      p5.normalMaterial();
      p5.push();
      p5.rotateZ(p5.frameCount * 0.01);
      p5.rotateX(p5.frameCount * 0.01);
      p5.rotateY(p5.frameCount * 0.01);
      p5.plane(800);
      p5.pop();
    };
  }

  return (
    <Rnd
      default={{
        x: 0,
        y: 0,
        width: "100vw",
        height: "95vh",
      }}
      style={{
        position: "absolute",
        zIndex: 1,
        backgroundColor: "rebeccapurple",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <ReactP5Wrapper sketch={sketch} />;
    </Rnd>
  );
};

export { P5JS };
