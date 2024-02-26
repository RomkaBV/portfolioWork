"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";

export default function TheHero() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <div className="bg-gradient-to-t from-[#140E18]  to-[#140E1800] ">
        <section className="hero-bg relative w-screen h-screen flex items-center ">
          <div className="mt-96 mb-96 h-screen  flex flex-col-reverse md:mt-0 md:mb-0 md:flex-row justify-between   items-center lg:mx-auto  px-5 max-w-[1280px]">
            <div className="md:w-6/12">
              <div className="">
                <Image
                  className=" absolute top-0 left-[10%] w-1/2"
                  src="/red-circle.png"
                  alt="red-circle"
                  width={330}
                  height={330}
                />
                <Image
                  className="absolute top-0 right-[10%] w-1/2 "
                  src="/yellow-circle.png"
                  alt="yellow-circle"
                  width={330}
                  height={330}
                />

                <div
                  className=""
                  data-aos="fade-right"
                  data-aos-duration="2000"
                >
                  <h1 className="font-heroFont text-4.4xl lg:text-5.5xl ">
                    AI Graphic Design tool for your
                    <span className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-[#C70025] to-[#F8BA53] ">
                      Ecommerce Products
                    </span>
                    <span className=""></span>
                  </h1>
                  <p className=" my-4 text-lg font-headerFont">
                    Harness the power of AI, generate high-quality designs
                    quickly and easily. Get ready to launch unique products to
                    your store soon - All in one place, with no upfront costs
                  </p>
                  <p className="mb-4  text-lg font-headerFont">
                    Be prepared for the new era of product creation and use
                    Animade to create remarkable designs. Animade will soon
                    seamlessly integrate innovative AI image generation directly
                    to your E-Commerce channels.
                  </p>
                  <div className="flex gap-2 relative z-[999]">
                    <button className="  active:scale-y-110  md:text-wrap   lg:text-nowrap py-3 px-8  bg-red-600 rounded-md hover:bg-transparent border-solid border border-red-500">
                      Sign up for Free
                    </button>
                    <button className="  ml-5  md:text-wrap active:scale-y-110  lg:py-3 px-8 bg-purple-500 rounded-md hover:bg-transparent border-solid border border-purple-500">
                      Explore our sandbox
                    </button>
                  </div>
                </div>
                <Image
                  className="absolute  bottom-[-15%] left-[20%] w-1/2"
                  src="/white-cricle.png"
                  alt="circle"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div
              className=" md:w-6/12 mr-2"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div className="w-auto animte-float">
                <Image
                  className=""
                  alt="hero-icon"
                  width={456}
                  height={456}
                  src="/hero.png"
                />
              </div>
              <div className=" hidden md:flex justify-end">
                <Link href="#Offer" className="flex">
                  <Image
                    alt="icon"
                    width={90}
                    height={90}
                    src="/bedge.png"
                    className="scroll-down"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
