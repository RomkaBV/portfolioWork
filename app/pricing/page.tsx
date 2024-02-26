"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const [first, setfirst] = useState(false);
  const [second, setsecond] = useState(false);
  const [third, setthird] = useState(false);
  const [fourth, setfourth] = useState(false);
  const buttonClick = () => {
    setfirst(!first);
  };
  const buttonClickSecond = () => {
    setsecond(!second);
  };
  const buttonClickThird = () => {
    setthird(!third);
  };
  const buttonClickFourth = () => {
    setfourth(!fourth);
  };
  return (
    <>
      <main className="pricing-bg py-28 relative">
        <div className="bg-gradient-to-t from-[#140E18]  to-[#140E1800] absolute bottom-0  w-full h-[200px]"></div>
        <div className="pricing-gradient absolute top-0 w-full h-[600px] z-10"></div>
        <div className="max-w-[1280px] m-auto flex flex-col items-center relative z-50">
          <div
            className="lg:w-[860px] text-center aos-init aos-animate"
            data-aos="fade-left"
          >
            <h1 className="text-center lg:text-5xl font-bold md:text-4xl my-6 text-white text-2xl">
              Launch your business into the Stratosphere &amp; scale up with
              AI-Powered Products.
            </h1>
            <p className=" text-xl font-medium text-[#B6B4B7]">
              First 30 Monthly Designs on us, and cancel anytime.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-20 pb-10">
            <div
              className="text-white plan-bg px-6 pt-0 pb-4 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="text-center flex flex-col justify-center items-center px-[25px] rounded-xl bg-[#8888881A]">
                <p className="bg-[#213851] w-fit rounded-b-lg py-4 px-10 mx-[45px] font-body text-base font-bold ">
                  Booster
                </p>

                <h3 className="font-bold text-4xl mt-4">£5.99</h3>
                <p className="text-sm text-[#9C9A9E] capitalize">per month</p>
                <div className="mb-4">
                  <Image
                    src="/pricingImg.png"
                    alt="icon-user"
                    width={140}
                    height={140}
                    className=" mt-[10px]"
                  />
                </div>
                <p className="pt-1 mb-4 font-medium	text-base w-[160px] text-center h-[50px]">
                  Take your business off the ground
                </p>
                <div className="border-b border-[#8E8B90] h-[1px] w-full"></div>
                <div className="text-left w-full py-4 flex flex-col gap-2">
                  <div className="flex justify-between items-center w-full">
                    <p className="text-[#B6B4B7] text-sm">What’s included:</p>
                    <button
                      onClick={() => buttonClick()}
                      className="lg:hidden w-fit rounded-b-lg py-2 px-4 text-white"
                    >
                      <Image
                        src="/arrow-down.svg"
                        alt="icon-down"
                        width={24}
                        height={24}
                        className={`${first ? "rotate-0" : "rotate-180"}`}
                      />
                    </button>
                  </div>
                  <div
                    className={` flex flex-col  ${
                      first ? "opacity-0" : "block"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Image
                        src="/pricingOkIcon.svg"
                        alt="icon-down"
                        width={24}
                        height={24}
                        className=""
                      />
                      <p className="font-medium text-sm capitalize">
                        50 Extra designs
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <Image
                        src="/pricingOkIcon.svg"
                        alt="icon-down"
                        width={24}
                        height={24}
                        className=""
                      />
                      <p className="font-medium text-sm capitalize">
                        80 Designs Monthly
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="text-white plan-bg px-6 pt-0 pb-4 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="text-center flex flex-col justify-center items-center px-[25px] rounded-xl bg-[#8888881A]">
                <p className="bg-[#213851] w-fit rounded-b-lg py-4 px-10 mx-[45px] font-body text-base font-bold ">
                  Accelerate
                </p>

                <h3 className="font-bold text-4xl mt-4">£24.99</h3>
                <p className="text-sm text-[#9C9A9E] capitalize">per month</p>
                <div className="mb-4">
                  <Image
                    src="/pricingImg2.png"
                    alt="icon-user"
                    width={140}
                    height={140}
                    className=" mt-[10px]"
                  />
                </div>
                <p className="pt-1 mb-4 font-medium	text-base w-[160px] text-center h-[50px]">
                  Reach new heights
                </p>
                <div className="border-b border-[#8E8B90] h-[1px] w-full"></div>
                <div className="text-left w-full py-4 flex flex-col gap-2">
                  <div className="flex justify-between items-center w-full">
                    <p className="text-[#B6B4B7] text-sm">What’s included:</p>
                    <button
                      onClick={() => buttonClickSecond()}
                      className="lg:hidden w-fit rounded-b-lg py-2 px-4 text-white"
                    >
                      <Image
                        src="/arrow-down.svg"
                        alt="icon-down"
                        width={24}
                        height={24}
                        className={`${second ? "rotate-0" : "rotate-180"}`}
                      />
                    </button>
                  </div>
                  <div
                    className={` flex flex-col  ${
                      second ? "opacity-0" : "block"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Image
                        src="/pricingOkIcon.svg"
                        alt="icon-down"
                        width={24}
                        height={24}
                        className=""
                      />
                      <p className="font-medium text-sm capitalize">
                        250 Extra designs
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <Image
                        src="/pricingOkIcon.svg"
                        alt="icon-down"
                        width={24}
                        height={24}
                        className=""
                      />
                      <p className="font-medium text-sm capitalize">
                        280 Designs Monthly
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="text-white plan-bg px-6 pt-0 pb-4 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="text-center flex flex-col justify-center items-center px-[25px] rounded-xl bg-[#8888881A]">
                <p className="bg-[#213851] w-fit rounded-b-lg py-4 px-10 mx-[45px] font-body text-base font-bold ">
                  Turbocharge
                </p>

                <h3 className="font-bold text-4xl mt-4">£49.99</h3>
                <p className="text-sm text-[#9C9A9E] capitalize">per month</p>
                <div className="mb-4">
                  <Image
                    src="/pricingImg3.png"
                    alt="icon-user"
                    width={140}
                    height={140}
                    className=" mt-[10px]"
                  />
                </div>
                <p className="pt-1 mb-4 font-medium	text-base w-[160px] text-center h-[50px]">
                  Some serious power
                </p>
                <div className="border-b border-[#8E8B90] h-[1px] w-full"></div>
                <div className="text-left w-full py-4 flex flex-col gap-2">
                  <div className="flex justify-between items-center w-full">
                    <p className="text-[#B6B4B7] text-sm">What’s included:</p>
                    <button
                      onClick={() => buttonClickThird()}
                      className="lg:hidden w-fit rounded-b-lg py-2 px-4 text-white"
                    >
                      <Image
                        src="/arrow-down.svg"
                        alt="icon-down"
                        width={24}
                        height={24}
                        className={`${third ? "rotate-0" : "rotate-180"}`}
                      />
                    </button>
                  </div>
                  <div
                    className={` flex flex-col  ${
                      third ? "opacity-0" : "block"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Image
                        src="/pricingOkIcon.svg"
                        alt="icon-down"
                        width={24}
                        height={24}
                        className=""
                      />
                      <p className="font-medium text-sm capitalize">
                        850 Extra designs
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <Image
                        src="/pricingOkIcon.svg"
                        alt="icon-down"
                        width={24}
                        height={24}
                        className=""
                      />
                      <p className="font-medium text-sm capitalize">
                        880 Designs Monthly
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="text-white plan-bg px-6 pt-0 pb-4 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="text-center flex flex-col justify-center items-center px-[25px] rounded-xl bg-[#8888881A]">
                <p className="bg-[#213851] w-fit rounded-b-lg py-4 px-10 mx-[45px] font-body text-base font-bold ">
                  Professional
                </p>

                <h3 className="font-bold text-4xl mt-4">£149.99</h3>
                <p className="text-sm text-[#9C9A9E] capitalize">per month</p>
                <div className="mb-4">
                  <Image
                    src="/pricingImg4.png"
                    alt="icon-user"
                    width={140}
                    height={140}
                    className=" mt-[10px]"
                  />
                </div>
                <p className="pt-1 mb-4 font-medium	text-base w-[160px] text-center h-[50px]">
                  Unlimited potential
                </p>
                <div className="border-b border-[#8E8B90] h-[1px] w-full"></div>
                <div className="text-left w-full py-4 flex flex-col gap-2">
                  <div className="flex justify-between items-center w-full">
                    <p className="text-[#B6B4B7] text-sm">What’s included:</p>
                    <button
                      onClick={() => buttonClickFourth()}
                      className="lg:hidden w-fit rounded-b-lg py-2 px-4 text-white"
                    >
                      <Image
                        src="/arrow-down.svg"
                        alt="icon-down"
                        width={24}
                        height={24}
                        className={`${fourth ? "rotate-0" : "rotate-180"}`}
                      />
                    </button>
                  </div>
                  <div
                    className={` flex flex-col  ${
                      fourth ? "opacity-0" : "block"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Image
                        src="/pricingOkIcon.svg"
                        alt="icon-down"
                        width={24}
                        height={24}
                        className=""
                      />
                      <p className="font-medium text-sm capitalize">
                        Unlimited Extra Designs
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <Image
                        src="/pricingOkIcon.svg"
                        alt="icon-down"
                        width={24}
                        height={24}
                        className=""
                      />
                      <p className="font-medium text-sm capitalize">
                        Unlimited Designs Monthly
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <div className="particle-container" id="tsparticles">
        <canvas
          style="width: 100% !important; height: 100% !important; position: fixed !important; z-index: 0 !important; top: 0px !important; left: 0px !important; pointer-events: initial;"
          data-generated="false"
          aria-hidden="true"
          width="1172"
          height="863"
        ></canvas>
      </div> */}
    </>
  );
}
