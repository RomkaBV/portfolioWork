import Image from "next/image";
import Link from "next/link";

export default function TheHidden() {
  return (
    <section className="relative">
      <div className="hidden-fee-bg pt-20 py-32 relative z-0">
        <div className="bg-gradient-to-b from-[#140E18]  to-[#140E1800] absolute top-0  w-full h-[200px] z-[-20]"></div>
        <div className="bg-gradient-to-t from-[#140E18]  to-[#140E1800] absolute bottom-0 bg-opacity-70 w-full h-[200px] z-[-20]"></div>
        <div className="custom-container  text-center relative z-10">
          <h2 className=" font-heroFont text-center font-text-center lg:text-5.5xl md:text-4.4xl text-2xl mb-6">
            No <span className="gradient-text">Hidden Fees</span>
          </h2>
          <p className="text-center mb-20">Free to start, pay as you scale</p>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-[999]"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="backdrop-blur-[155px] bg-[#62777D] rounded-[20px] md:border-2 border-solid border-[#62777D] bg-gradient-to-br from-[#62777D] to-[#122836] fee-card text-left p-8 ">
              <div className=" w-[70px] h-[70px]  bg-[#243941] rounded-full flex justify-center items-center">
                <Image
                  className=" bg-[#243941] h-8 w-8"
                  src="/hidden-3d-design.svg"
                  alt="Hero logo"
                  width={20}
                  height={20}
                />
              </div>
              <h3 className=" font-heroFont text-white  text-4xl tablet:text-3xl laptop:text-4xl mb-4">
                NFT’s
              </h3>
              <p className="mb-2 text-xl text-[#A9AEB0]">
                We handle NFT creation, collections and drops, putting the power
                of AI-created NFTs in your hands.
              </p>
              <p className="mb-12 text-xl text-[#A9AEB0] tablet:mb-3 ">
                We take payments daily as a percentage of sales - so you pay us
                as you earn.
              </p>
              <div className="flex gap-6">
                <div className=" mt-28 flex flex-col w-60 h-36  bg-[#2A3B41] justify-center pl-8 rounded-xl">
                  <h6 className=" font-heroFont font-medium text-6xl ">3%</h6>
                  <p className=" font-headerFont font-bold text-base text-[#676C6E] uppercase">
                    Of Initial NFT Sale
                  </p>
                </div>
                <div className=" mt-28 flex flex-col w-60 h-36  bg-[#2A3B41] justify-center pl-8 rounded-xl">
                  <h6 className=" font-heroFont font-medium text-6xl ">1%</h6>
                  <p className=" font-headerFont font-bold text-base text-[#676C6E] uppercase">
                    Of NFT Royalty
                  </p>
                </div>
              </div>
            </div>
            <div className="backdrop-blur-[155px] bg-[#62777D] rounded-[20px]  md:border-2 border-solid border-[#62777D] bg-gradient-to-br from-[#62777D] to-[#122836] fee-card text-left p-8 ">
              <div className=" w-[70px] h-[70px]  bg-[#243941] rounded-full flex justify-center items-center">
                <Image
                  className=" bg-[#243941] h-8 w-8"
                  src="/print.svg"
                  alt="Hero logo"
                  width={20}
                  height={20}
                />
              </div>
              <h3 className=" font-heroFont text-white  text-4xl tablet:text-3xl laptop:text-4xl mb-4">
                Print & Merch
              </h3>
              <p className="mb-2 text-xl text-[#A9AEB0]">
                We handle image creation and uploads to Printful, bringing the
                power of AI to your store.
              </p>
              <p className="mb-12 text-xl text-[#A9AEB0] tablet:mb-3 ">
                We take payments daily as a percentage of sales - so you pay us
                as you earn.
              </p>
              <div className=" mt-40 flex flex-col w-60 h-36  bg-[#2A3B41] justify-center pl-8 rounded-xl">
                <h6 className=" font-heroFont font-medium text-6xl ">3%</h6>
                <p className=" font-headerFont font-bold text-base text-[#676C6E] uppercase">
                  of sales
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
