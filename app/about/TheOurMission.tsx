import Link from "next/link";
import Image from "next/image";

export default function TheOurMission() {
  return (
    <section className=" py-12 md:py-20">
      <div className=" text-center custom-container relative z-10">
        <div className=" grid grid-cols-1 md:grid-cols-2 text-left items-center gap-10">
          <div
            className="relative"
            data-aos-duration="1000"
            data-aos="fade-right"
          >
            <Image
              src="/our-misson-side.png"
              alt="icon"
              width={588}
              height={588}
            />
          </div>

          <div className="pr-6" data-aos-duration="1000" data-aos="fade-left">
            <div className="bg-[#213851] pl-4 pr-4 py-2 rounded-full w-fit flex gap-4 items-center justify-between mb-4">
              <h6 className="font-light">Our Mission</h6>
            </div>

            <h5 className="text-4xl font-bold mb-4 leading-tight pr-8 lg:pr-0">
              Empowering Artists & Entrepreneurs
            </h5>
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
