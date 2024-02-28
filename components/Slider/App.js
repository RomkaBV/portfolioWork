"use client";
import { useState } from "react";
import Step from "./Step.js";
import Slider from "./Slider/page.js";
import Form from "./Form/page.js";
import "./styles.css";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const _handleIndexChange = (index) => {
    setCurrentIndex(index);
  };

  const _handleNext = (currentIndex) => {
    setCurrentIndex(currentIndex + 1);
  };

  const _handleComplete = () => {};

  return (
    <div className="App flex w-full">
      <div className="container w-1/4">
        <Step currentIndex={currentIndex} />
      </div>
      <div className=" w-14">
        <Slider onChange={_handleIndexChange} currentIndex={currentIndex} />
      </div>
      <div className="form-container w-1/2">
        <Form
          currentIndex={currentIndex}
          handleNext={_handleNext}
          handleComplete={_handleComplete}
        />
      </div>
      <div className="form-container w-1/2 flex">
        <Form
          currentIndex={currentIndex}
          handleNext={_handleNext}
          handleComplete={_handleComplete}
        />
      </div>
    </div>
  );
}
