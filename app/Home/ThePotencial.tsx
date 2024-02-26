import Image from "next/image";

export default function ThePotencial() {
  return (
    <section className="potential_bg  relative z-50">
      <div className="bg-gradient-to-t from-[#140E18] via-[#140E1889] to-[#140E1800] absolute bottom-0 bg-opacity-50 w-full h-full "></div>

      <div
        className="custom-container py-28 relative z-10 aos-init aos-animate"
        data-aos="zoom-out"
        data-aos-duration="1000"
      >
        <h2 className=" text-center font-heroFont md:text-4.4xl text-2xl lg:text-5.5xl">
          Explore the
          <span className="gradient-text font-bold"> Potential</span>
        </h2>
        <div className="flex justify-center gap-6">
          <div className="flex justify-center items-start flex-col gap-6">
            <Image
              className=" w-72"
              src="/Rectangle 262.png"
              alt="Hero logo"
              width={291}
              height={291}
            />
            <Image
              className="w-72"
              src="/Rectangle 266.png"
              alt="Hero logo"
              width={291}
              height={291}
            />
            <Image
              className="w-72"
              src="/Rectangle 270.png"
              alt="Hero logo"
              width={291}
              height={291}
            />
          </div>
          <div className="flex flex-col gap-6  mt-[4rem]">
            {" "}
            <Image
              className=" w-72 rounded-[0.7rem]"
              src="/Rectangle 263.png"
              alt="Hero logo"
              width={291}
              height={291}
            />
            <Image
              className="w-72"
              src="/Rectangle 267.png"
              alt="Hero logo"
              width={291}
              height={291}
            />
            <Image
              className="w-72"
              src="/Rectangle 271.png"
              alt="Hero logo"
              width={291}
              height={291}
            />
          </div>
          <div className=" hidden  md:flex flex-col gap-6 ">
            <Image
              className=" w-72"
              src="/Rectangle 264.png"
              alt="Hero logo"
              width={291}
              height={291}
            />
            <Image
              className="w-72"
              src="/Rectangle 268.png"
              alt="Hero logo"
              width={291}
              height={291}
            />
            <Image
              className="w-72"
              src="/Rectangle 272.png"
              alt="Hero logo"
              width={291}
              height={291}
            />
          </div>
          <div className="hidden  md:flex flex-col gap-6 mt-12">
            {" "}
            <Image
              className=" w-72"
              src="/Rectangle 265.png"
              alt="Hero logo"
              width={291}
              height={291}
            />
            <Image
              className="w-72"
              src="/Rectangle 269.png"
              alt="Hero logo"
              width={291}
              height={291}
            />
            <Image
              className="w-72"
              src="/Rectangle 273.png"
              alt="Hero logo"
              width={291}
              height={291}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
