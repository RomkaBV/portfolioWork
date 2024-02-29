"use client";

import React from "react";

interface StepProps {
  currentIndex: number;
}

const steps: string[] = [
  "Sign Up/ Create Account",
  "Enter Prompts",
  "Choose your Products and add descriptions",
  "Link Printful to Animade account",
  "Launch Products to your store",
];

const Step: React.FC<StepProps> = ({ currentIndex }) => {
  return (
    <div className="steps-container">
      {steps.map((step, index) => {
        let color = currentIndex === index ? "#ffffff" : "grey";

        return (
          <div
            key={index}
            className=" flex items-center gap-x-3 cursor-pointer text-wrap"
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
            <h3
              className="pl-2"
              style={{
                margin: 0,
                color: color,
              }}
            >
              {step}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default Step;
