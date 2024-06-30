import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";
import { useEffect, useState } from "react";

const CursorManager = (props) => {
  const [cursorColor, setCursorColor] = useState("red");
  // This is an array of portals on the screen in the global frame. 
  const [screenPortals, setScreenPortals] = useState({}) 

  function loadPortals (windows) {
    // Input: all the windows of the screen (portals are in the local frame)
    // Processing: change coordinates of the windows and store them in the screenPortals
    // output: screenPortals contains all the portals in global frame 

  }

  function updateWindow() {
    // When the window is moved, the coordinates need to be revised 
    // I should pass a vector that 

  }

  return (
    <CustomCursor
      targets={[".refsurf-control", "map"]}
      customClass="custom-cursor"
      dimensions={35}
      strokeColor={"#000"}
      strokeWidth={2}
      fill={cursorColor}
      smoothness={{
        movement: 1,
        scale: 0.2,
        opacity: 0.5,
      }}
      targetOpacity={0.5}
    />
  );
};

export default CursorManager;