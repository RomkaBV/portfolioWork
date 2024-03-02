"use client";

import React from "react";

interface StepProps {
  currentIndex: number;
  test: () => void;
}

const steps: string[] = [
  "Sign Up/ Create Account",
  "Enter Prompts",
  "Choose your Products and add descriptions",
  "Link Printful to Animade account",
  "Launch Products to your store",
];

const Step: React.FC<StepProps> = ({ currentIndex, test }) => {
  return (
    <div className="steps-container ">
      {steps.map((step, index) => {
        let color = currentIndex === index ? "#ffffff" : "grey";

        return (
          <div
            key={index}
            className=" flex items-center gap-x-3 cursor-pointer text-wrap "
          >
            <div className="bg-[#2E2931] text-white rounded-full">
              <h2
                className="px-3 py-1"
                style={{
                  margin: 0,
                  color: color,
                }}
              >
                {index + 1}
              </h2>
            </div>
            <button
              value={index}
              className="pl-2 text-left"
              onClick={(evt) => test(evt.currentTarget.value)}
              style={{
                margin: 0,
                color: color,
              }}
            >
              {step}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Step;
