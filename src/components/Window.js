import "./Window.css";
import Draggable from "react-draggable";

const Window = (props) => {

  return (
    <Draggable onStart={() => props.onClick(props.index)}>
      <img
        className={props.className ?? "default"}
        draggable={props.draggable ?? "false"}
        style={{ zIndex: props.index }}
        alt={props.alt ?? ""}
        src={props.src}
      />
    </Draggable>
  );
};

export default Window;
