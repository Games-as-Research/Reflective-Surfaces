import AppleIcon from "../icons/appleIcon";
import ControlCenter from "../icons/controlCenter";
import AppleSearch from "../icons/appleSearch";
import DesktopViewer from "../icons/desktopViewer";

import "./MacMenuBar.css";
import { useContext } from "react";
import DataContext from "../contexts/DataContext";

const MacMenuBar = (props) => {
  const DataC = useContext(DataContext);
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
        <p className="menubar-item" onClick={DataC.previousScreen}>
          {"<"}
        </p>

        <p className="menubar-item" onClick={DataC.nextScreen}>
          {">"}
        </p>

        <DesktopViewer />
        <AppleSearch />
        <ControlCenter />
        <p className="menubar-item">Thu Mar 7</p>
        <p className="menubar-item">10:09</p>
      </div>
    </div>
  );
};

export default MacMenuBar;
