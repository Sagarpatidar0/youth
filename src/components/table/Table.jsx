import "./Table.css";
import { useState, useEffect, useRef } from "react";
import FOG from "vanta/dist/vanta.fog.min";
import Rank from "./Rank";

const users = [
  {
    rank: 1,
    username: "User 1",
    img: "https://showdown.win/_next/image?url=https%3A%2F%2Fshowdownimages.s3.ap-south-1.amazonaws.com%2FTSAS_Skull.png&w=64&q=75",
    score: 100,
  },
  {
    rank: 2,
    username: "User 2",
    img: "https://showdown.win/_next/image?url=https%3A%2F%2Fshowdownimages.s3.ap-south-1.amazonaws.com%2FTSAS_Skull.png&w=64&q=75",
    score: 90,
  },
  {
    rank: 3,
    username: "User 3",
    img: "https://showdown.win/_next/image?url=https%3A%2F%2Fshowdownimages.s3.ap-south-1.amazonaws.com%2FTSAS_Skull.png&w=64&q=75",
    score: 80,
  },
  {
    rank: 4,
    username: "User 4",
    img: "https://showdown.win/_next/image?url=https%3A%2F%2Fshowdownimages.s3.ap-south-1.amazonaws.com%2FTSAS_Skull.png&w=64&q=75",
    score: 70,
  },
  {
    rank: 5,
    username: "User 5",
    img: "https://showdown.win/_next/image?url=https%3A%2F%2Fshowdownimages.s3.ap-south-1.amazonaws.com%2FTSAS_Skull.png&w=64&q=75",
    score: 60,
  },
  {
    rank: 1,
    username: "User 1",
    img: "https://showdown.win/_next/image?url=https%3A%2F%2Fshowdownimages.s3.ap-south-1.amazonaws.com%2FTSAS_Skull.png&w=64&q=75",
    score: 100,
  },
  {
    rank: 2,
    username: "User 2",
    img: "https://showdown.win/_next/image?url=https%3A%2F%2Fshowdownimages.s3.ap-south-1.amazonaws.com%2FTSAS_Skull.png&w=64&q=75",
    score: 90,
  },
  {
    rank: 3,
    username: "User 3",
    img: "https://showdown.win/_next/image?url=https%3A%2F%2Fshowdownimages.s3.ap-south-1.amazonaws.com%2FTSAS_Skull.png&w=64&q=75",
    score: 80,
  },
  {
    rank: 4,
    username: "User 4",
    img: "https://showdown.win/_next/image?url=https%3A%2F%2Fshowdownimages.s3.ap-south-1.amazonaws.com%2FTSAS_Skull.png&w=64&q=75",
    score: 70,
  },
  {
    rank: 5,
    username: "User 5",
    img: "https://showdown.win/_next/image?url=https%3A%2F%2Fshowdownimages.s3.ap-south-1.amazonaws.com%2FTSAS_Skull.png&w=64&q=75",
    score: 60,
  },
];

function Table() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  const [activeTab, setActiveTab] = useState("rank");
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div id="rank_contener" ref={myRef}>
      <div id="rank">
        <div id="rank_hd">PARTICIPATE IN EPIC CLAN BATTLES IN TOURNAMENTS</div>
        <div className="tabs ">
          <div
            className={activeTab === "rank" ? "tab active_tab" : "tab"}
            onClick={() => setActiveTab("rank")}
          >
            RANK
          </div>
          <div
            className={activeTab === "challenges" ? "tab active_tab" : "tab"}
            onClick={() => setActiveTab("challenges")}
          >
            CHALLENGES
          </div>
        </div>
        <div id="rank_table">
          <div id="table_hd">
            <div >Rank</div>
            <div >Username</div>
            <div >NFT ID</div>
            <div >Score</div>
          </div>

          <Rank users={users} />
        </div>
      </div>
    </div>
  );
}

export default Table;
