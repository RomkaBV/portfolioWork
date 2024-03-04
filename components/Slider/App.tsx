"use client";
import { useState } from "react";
import Step from "./Step";
import Slider from "./Slider/page";
import Form from "./Form/page";
import { Manufactures } from "@/constants";
import "./styles.css";

export default function App(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);

  const _handleIndexChange = (index: number): void => {
    setCurrentIndex(index);
  };

  const _handleNext = (): void => {
    setCurrentIndex(currentIndex + 1);
  };

  const _handleComplete = (): void => {};

  const test = (evt: number | string): void => {
    setCurrentIndex(+evt);
  };
  return (
    <div className=" App flex-col-reverse  md:flex-row " data-aos="zoom-out">
      <div className="max-w-52">
        <Step currentIndex={currentIndex} test={test} />
      </div>

      <div className="flex flex-row">
        <Slider onChange={_handleIndexChange} currentIndex={currentIndex} />
        <div className="form-container  flex md:items-center lg:items-start">
          <div className="flex flex-col gap-5 mb-10 lg:flex-row">
            <div className="form-container">
              <Form
                currentIndex={currentIndex}
                handleNext={_handleNext}
                handleComplete={_handleComplete}
              />
            </div>
            <div className="form-container ">
              <iframe
                className="max-w-full  pr-10 "
                width="400px"
                height="270px"
                src={Manufactures[currentIndex].youTube}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
