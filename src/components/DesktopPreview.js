const Preview = (props) => {
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
