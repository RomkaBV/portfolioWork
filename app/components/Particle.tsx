"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const Particle = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={{
          autoPlay: true,
          background: {
            color: {
              value: "transparent",
            },
          },
          particles: {
            color: {
              value: "#fff",
            },
            move: {
              angle: {
                offset: 0,
                value: 90,
              },
              decay: 0,
              direction: "top",

              straight: false,

              enable: true,
              speed: 1,
            },
            number: {
              density: {
                enable: true,
              },

              value: 400,
            },
            size: {
              value: 1,
            },
          },
        }}
      />
    );
  }

  return <></>;
};

export default Particle;
