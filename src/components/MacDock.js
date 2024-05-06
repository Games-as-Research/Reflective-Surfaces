import "../stylesheets/MacDock.css";

const MacDock = (props) => {
  return (
    <div className="dock-container">
      <DockIcon src={"./icons/finder.png"} />
      
      
      
      {/* Add the rest of icons here */}
      
      
      
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
