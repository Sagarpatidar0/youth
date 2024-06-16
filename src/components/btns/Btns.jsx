import  { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Btns.css";

export default function Btns() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="svg-icons">
      <img
        src="images/a.png"
        id="toggleButton"
        alt="sound"
        onClick={toggleAudio}
        className={isPlaying ? "playing" : "paused"}
      />
      <Link target="_blank" to="https://discord.gg/AxnHtxfnsP">
        <img src="images/b.png" alt="discord" />
      </Link>
      <audio ref={audioRef} src="images/samp.mp3" />
    </div>
  );
}
