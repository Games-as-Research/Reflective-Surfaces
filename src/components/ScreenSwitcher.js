import { useCallback, useEffect } from "react";
import Preview from "./DesktopPreview";
import { animated, useSpring } from "@react-spring/web";

const ScreenSwitcher = (props) => {
  const spring = useSpring({
    left: props.show ? 0 : window.innerWidth * 5,
  });

  function HandleEscapeHide(e) {
    const { key, keycode } = e;
    if (key === "Escape" && props.show) {
      props.close();
    }
  }

  const keydownCallback = useCallback(HandleEscapeHide, []);

  useEffect(() => {
    window.addEventListener("keydown", keydownCallback);
    return () => {
      window.removeEventListener("keydown", keydownCallback);
    };
  }, [keydownCallback]);

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
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
        }}
      >
        {props.screens.map((screen, idx) => {
          return (
            <Preview
              key={idx}
              locked={screen.locked}
              onClick={() => props.onClick(screen.index)}
              imgsrc={screen.thumbnail}
            />
          );
        })}
      </div>
    </animated.div>
  );
};

export default ScreenSwitcher;
