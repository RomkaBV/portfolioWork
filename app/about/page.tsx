"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Particle from "../components/Particle";
import Image from "next/image";
import TheOurMission from "./TheOurMission";
import TheTeam from "./TheTeam";
export default function Page() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <section className="about-bg ">
        <div className="bg-gradient-to-t from-[#140E18]  to-[#140E1800]">
          <div className="custom-container  h-full flex flex-row justify-between relative z-50 items-center pt-36 ">
            <Image
              className="absolute top-0 left-0 w-1/2"
              src="/red-circle.png"
              alt=""
              width={330}
              height={330}
            />

            <Image
              className="  absolute -bottom-[10%] left-[15%] w-2/3"
              src="/white-cricle.png"
              alt="circle"
              width={300}
              height={300}
            />
            <div className="text-center w-full flex flex-col justify-center items-center">
              <div
                className="lg:w-[750px] w-full mb-8 aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <h1 className="font-heroFont text-white   xl:text-5.5xl  lg:leading-[1.2] md:text-4.4xl text-2xl text-center leading-tight mb-4">
                  <span className="gradient-text">Animade </span>
                  is <span className="gradient-text">Designed </span>
                  to <span className="gradient-text">Simplify </span>
                  the <span className="gradient-text">Process</span>
                </h1>
              </div>

              <p className="text-lg font-medium text-center">
                We’re proud to provide the tools and resources that AI Artists
                and Entrepreneurs need to <br />
                thrive in a rapidly-evolving digital.
              </p>
            </div>
          </div>
          <Image
            className="absolute right-0 top-[-15%] w-1/2 "
            src="/yellow-circle.png"
            alt="yellow-circle"
            width={330}
            height={330}
          />
        </div>
      </section>
      <div className="flex justify-center mt-5">
        <iframe
          width="950px"
          height="550px"
          src="https://www.youtube.com/embed/AG-1JsVGt7c?si=RvGGlEMJml-2lg7D"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <TheOurMission />
      <TheTeam />
      <div className=" absolute right-0 top-0 h-full w-[80%] z-[-10]">
        <Particle />
      </div>
    </>
  );
}
