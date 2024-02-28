"use client";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { Step } from "@/components";
import { Slider } from "@/components";
import { Form } from "@/components";
import { App } from "@/components";
import "../../components/Slider/styles.css";

export default function TheStep() {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const _handleIndexChange = (index) => {
  //   setCurrentIndex(index);
  // };

  // const _handleNext = (currentIndex) => {
  //   setCurrentIndex(currentIndex + 1);
  // };

  // const _handleComplete = () => {};
  return (
    <section className="whatwedo-bg py-28">
      <div className="relative custom-container z-10 ">
        <div className="sr md:py-28 py-0 pb-20  overflow-x-hidden" id="Appy">
          <div>
            <h2 className="text-white font-heroFont font-bold lg:text-5.5xl mb-12 md:text-4.4xl text-2xl text-start md:text-center leading-tight">
              Step-By-Step Guide
              <br />
              <span className="gradient-text"> to Uploading Products </span>
            </h2>
          </div>

          <App />
          {/* <div className="App flex w-full">
            <div className="container w-1/4">
              <Step currentIndex={currentIndex} />
            </div>
            <div className=" w-14">
              <Slider
                onChange={_handleIndexChange}
                currentIndex={currentIndex}
              />
            </div>
            <div className="form-container w-1/2">
              <Form
                currentIndex={currentIndex}
                handleNext={_handleNext}
                handleComplete={_handleComplete}
              />
            </div>
            <div className="form-container w-1/2">
              <Form
                currentIndex={currentIndex}
                handleNext={_handleNext}
                handleComplete={_handleComplete}
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
