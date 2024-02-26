import Image from "next/image";
import Link from "next/link";
export default function TheMission() {
  return (
    <section className="mission-bg py-20 relative">
      <div className="bg-gradient-to-b from-[#140E18]  to-[#140E1800] absolute top-0  w-full h-[200px] z-[-20]"></div>
      <div className="bg-gradient-to-t from-[#140E18]  to-[#140E1800] absolute bottom-0 bg-opacity-70 w-full h-[200px] z-[-20]"></div>
      <div className=" custom-container relative z-10 ">
        <h2 className=" font-heroFont  text-center lg:text-5.5xl md:text-4.4xl text-2xl mb-4">
          Our
          <span className="gradient-text"> Mission</span>
        </h2>
        <p className="text-xl font-semibold text-white text-center md:w-1/2 md:mx-auto">
          Empowering Artists and Entrepreneurs to create a fairer,
          <br />
          more accessible Art world.
        </p>
        <div
          className="flex justify-between items-center flex-col-reverse md:flex-row text-left mt-4 gap-10 aos-init aos-animate"
          data-aos="zoom-out"
          data-aos-duration="1000"
        >
          <div className="pr-6 w-full md:w-1/2">
            <h3 className="text-2xl font-bold mb-2">At our core</h3>
            <p className="mb-2">
              We are driven by the mission of empowering AI artists and
              entrepreneurs to interact with cutting-edge technology and drive
              sales through a simple, user-friendly Ecommerce platform.
            </p>
            <p className="mb-2">
              We believe that by leveraging the power of AI, we can democratize
              access to the world of digital art and enable a new generation of
              creators to realize their full potential.
            </p>
            <p className="mb-2">
              Our platform is designed to simplify the process of creating and
              selling digital art, providing artists with the tools and
              resources they need to thrive in a rapidly-evolving digital
              landscape.
            </p>
            <p className="mb-2">
              We are committed to driving innovation and pushing the boundaries
              of what is possible in the world of AI-powered digital art, and we
              invite you to join us on this exciting journey!
            </p>
            <div className="mt-12 w-48">
              <Link
                href="/about"
                className="border rounded-xl px-6 py-4 bg-[#c70025] hover:bg-transparent border-solid  border-[#c70025] active:scale-y-110"
              >
                More About Us
              </Link>
            </div>
          </div>
          <div className="relative w-3/4 md:w-1/2">
            <Image
              src="/our-misson-side.png"
              alt="icon"
              width={588}
              height={588}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
