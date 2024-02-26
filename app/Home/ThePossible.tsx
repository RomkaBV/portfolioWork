import Link from "next/link";
import Image from "next/image";

export default function ThePossible() {
  return (
    <section className="possible-bg relative z-[-999]">
      <div className="bg-gradient-to-b from-[#140E18]  to-[#140E1800] absolute top-0  w-full h-[200px]"></div>
      <div className="bg-gradient-to-t from-[#140E18]  to-[#140E1800] absolute bottom-0 bg-opacity-70 w-full h-[200px]"></div>
      <div
        className="custom-container text-white md:py-28 py-12 relative z-50"
        id="Offer"
      >
        <h2 className="font-heroFont  text-center lg:text-5.5xl md:text-4.4xl text-2xl mb-12">
          What’s <span className="gradient-text ">Possible</span>
        </h2>
        <div className=" ">
          <ul
            className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 "
            data-aos="zoom-out"
            data-aos-duration="1000"
          >
            <li className="text-center rounded-3xl px-8 py-12 bg-secondary bg-opacity-50">
              <div className="flex justify-center">
                <Image
                  alt="icon"
                  width={52}
                  height={52}
                  src="/posible-gallery.svg"
                  className="mb-4 border-secondary p-3  rounded-full border-2  w-20 "
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">
                Generate Stunning Designs in Seconds
              </h4>
              <p className="text-center text-base opacity-60">
                Use Animade’s innovative AI design generation tool to
                efficiently create stunning designs for your products.
              </p>
            </li>
            <li className="text-center rounded-3xl px-8 py-12 bg-secondary bg-opacity-50">
              <div className="flex justify-center">
                <Image
                  alt="icon"
                  width={52}
                  height={52}
                  src="/posible-brush.svg"
                  className="mb-4 border-secondary p-3  rounded-full border-2  w-20 "
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">
                AI Prompt Assistant
              </h4>
              <p className="text-center text-base opacity-60">
                Input anything, and AskAI utilises AI to suggest unique prompts.
                Making your product creation voyage feel like a walk in the park
              </p>
            </li>
            <li className="text-center rounded-3xl px-8 py-12 bg-secondary bg-opacity-50">
              <div className="flex justify-center">
                <Image
                  alt="icon"
                  width={52}
                  height={52}
                  src="/posible-robot-head.svg"
                  className="mb-4 border-secondary p-3  rounded-full border-2  w-20 "
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">
                Use existing images to create designs
              </h4>
              <p className="text-center text-base opacity-60">
                Upload your favourite images and watch Animade transform them
                into stunning designs.
              </p>
            </li>
            <li className="text-center rounded-3xl px-8 py-12 bg-secondary bg-opacity-50">
              <div className="flex justify-center">
                <Image
                  alt="icon"
                  width={52}
                  height={52}
                  src="/posible-organize.svg"
                  className="mb-4 border-secondary p-3  rounded-full border-2  w-20 "
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">
                (Coming Soon) Launch to your E-Commerce Platforms
              </h4>
              <p className="text-center text-base opacity-60">
                Get ready for the new era of product design creation and prepare
                to launch products directly from Animade to your E-commerce
                stores in lightspeed.
              </p>
            </li>
            <li className="text-center rounded-3xl px-8 py-12 bg-secondary bg-opacity-50">
              <div className="flex justify-center">
                <Image
                  alt="icon"
                  width={52}
                  height={52}
                  src="/posible-coins.svg"
                  className="mb-4 border-secondary p-3  rounded-full border-2  w-20 "
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">
                (Coming Soon) Create a Business using AI Designs
              </h4>
              <p className="text-center text-base opacity-60">
                Use Animade to capitalise on the brilliance of AI and create
                winning products for your businesses.
              </p>
            </li>
            <li className="text-center rounded-3xl px-8 py-12 bg-secondary bg-opacity-50">
              <div className="flex justify-center ">
                <Image
                  alt="icon"
                  width={52}
                  height={52}
                  src="/posible-laptop.svg"
                  className="mb-4 border-secondary p-3  rounded-full border-2  w-20 "
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">
                30 Free Monthly Designs
              </h4>
              <p className="text-center text-base opacity-60">
                To ensure you are happy with our service, we offer 30 Free
                designs monthly, so you can dive into a world of endless
                possibilities for no upfront cost.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
