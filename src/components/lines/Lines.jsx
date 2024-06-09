import "./Lines.css";

function Lines() {
  return (
    <>
      <div id="gradient"></div>
      <div id="gradient-box"></div>
      <section id="lines">
        <marquee direction="right">
          Level up your life, level up the world. Level up your life, level up
          the world
        </marquee>
        <marquee  direction="left">
          Beyond life, find purpose. Beyond life, find purpose. Beyond life,
          find purpose.
        </marquee>
        <marquee direction="right" className="new">
          Break the mold, create your own path. Break the mold, create your own
          path. Break the mold, create your own path. Break the mold, create
          your own path. Break the mold, create your own path. Break the mold,
          create your own path.
        </marquee>
        <marquee  direction="left">
          From scroll to actions. From scroll to actions. From scroll to
          actions.
        </marquee>
        <marquee  direction="right">
          Dream big, dream together. Dream big, dream together. Dream big, dream
          together.
        </marquee>
      </section>
    </>
  );
}

export default Lines;
