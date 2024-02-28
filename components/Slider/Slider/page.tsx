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
      className="vertical-slider"
      markClassName="example-mark"
      onChange={onChange}
      trackClassName="example-track"
      defaultValue={0}
      value={currentIndex}
      min={0}
      max={4}
      marks
      renderMark={(props) => {
        if (parseInt(props.key as string) < currentIndex) {
          props.className = "example-mark example-mark-completed";
        } else if (props.key === currentIndex) {
          props.className = "example-mark example-mark-active";
        }
        return <span {...props} />;
      }}
      orientation="vertical"
    />
  );
};

export default Slider;
