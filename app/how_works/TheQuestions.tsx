"use client";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { useState } from "react";

export default function TheQuestions() {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);
  const [sixth, setSixth] = useState(false);
  const [seventh, setSeventh] = useState(false);
  const buttonClick = () => {
    setFirst(!first);
  };
  const buttonClickSecond = () => {
    setSecond(!second);
  };
  const buttonClickThird = () => {
    setThird(!third);
  };
  const buttonClickFourth = () => {
    setFourth(!fourth);
  };
  const buttonClickFifth = () => {
    setFifth(!fifth);
  };
  const buttonClickSixth = () => {
    setSixth(!sixth);
  };
  const buttonClickSeventh = () => {
    setSeventh(!seventh);
  };
  return (
    <section className="hidden-fee-bg relative">
      <div className="bg-gradient-to-b from-[#140E18]  to-[#140E1800] absolute top-0  w-full h-[200px]"></div>
      <div className="bg-gradient-to-t from-[#140E18]  to-[#140E1800] absolute bottom-0 bg-opacity-70 w-full h-[200px]"></div>
      <div className="custom-container py-28 relative z-10">
        <h2 className="text-white font-heroFont  flex justify-center  mb-12 font-bold lg:text-5.5xl md:text-4.4xl text-2xl md:text-start leading-tight ">
          Frequently Ask
          <span className="gradient-text ml-2"> Questions</span>
        </h2>
        <div
          className="mb-3 border-[#5D7379] border-2 rounded-lg"
          data-aos="fade-zoom-in"
          data-aos-duration="300"
        >
          <div className="bg-[#253236] p-5  text-lg font-bold text-white flex justify-between items-center">
            <span>How do I Cancel my Subscription?</span>
            <button onClick={buttonClick}>
              {first ? <TiMinus /> : <FaPlus />}
            </button>
          </div>
          {first && (
            <div className=" font-headerFont bg-[#253236] px-5 pb-5">
              To cancel a subscription, just message our support and let us
              know. You can contact us on the contact-us form on our site, or
              via email at animade.world@gmail.com.
            </div>
          )}
        </div>
        <div
          className="mb-3 border-[#5D7379] border-2 rounded-lg"
          data-aos="fade-zoom-in"
          data-aos-duration="600"
        >
          <div className="bg-[#253236] p-5  text-lg font-bold text-white flex justify-between items-center">
            <span>How can I Upgrade my Plan?</span>
            <button onClick={buttonClickSecond}>
              {second ? <TiMinus /> : <FaPlus />}
            </button>
          </div>
          {second && (
            <div className=" font-headerFont bg-[#253236] px-5 pb-5">
              Visit pricing page to upgrade
            </div>
          )}
        </div>
        <div
          className="mb-3 border-[#5D7379] border-2 rounded-lg"
          data-aos="fade-zoom-in"
          data-aos-duration="900"
        >
          <div className="bg-[#253236] p-5  text-lg font-bold text-white flex justify-between items-center">
            <span>What makes a good prompt?</span>
            <button onClick={buttonClickThird}>
              {third ? <TiMinus /> : <FaPlus />}
            </button>
          </div>
          {third && (
            <div className=" font-headerFont bg-[#253236] px-5 pb-5">
              Be creative and let your imagination run wild. We find that a good
              prompt is imaginative and detailed, with clear descriptive words.
              You should also specify the style, and experiment to see what
              works best!
            </div>
          )}
        </div>
        <div
          className="mb-3 border-[#5D7379] border-2 rounded-lg"
          data-aos="fade-zoom-in"
          data-aos-duration="1200"
        >
          <div className="bg-[#253236] p-5  text-lg font-bold text-white flex justify-between items-center">
            <span>What are Printful & Printify?</span>
            <button onClick={buttonClickFourth}>
              {fourth ? <TiMinus /> : <FaPlus />}
            </button>
          </div>
          {fourth && (
            <div className=" font-headerFont bg-[#253236] px-5 pb-5">
              Printful is a Print-On-Demand provider that prints and ships
              orders directly to your customers worldwide. Printful allows you
              to create E-Commerce products with no upfront cost, connecting to
              over 20 stores including Shopify, Etsy and Amazon.
            </div>
          )}
        </div>
        <div
          className="mb-3 border-[#5D7379] border-2 rounded-lg"
          data-aos="fade-zoom-in"
          data-aos-duration="1500"
        >
          <div className="bg-[#253236] p-5  text-lg font-bold text-white flex justify-between items-center">
            <span>How do I create a Printful or Printify account?</span>
            <button onClick={buttonClickFifth}>
              {fifth ? <TiMinus /> : <FaPlus />}
            </button>
          </div>
          {fifth && (
            <div className=" font-headerFont bg-[#253236] px-5 pb-5">
              Follow this link to sign up to Printful and this link to sign up
              to Printify. Prepare to launch your designs to Products on your
              store.
            </div>
          )}
        </div>
        <div
          className="mb-3 border-[#5D7379] border-2 rounded-lg"
          data-aos="fade-zoom-in"
          data-aos-duration="1500"
        >
          <div className="bg-[#253236] p-5  text-lg font-bold text-white flex justify-between items-center">
            <span>
              (Coming Soon) How do I link my Animade and Printful Accounts?
            </span>
            <button onClick={buttonClickSeventh}>
              {seventh ? <TiMinus /> : <FaPlus />}
            </button>
          </div>
          {seventh && (
            <div className=" font-headerFont bg-[#253236] px-5 pb-5">
              {" "}
              We are working to allow E-Commerce connections to Animade’s AI
              design generator. We look forward to releasing this feature soon.
              In the meantime, sign up here to create winning designs
            </div>
          )}
        </div>
        <div
          className="mb-3 border-[#5D7379] border-2 rounded-lg"
          data-aos="fade-zoom-in"
          data-aos-duration="1500"
        >
          <div className="bg-[#253236] p-5  text-lg font-bold text-white flex justify-between items-center">
            <span>How do I Create a Store on Printful?</span>
            <button onClick={buttonClickSixth}>
              {sixth ? <TiMinus /> : <FaPlus />}
            </button>
          </div>
          {sixth && (
            <div className=" font-headerFont bg-[#253236] px-5 pb-5">
              Log in to your Printful account, go to the side menu in your
              Dashboard, and click Stores v Choose platform to see your options
              and find a platform that suits your needs. Simple as that! You can
              then customise your store to connect with your target audience.
              Click here to learn more about creating a store on Printful
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
