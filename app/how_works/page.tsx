"use client";
import TheStep from "./TheStep";
import TheTestStep from "../../components/Slider/Step.tsx";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Particle from "../header/Particle";

// import { useState } from "react";
// import Step from "./Slider/Step";
// import Slider from "./Slider/Slider/page";
// import Form from "./Slider/Form/page";
// import "./styles.css";

export default function How_Works() {
  useEffect(() => {
    AOS.init({});
  }, []);

  // const [currentIndex, setCurrentIndex] = useState(0);

  // const _handleIndexChange = (index) => {
  //   setCurrentIndex(index);
  // };

  // const _handleNext = (currentIndex) => {
  //   setCurrentIndex(currentIndex + 1);
  // };

  // const _handleComplete = () => {};
  return (
    <>
      <section className="bg-gradient-to-t from-[#140E18]  to-[#140E1800] relative">
        <div className="hero-bg  lg:h-screen h-[80vh] w-screen  relative">
          <div className="custom-container h-full flex justify-center pt-24 md:justify-between flex-col-reverse md:flex-row pb-12 md:pb-0">
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
              className="md:w-1/2 w-full h-full flex justify-start lg:justify-center md:pt-20 pt-0 relative z-50 items-start md:items-center lg:items-start flex-col my-12 lg:my-0 mt-20"
              data-aos="fade-right"
              data-aos-delay="2000"
            >
              <div className="cursor-pointer flex items-center bg-[#213851] gap-4 relative -z-10 rounded-full w-fit px-4 py-3 mb-12 lg:mb-2">
                <div className="bg-white rounded-full p-2">
                  <FaArrowRight fill="#213851" />
                </div>

                <p>Learn how to make AI generated designs for your store</p>
              </div>
              <h1 className="text-white font-title font-bold xl:text-5.5xl taxt-start lg:leading-[1.2] md:text-4.4xl text-2xl md:text-center w-2/3 mr-auto md:mr-0 md:w-full lg:text-start leading-tight mb-4">
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

              <div className=" hidden md:flex justify-end mt-8">
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
      {/* 
      <div className="App">
        <div className="container">
          <Step currentIndex={currentIndex} />
        </div>
        <Slider onChange={_handleIndexChange} currentIndex={currentIndex} />

        <div className="form-container">
          <Form
            currentIndex={currentIndex}
            handleNext={_handleNext}
            handleComplete={_handleComplete}
          />
        </div>
      </div>
      */}
      <TheStep />
      <div className=" absolute right-0 top-0 h-full w-[100%] z-[-10]">
        <Particle />
      </div>
    </>
  );
}
