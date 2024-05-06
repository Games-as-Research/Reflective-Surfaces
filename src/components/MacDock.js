import "../stylesheets/MacDock.css";

const MacDock = (props) => {
  return (
    <div className="dock-container">
      <DockIcon src={"./icons/finder.png"} />

      {/* Add the rest of icons here */}

      <DockIcon src={"./icons/chrome.png"} />
      <DockIcon src={"./icons/vscode.png"} />
      <DockIcon src={"./icons/preview.png"} />
      <DockIcon src={"./icons/garage_band.png"} />
      <DockIcon src={"./icons/textedit.png"} />
      <DockIcon src={"./icons/discord.png"} />
      <DockIcon src={"./icons/obsidian.png"} />
      <DockIcon src={"./icons/firefox.png"} />
      <DockIcon src={"./icons/rider.png"} />

      <div className="divider" />
      {props.trashEmpty ? (
        <DockIcon src={"./icons/Trash-Empty-icon.png"} />
      ) : (
        <DockIcon src={"./icons/Trash-full-icon.png"} />
      )}
    </div>
  );
};

const DockIcon = (props) => {
  return <img className="icon" alt="dock icon" src={props.src} />;
};

export default MacDock;
