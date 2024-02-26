import Image from "next/image";

export default function TheTeam() {
  return (
    <section className="max-w-[1280px] m-auto px-5 py-8 md:py-8">
      <h2 className="text-4xl font-bold mb-10">Meet The Animade Team</h2>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <Image src="/Luka.png" alt="icon" width={292} height={360} />
          <h6 className="font-bold text-xl mt-2">Luca Bertuzzi</h6>
          <p className="text-[#9C9A9E] text-base">
            Founder & Technical Director
          </p>
        </div>
        <div>
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
