import "../stylesheets/MacDock.css";

const ICON_LOCATIONS = {
  FIREFOX: "./Icons/firefox.png",
  CHROME: "./Icons/chrome.png",
  FINDER: "./Icons/finder.png",
  VSCODE: "./Icons/vscode.png",
  PREVIEW: "./Icons/preview.png",
  HD: "./Icons/macintosh_hd.png",
  GARAGEBAND: "./Icons/garage_band.png",
  TEXTEDIT: "./Icons/textedit.png",
  DISCORD: "./Icons/discord.png",
  OBSIDIAN: "./Icons/obsidian.png",
  RIDER: "./Icons/rider.png",
  UNITY: "./Icons/unity.png",
  TRASH_EMPTY: "./Icons/trash_empty.png",
  TRASH_FULL: "./Icons/trash_full.png",
};

/**
 * @param {*} props -> {icons}
 * icons: an array of strings containing names same as ICONS_LOCATIONS keys.
 * @returns Dock component for mac
 */
const MacDock = (props) => {
  return (
    <div className="dock-container">
      <DockIcon src={ICON_LOCATIONS.FINDER} />

      {props.icons?.map((icon) => (
        <DockIcon src={ICON_LOCATIONS[icon]} />
      ))}

      <div className="divider" />
      {props.trashEmpty ? (
        <DockIcon src={ICON_LOCATIONS.TRASH_EMPTY} />
      ) : (
        <DockIcon src={ICON_LOCATIONS.TRASH_FULL} />
      )}
    </div>
  );
};

const DockIcon = (props) => {
  return <img className="icon" alt="dock icon" src={props.src} />;
};

export default MacDock;
