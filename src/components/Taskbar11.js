import "../stylesheets/Taskbar11.css";
import Windows10Logo from "./windows-icons/windows10";
import WindowsSearch from "./windows-icons/windowsSearch";
import TaskView from "./windows-icons/taskview";
import WindowsMore from "./windows-icons/windowsMore";
import Windows10Charging from "./windows-icons/windows10Charging";
import Windows10Wifi from "./windows-icons/windows10Wifi";
import WindowsMute from "./windows-icons/windowsMute";
import Windows10Notifications from "./windows-icons/windows10Notification";
import { useContext } from "react";
import GameManager from "../managers/GameManager";
const Taskbar11 = (props) => {
  const GameMan = useContext(GameManager);
  return (
    <div className="taskbar-container">
      <div className="taskbar-leftside">
        <Windows10Logo />
        <div className="search-container">
          <WindowsSearch />
          <p className="search-text">Type here to search</p>
        </div>
        <TaskView />
      </div>
      <div className="taskbar-rightside">
        {/* <p className="screen-controls" onClick={GameMan.previousScreen}>
          {"<"}
        </p>
        <p className="screen-controls" onClick={GameMan.nextScreen}>
          {">"}
        </p> */}

        <WindowsMore />
        <Windows10Charging />
        <Windows10Wifi />
        <WindowsMute />
        <p className="date-time">ENG</p>
        <p className="date-time">{"10:09"}</p>
        <p className="date-time">01/12/2022</p>
        <Windows10Notifications />
      </div>
    </div>
  );
};

export default Taskbar11;
