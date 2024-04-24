import AppleIcon from "./apple-icons/appleIcon";
import ControlCenter from "./apple-icons/controlCenter";
import AppleReset from "./apple-icons/appleReset";
import DesktopViewer from "./apple-icons/desktopViewer";

import "../stylesheets/MacMenuBar.css";
import { useContext } from "react";
import GameManager from "../managers/GameManager";

const MacMenuBar = (props) => {
  const GameMan = useContext(GameManager);
  return (
    <div className="menubar-container">
      <div className="menubar-leftside">
        <AppleIcon />
        <p className="menubar-program">Finder</p>
        <p className="menubar-item">File</p>
        <p className="menubar-item">Edit</p>
        <p className="menubar-item">View</p>
        <p className="menubar-item">Go</p>
        <p className="menubar-item">Window</p>
        <p className="menubar-item">Help</p>
      </div>

      <div className="menubar-rightside">
        <p className="menubar-item" onClick={GameMan.previousScreen}>
          {"<"}
        </p>

        <p className="menubar-item" onClick={GameMan.nextScreen}>
          {">"}
        </p>

        <DesktopViewer />
        <AppleReset
          onClick={() => {
            GameMan.resetScreen(0);
          }}
        />
        <ControlCenter />
        <p className="menubar-item">Thu Mar 7</p>
        <p className="menubar-item">10:09</p>
      </div>
    </div>
  );
};

export default MacMenuBar;
