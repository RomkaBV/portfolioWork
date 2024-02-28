"use client";

import React from "react";
import FormElement from "./FormElement";
import "./style.css";

interface FormProps {
  currentIndex: number;
  handleNext: (index: number) => void;
  handleComplete: (index: number) => void;
}

const formEls: string[] = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];

const Form: React.FC<FormProps> = ({
  currentIndex,
  handleNext,
  handleComplete,
}) => {
  return (
    <div className="form-container">
      <h3>{formEls[currentIndex]}</h3>
      {currentIndex === formEls.length - 1 ? (
        <FormElement
          name={"Complete"}
          value={"Complete"}
          onClick={() => handleComplete(currentIndex)}
        />
      ) : (
        <FormElement
          name={formEls[currentIndex]}
          value={"Next"}
          onClick={() => handleNext(currentIndex)}
        />
      )}
    </div>
  );
};

export default Form;
