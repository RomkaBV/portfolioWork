import Link from "next/link";
import Image from "next/image";

export default function TheOurMission() {
  return (
    <section className="max-w-[1280px] m-auto px-5 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className=" flex items-start">
          <Image
            src="/our-misson-side.png"
            alt="icon"
            width={588}
            height={588}
          />
        </div>

        <div className="flex items-start gap-6 font-headerFont font-light mt-24">
          <div className="">
            <div className="bg-[#213851] pl-4 pr-4 py-2 rounded-full w-fit flex gap-4 items-center justify-between mb-4">
              <h4 className="font-light">Our Mission</h4>
            </div>

            <h3 className=" text-3xl font-bold">
              Empowering Artists & <br /> Entrepreneurs
            </h3>
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
          </div>
        </div>
      </div>
    </section>
  );
}
