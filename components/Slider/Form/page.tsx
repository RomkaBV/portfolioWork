"use client";

import React from "react";
import FormElement from "./FormElement";
import "./style.css";
import { Manufactures } from "@/constants";
import Link from "next/link";
interface FormProps {
  currentIndex: number;
  handleNext: (index: number) => void;
  handleComplete: (index: number) => void;
}

const formEls: string[] = [
  "Sign Up/ Create Account",
  "Enter Prompts",
  "Choose your Products and add descriptions",
  "Link Printful to Animade account",
  "Launch Products to your store",
];

const Form: React.FC<FormProps> = ({
  currentIndex,
  handleNext,
  handleComplete,
}) => {
  return (
    <div className="form-container px-10">
      <h3 className="font-heroFont flex items-center gap-x-4">
        <span className=" font-heroFont bg-[#2E2931] text-white rounded-full text-base px-3 py-[8px]  ">
          {Manufactures[currentIndex].id}
        </span>
        {Manufactures[currentIndex].title}
      </h3>
      <p className=" font-sans font-light opacity-60">
        {Manufactures[currentIndex].text}
      </p>
      <p className=" font-sans font-light opacity-60">
        {Manufactures[currentIndex].subtext}
      </p>
      <p className=" font-sans font-light opacity-60">
        {Manufactures[currentIndex].textfooter}
      </p>

      <div className="flex items-center mt-4 gap-4">
        {currentIndex === formEls.length - 1 ? (
          <FormElement
            name={formEls[currentIndex]}
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

        <Link href={Manufactures[0].url}>Sign Up Free</Link>
      </div>
    </div>
  );
};

export default Form;
