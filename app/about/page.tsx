import Particle from "../components/Particle";
import Image from "next/image";
import TheOurMission from "./TheOurMission";
import TheTeam from "./TheTeam";
export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-t from-[#140E18]  to-[#140E1800]">
        <div className=" absolute right-0 top-0 h-full w-[80%] z-[-10]">
          <Particle />
        </div>
        <div className=" pt-36 about-bg relative  ">
          <Image
            className=" absolute top-[-20%] left-[10%] w-1/3"
            src="/red-circle.png"
            alt="red-circle"
            width={330}
            height={330}
          />

          <Image
            className=" absolute bottom-[-50%] left-[15%] w-2/3"
            src="/white-cricle.png"
            alt="circle"
            width={300}
            height={300}
          />
          <Image
            className="absolute right-0 bottom-[-40%] w-1/2 "
            src="/yellow-circle.png"
            alt="yellow-circle"
            width={330}
            height={330}
          />
          <h1 className="font-heroFont  text-5.5xl text-center">
            <span className="gradient-text">Animade </span>
            is <span className="gradient-text">Designed </span>
            to <br /> <span className="gradient-text">Simplify</span> the
            <span className="gradient-text">Process</span>
          </h1>
        </div>

        <div className="overflow-hidden max-w-[1280px] px-5 m-auto bg-gradient-to-t from-[#140E18]  to-[#140E1800] ">
          <p className="text-center">
            We’re proud to provide the tools and resources that AI Artists and
            Entrepreneurs need to <br />
            thrive in a rapidly-evolving digital.
          </p>
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
    </>
  );
}
