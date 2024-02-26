import Image from "next/image";
import Link from "next/link";
export default function TheMission() {
  return (
    <div className="mission-bg pt-28">
      <section className="max-w-[1280px] m-auto px-5 ">
        <h2 className=" font-heroFont  mt-20 text-5.5xl text-center">
          Our
          <span className="ml-2  gradient-text">Mission</span>
        </h2>
        <p className="text-center text-xl">
          Empowering Artists and Entrepreneurs to create a fairer,
          <br />
          more accessible Art world.
        </p>
        <div
          className="flex items-start gap-6 font-headerFont font-light mt-24"
          data-aos="zoom-out"
          data-aos-duration="1000"
        >
          <div className="w-1/2">
            <h3 className="text-2xl">At our core</h3>
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
            <div className="mt-16">
              <Link
                href="/about"
                className="border rounded-xl px-6 py-4 bg-[#c70025] hover:bg-transparent border-solid  border-[#c70025] active:scale-y-110"
              >
                More About Us
              </Link>
            </div>
          </div>
          <div className="w-1/2 flex items-start">
            <Image
              src="/our-misson-side.png"
              alt="icon"
              width={588}
              height={588}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
