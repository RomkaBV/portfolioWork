"use client";

import React from "react";

const steps = [
  "Sign Up/ Create Account",
  "Enter Prompts",
  "Choose your Products and add descriptions",
  "Link Printful to Animade account",
  "Launch Products to your store",
];

const Step = ({ currentIndex }) => {
  return (
    <div className="steps-container w-36">
      {steps.map((step, index) => {
        let color = currentIndex === index ? "#ffffff" : "grey";

        return (
          <div
            key={index}
            className="steps-item flex items-center gap-x-3 cursor-pointer"
          >
            <div className="bg-[#2E2931] text-white rounded-full">
              <h2
                className=" px-3  py-1"
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