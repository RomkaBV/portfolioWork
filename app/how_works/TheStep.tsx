"use client";

import { App } from "@/components";

export default function TheStep() {
  return (
    <section className="whatwedo-bg relative w-screen ">
      <div className="bg-gradient-to-b from-[#140E18]  to-[#140E1800] absolute top-0  w-full h-[200px]"></div>
      <div className="bg-gradient-to-t from-[#140E18]  to-[#140E1800] absolute bottom-0 bg-opacity-70 w-full h-[200px]"></div>
      <div className=" py-12  ">
        <div className="relative custom-container w-full h-full">
          <div className="sr md:py-28 py-0 pb-20" id="Appy">
            <div>
              <h2 className="text-white font-heroFont font-bold text-center lg:text-5.5xl mb-12 md:text-4.4xl text-2xl md:leading-tight">
                Step-By-Step Guide
                <br />
                <span className="gradient-text"> to Uploading Products </span>
              </h2>
            </div>

            <App />
          </div>
        </div>
      </div>
    </section>
  );
}
