import Preview from "./DesktopPreview";
import { animated, useSpring } from "@react-spring/web";

const ScreenSwitcher = (props) => {
  const spring = useSpring({
    left: props.show ? 0 : window.innerWidth,
  });

  return (
    <animated.div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#000D",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        zIndex: 999,
        ...spring,
      }}
    >
      <div style={{ display: "flex" }}>
        <Preview
          onClick={() => props.onClick(1)}
          imgsrc={"./S1_Pippin/Background.png"}
        />
        <Preview
          onClick={() => props.onClick(2)}
          imgsrc={"./S2_Matt/Background.png"}
        />
        <Preview
          onClick={() => props.onClick(3)}
          imgsrc={"./S3_Rilla/Background.jpeg"}
        />
      </div>
      <div style={{ display: "flex" }}>
        <Preview
          onClick={() => props.onClick(4)}
          imgsrc={"./S4_Chip/Background.jpg"}
        />
        <Preview
          onClick={() => props.onClick(5)}
          imgsrc={"./S5_Kalervo/Background.jpeg"}
        />
        <Preview
          onClick={() => props.onClick(6)}
          imgsrc={"./S6_Enric/Background.jpg"}
        />
      </div>
      <div style={{ display: "flex" }}>
        <Preview
          onClick={() => props.onClick(7)}
          imgsrc={"./S7_Femke/Background.jpeg"}
        />
        <Preview
          onClick={() => props.onClick(8)}
          imgsrc={"./S8_Vadim/Background.jpeg"}
        />
        <Preview
          locked
          onClick={() => props.onClick(9)}
          imgsrc={"./S9_Shahrom/Background.jpg"}
        />
      </div>
    </animated.div>
  );
};

export default ScreenSwitcher;
