import Image from "next/image";

export default function TheTeam() {
  return (
    <section className="custom-container relative z-10">
      <h2 className="text-4xl font-bold mb-10">Meet The Animade Team</h2>
      <div className="grid grid-cols-2 gap-4  md:grid-cols-4 ">
        <div className="" data-aos-duration="1000" data-aos="zoom-in">
          <Image src="/Luka.png" alt="icon" width={292} height={360} />
          <h6 className="font-bold text-xl mt-2">Luca Bertuzzi</h6>
          <p className="text-[#9C9A9E] text-base">
            Founder & Technical Director
          </p>
        </div>
        <div className="" data-aos-duration="1300" data-aos="zoom-in">
          <Image src="/Benjamin.png" alt="icon" width={292} height={360} />
          <h6 className="font-bold text-xl mt-2">Benjamin Ellis</h6>
          <p className="text-[#9C9A9E] text-base">
            Founder & Managing Director
          </p>
        </div>
      </div>
    </section>
  );
}
