"use client";
import TheStep from "./TheStep";
import TheQuestions from "./TheQuestions";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Particle from "../header/Particle";

export default function How_Works() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <main className="!overflow-hidden">
      <section className="bg-gradient-to-t from-[#140E18]  to-[#140E1800] relative ">
        <div className="hero-bg ">
          <div className="custom-container relative z-20 h-full flex justify-center pt-24 md:justify-between flex-col-reverse md:flex-row pb-12 md:pb-0">
            <Image
              className="absolute top-0 left-0 w-1/2"
              src="/red-circle.png"
              alt="red-circle"
              width={330}
              height={330}
            />
            <Image
              className=" absolute -bottom-[10%] left-[15%] w-2/3"
              src="/white-cricle.png"
              alt="yellow-circle"
              width={330}
              height={330}
            />
            <Image
              className=" absolute -bottom-[20%] left-[45%] w-2/3"
              src="/yellow-circle.png"
              alt="yellow-circle"
              width={330}
              height={330}
            />

            <div
              className="flex item-start  w-full h-full md:w-full lg:w-1/2  justify-center lg:justify-center items-start md:items-center md:my-2 lg:items-start flex-col my-12 lg:my-0 mt-20"
              data-aos="fade-right"
              data-aos-delay="2000"
            >
              <div className="mb-2 cursor-pointer flex items-center bg-[#213851] gap-4 relative -z-10 rounded-full w-fit px-4 py-3 md:mb-2 lg:mb-12">
                <div className="bg-white rounded-full p-2">
                  <FaArrowRight fill="#213851" />
                </div>

                <p>Learn how to make AI generated designs for your store</p>
              </div>
              <h1 className=" text-2xl text-white font-title font-bold md:text-4.4xl md:text-center w-2/3 mr-auto md:mr-0 md:w-full lg:text-5.5xl taxt-start lg:leading-[1.2] lg:text-start leading-tight mb-4">
                AI Products which Power your <br />
                <span className="gradient-text"> E-Commerce Business</span>
              </h1>
              <p className="text-white font-body mb-8">
                Explore new opportunities with AI design and follow the
                step-by-step guide and start creating free designs for your
                store today!
              </p>
              <Link
                href="/"
                className="active:scale-y-110 bg-[#c70025] hover:text-primary    hover:bg-transparent border-solid border border-red-500 duration-300  p-5 rounded-lg w-3/4 bg-primary text-center justify-center text-white text-base flex items-center font-semibold z-[999] "
              >
                Try with 30 FREE designs monthly{" "}
                <FaArrowRight className="ml-2" />
              </Link>

              <div className=" hidden lg:flex justify-end mt-8">
                <Link href="#Appy" className="flex">
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

            <div
              className="hero-bg-mano h-full lg:w-2/5 lg:z-10 absolute bottom-0 right-0 -z-[1] w-full "
              data-aos="fade-left"
              data-aos-delay="2000"
            ></div>
          </div>
        </div>
      </section>

      <TheStep />
      <TheQuestions />
      <div className=" absolute right-0 top-0 h-full w-[100%] -z-[-10]">
        <Particle />
      </div>
    </main>
  );
}
