import Image from "next/image";

export default function ThePotencial() {
  return (
    <div className="potential_bg">
      <section className="lg:mx-auto  px-5 max-w-[1280px] ">
        <div className="">
          <h2 className=" text-center font-heroFont text-5.5xl">
            Explore the
            <span className="gradient-text font-bold"> Potential</span>
          </h2>
          {/* <h4>Recently Uploaded NFTs</h4> */}
          <div
            className="flex gap-6 mt-5"
            data-aos="zoom-out"
            data-aos-duration="1000"
          >
            <div className="flex flex-col gap-6">
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
            <div className="flex flex-col gap-6 mt-16">
              {" "}
              <Image
                className=" w-72"
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
              {" "}
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
    </div>
  );
}
