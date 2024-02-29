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

  return (
    <div className=" App flex-col-reverse lg:flex-row" data-aos="zoom-out">
      <div className="max-w-[200px]">
        <Step currentIndex={currentIndex} />
      </div>

      <div className="flex flex-row">
        <div className="form-container  flex ">
          <Slider onChange={_handleIndexChange} currentIndex={currentIndex} />
          <div className="flex md:flex-row flex-col">
            <div className="form-container md:ml-8 ml-0   ">
              <Form
                currentIndex={currentIndex}
                handleNext={_handleNext}
                handleComplete={_handleComplete}
              />
            </div>
            <div className="form-container ">
              <iframe
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
