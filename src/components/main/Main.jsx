import "./Main.css";
import Text from "../textAnimation/Text";
import { useEffect, useRef, useState } from "react";
function Main() {
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [removeBackground, setRemoveBackground] = useState(false);
  const [mainHeight, setMainHeight] = useState(0);

  useEffect(() => {
    const mainElement = containerRef.current;
    if (mainElement) {
      setMainHeight(mainElement.scrollHeight);
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const buttonHeight = buttonRef.current.offsetHeight;
      if (scrollPosition >= mainHeight + buttonHeight - 5) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }

      if (scrollPosition >= mainHeight + 850) {
        setRemoveBackground(true);
      } else {
        setRemoveBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mainHeight]);

  return (
    <>
      <div id="phone-bg-container" className={removeBackground?"phone-bg-container-none":""}></div>
      <div id="main" ref={containerRef} className="container">
        <div
          className={`fixed-btn ${isAtBottom ? "scroll-up" : ""}`}
          ref={buttonRef}
          id="myButton"
        >
          <a href="#">MINT NOW</a>
        </div>
        <div className="youthspire-heading">
          <img src="./images/youth_heading.png" alt="" />
          <div className="sub-heading">{`{galactic warrior card}`}</div>
        </div>
        <div id="loop">
          <h1>
            <b>Fuel the passion,</b> forge the future Fuel the passion,
            <span>forge the future Fuel the passion,</span>
            <span>
              <i> forge the future .</i>
            </span>
          </h1>
          <h1>
            <b>Fuel the passion,</b> forge the future Fuel the passion,
            <span>forge the future Fuel the passion,</span>
            <span>
              <i> forge the future .</i>
            </span>
          </h1>
          <h1>
            <b>Fuel the passion,</b> forge the future Fuel the passion,
            <span>forge the future Fuel the passion,</span>
            <span>
              <i> forge the future .</i>
            </span>
          </h1>
        </div>
        <div id="main-content">
          <div className="item-contaner">
            <div className="left content-item">
              <div className="heading">ABOUT THE PROJECT</div>
              <div className="sub">YOUTHSPIRE G.W.C</div>
              <div className="para">
                Youthspire G.W.C was founded by the two extraterrestrials deuns
                & biboi who came from the planet of nexus aurora in the Cepheus
                constellation. these interplanetary tourists have come to
                reignite our young generation with the support from the
                visionaries & passionate people on earth guiding them towards
                the creation of meaningful technology designs and purposeful
                development work. their mission is to empower young people to
                craft fulfilling work opportunities that contribute meaningfully
                to society.
              </div>
              <div className="para">
                while automation and ai might shift the job landscape, deuns and
                biboi see it as an opportunity. imagine humans, freed from
                repetitive tasks, soaring into innovation and creativity,
                crafting meaningful work that leaves a positive impact.
              </div>
            </div>
          </div>
          <div className="item-contaner right-item">
            <div className="right content-item">
              <div className="heading">5,000</div>
              <div className="sub">ENVOYS</div>
              <div className="para">
                5,000 ANIMATED CARDS INSPIRED BY 10 POTENT LETTERS - Y, O, U, T,
                H, S, P, I, R, E. EACH LETTER, A SOURCE OF POWER MULTIPLIED BY
                500, UNITING TO FORGE THE ULTIMATE ON-CHAIN U.A.C (ULTIMATE
                ACCESS CARD) FOR EVERY ASPIRING SOUL.
              </div>
            </div>
          </div>
          <div className="item-contaner">
            <div className="left content-item">
              <div className="heading">YOUTHSPIRE G.W.C</div>
              <div className="sub">
                “REVOLUTIONARY MINT Where Contribution Wins MORE”
              </div>
              <div className="para">
                <Text text="Join Deuns & Biboi’s galactic youth on a mission to ignite your potential! Contribute to impactful technology & development with every NFT card purchase in our system. It’s not just about the amount you invest, but about joining a collaborative effort with Deuns & Biboi’s young visionaries from another planet. Aim high and become a Top 5 contributor! You’ll receive a coveted Blue Chip NFT Airdrop hand-picked by Deuns & Biboi and their intergalactic community, sparking collaboration across galaxies. Fall within the Top 100 contributors and unlock valuable token rewards within the DApp. Your name will shine on the dedicated Top 100 board, bridging the gap between worlds." />
              </div>
              <div className="para">
                This isn&rsquot just a one-time mint; it&rsquos an investment in
                the future. We track contributions in real-time for complete
                transparency, and Deuns & Biboi, alongside their galactic youth,
                are committed to long-term engagement. Future incentives are
                planned to ensure your contribution continues to matter. Join
                YouthSpire U.A.C., unleash your potential, and help build a
                brighter future for all, across planets and cultures!
              </div>
            </div>
          </div>
          <div className="item-contaner right-item">
            <div className="right content-item">
              <div className="heading">More Than Art</div>
              <div className="sub">
                “Unlock Utility and Community with YouthSpire U.A.C. Cards”
              </div>
              <div className="para">
                <ul>
                  <li>
                    Community Access & Engagement: Be part of an exclusive
                    community fostering skill-building programs and vibrant
                    interaction.
                  </li>
                  <li>
                    Milestone-Based Rewards: As the project progresses, unlock
                    store ownership percentages, exclusive AR wearables for the
                    next 12 months, token rewards, and more.
                  </li>
                  <li>
                    Premium DApp Experience: Enjoy lifetime premium status,
                    exclusive services, and airdrops from future collections.
                  </li>
                  <li>
                    Premium DApp Experience: Enjoy lifetime premium status,
                    exclusive services, and airdrops from future collections.
                  </li>
                  <li>
                    Partner Perks & Discounts: Score exclusive deals and offers
                    from partner companies just for being a cardholder.
                  </li>
                </ul>
                Top Contributor Recognition: Aim high and become a Top 5
                contributor to receive a coveted Blue Chip NFT Airdrop, or land
                within the Top 100 for token rewards. And that&rsquos just the
                beginning! With dedicated DApp development with the help of
                partnership and ongoing engagement initiatives, your YouthSpire
                U.A.C. NFT becomes a key that unlocks a universe of
                possibilities, empowering you to contribute meaningfully and
                shape a brighter future, alongside Deuns & Biboi&rsquos
                intergalactic youth community
              </div>
            </div>
          </div>
          <div className="item-contaner center-item">
            <div className="center content-item">
              <div className="para">
                <Text text="Earning tokens by crushing quests and unlocking exclusive rewards. Donning your digital AR wearables, becoming a beacon in the metaverse. Owning a piece of the Youthspire ecosystem, your stake growing with every step." />
              </div>
              <div className="para">
                <Text text="This is your chance to: Join a thriving Discord community, your voice shaping the future. Become a top contributor, earning a coveted Blue Chip NFT airdrop. Leave your mark on the world, building a legacy for generations to come." />
              </div>
              <div className="para">
                <Text text="The future is in your hands. Grab your NFT, step onto the platform, and let&rsquos rewrite the narrative. Together,  well unlock potential, ignite change, and make Youthspire not just a roadmap, but a revolution." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
