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
      <section className="bg-gradient-to-t from-[#140E18]  to-[#140E1800] ">
        <div className="hero-bg relative w-screen h-screen   ">
          <div className="custom-container h-full flex justify-center md:justify-between items-center flex-col-reverse md:flex-row pb-12 tablet:pb-0 relative z-10">
            <Image
              className="absolute top-0 left-0 -z-10 w-1/2"
              src="/red-circle.png"
              alt=""
              width={330}
              height={330}
            />
            <Image
              className="absolute -bottom-[10%] left-[15%] -z-50 w-2/3"
              src="/yellow-circle.png"
              alt=""
              width={330}
              height={330}
            />
            <div
              className="md:w-1/2 w-full  aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <h1 className="font-heroFont text-white  font-bold lg:text-5.5xl md:text-4.4xl text-2xl text-center md:text-start leading-tight mb-4 ">
                AI Graphic Design tool for your
                <span className="gradient-text">Ecommerce Products</span>
                <span className="gradient-text-2"></span>
              </h1>
              <p className=" mb-4  font-headerFont">
                Harness the power of AI, generate high-quality designs quickly
                and easily. Get ready to launch unique products to your store
                soon - All in one place, with no upfront costs
              </p>
              <p className="font-headerFont">
                Be prepared for the new era of product creation and use Animade
                to create remarkable designs. Animade will soon seamlessly
                integrate innovative AI image generation directly to your
                E-Commerce channels.
              </p>
              <div className="flex my-[1em] gap-[1em] ">
                <button className="  active:scale-y-110  md:text-wrap   lg:text-nowrap py-3 px-8  bg-red-600 rounded-md hover:bg-transparent border-solid border border-red-500">
                  Sign up for Free
                </button>
                <button className="  ml-5  md:text-wrap active:scale-y-110  lg:py-3 px-8 bg-purple-500 rounded-md hover:bg-transparent border-solid border border-purple-500">
                  Explore our sandbox
                </button>
              </div>
            </div>

            <div
              className="md:w-1/2 w-3/4 flex justify-center items-end aos-init aos-animate"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div className="animte-float">
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
            <Image
              className="absolute right-0 bottom-0 -z-10 w-1/2"
              src="/white-cricle.png"
              alt=""
              width={300}
              height={300}
            />
          </div>
        </div>
      </section>
    </>
  );
}
