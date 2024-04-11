import Screen from "../components/Screen";
import { useState } from "react";

const Screen4 = (props) => {
  const [ordWindows, setOrdWindows] = useState([
    {
      layer: 4,
      src: "./S4_Chip/video_transcript.png",
      dimensions: {
        top: 113,
        left: 832,
        width: 836,
        height: 853,
      },
    },
    {
      layer: 3,
      src: "./S4_Chip/hiteam.png",
      dimensions: {
        top: 240,
        left: 39,
        width: 678,
        height: 767,
      },
    },
    {
      layer: 2,
      src: "./S4_Chip/audio.png",
      dimensions: {
        top: 59,
        left: 330,
        width: 888,
        height: 399,
      },
    },
    {
      layer: 1,
      src: "./S4_Chip/discord_rilla.png",
      dimensions: {
        top: 585,
        left: 717,
        width: 485,
        height: 422,
      },
    },
  ]);

  return (
    <Screen
      windows={ordWindows}
      setWindows={setOrdWindows}
      backgroundImage={"./S4_Chip/Background.jpg"}
    />
  );
};

export default Screen4;
