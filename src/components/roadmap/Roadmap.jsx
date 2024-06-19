import "./Roadmap.css"

function Roadmap() {
  return (
    <div id="journey">
      <div className="Roadmap">
        <div className="top-heading">
          <img src="images/icon.png" height="80px"  />
          <h1>Roadmap</h1>
        </div>
        <p id="roadmap-subhead">
          Youthspire U.A.C Roadmap is centered around empowering the early
          `&quot;`GEN-Y`&quot;` Era.
        </p>
      </div>
      <div className="multiple-element">
        <div className="roadmap-items">
          <img src="images/1.png" />
          <div className="title">
            <h1>BRIDGING VISIONS</h1>
            <p>
              The collaboration between Humans and Nexus Aurora Young
              extraterrestrials.
            </p>
          </div>
        </div>
        <div className="roadmap-items">
          <img src="images/2.png" />
          <div className="title">
            <h1>NETWORK SPARKS</h1>
            <p>
              This stage adds a network-specific dimension with augmented
              reality experiences..
            </p>
          </div>
        </div>

        <div className="roadmap-items">
          <img src="images/3.png" />
          <div className="title">
            <h1>CO-CREATION</h1>
            <p>This stage involves Odyssey by collaborating with breakmart.</p>
          </div>
        </div>

        <div className="roadmap-items">
          <img src="images/4.png" />
          <div className="title">
            <h1>SPECIAL ACCESS</h1>
            <p>To the YOUTHSPIRE ecosystem and U.A.C only experiences.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap