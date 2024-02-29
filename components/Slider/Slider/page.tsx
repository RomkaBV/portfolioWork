"use client";
import React from "react";
import ReactSlider from "react-slider";
import "./slider.css";

interface SliderProps {
  onChange: (value: number) => void;
  currentIndex: number;
}

const Slider: React.FC<SliderProps> = ({ onChange, currentIndex }) => {
  return (
    <ReactSlider
      className="vertical-slider mx-2 relative"
      markClassName="example-mark"
      onChange={onChange}
      trackClassName="example-track"
      defaultValue={0}
      value={currentIndex}
      min={0}
      max={4}
      marks
      renderMark={(props) => {
        const markClassNames = ["example-mark "];
        if (Number(props.key) < currentIndex) {
          markClassNames.push("example-mark-completed");
        } else if (Number(props.key) === currentIndex) {
          markClassNames.push("example-mark-active");
        }
        const classNames = markClassNames.join(" ");
        return <div {...props} className={classNames} />;
      }}
      orientation="vertical"
    />
  );
};

export default Slider;
