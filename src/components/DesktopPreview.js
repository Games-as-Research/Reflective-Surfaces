import { IoLockClosed } from "react-icons/io5";

const Preview = (props) => {
  if (props.locked) {
    return (
      <div
        style={{
          display: "flex",
          width: 340,
          height: 240,
          borderWidth: 5,
          borderStyle: "solid",
          borderColor: "#656565",
          borderRadius: 15,
          zIndex: 30,
          marginLeft: 20,
          marginBottom: 20,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff2"
        }}
      >
        <IoLockClosed
          color="#656565"
          size={100}
          style={{ alignSelf: "center" }}
        />
      </div>
    );
  }
  return (
    <img
      style={{
        width: 350,
        height: 250,
        backgroundSize: "cover",
        objectFit: "cover",
        overflow: "auto",
        borderRadius: 15,
        zIndex: 30,
        marginLeft: 20,
        marginBottom: 20,
        opacity: "80%",
      }}
      alt="desktop"
      src={props.imgsrc}
      onClick={props.onClick}
    />
  );
};

export default Preview;
