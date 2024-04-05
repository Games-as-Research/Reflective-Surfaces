import "./Taskbar10.css";
import Windows10Logo from "../icons/windows10";
import WindowsSearch from "../icons/windowsSearch";
import TaskView from "../icons/taskview";
import WindowsMore from "../icons/windowsMore";
import Windows10Charging from "../icons/windows10Charging";
import Windows10Wifi from "../icons/windows10Wifi";
import WindowsMute from "../icons/windowsMute";
import Windows10Notifications from "../icons/windows10Notification";
import { useContext } from "react";
import DataContext from "../contexts/DataContext";
const Taskbar10 = (props) => {
  const DataC = useContext(DataContext);
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
        <p className="screen-controls" onClick={DataC.previousScreen}>
          {"<"}
        </p>
        <p className="screen-controls" onClick={DataC.nextScreen}>
          {">"}
        </p>

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

export default Taskbar10;
