"user client";
import { RiUserLine } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export default function Page() {
  return (
    <div className="relative  pt-20 pb-20">
      <div className=" absolute contact-bg  top-0  w-full h-full z-[-30]"></div>
      <div className="bg-gradient-to-b from-[#140E18]  to-[#140E1800] absolute top-0  w-full h-[200px] z-[-20]"></div>
      <div className="bg-gradient-to-t from-[#140E18]  to-[#140E1800] absolute bottom-0 bg-opacity-70 w-full h-[200px] z-[-20]"></div>
      <section className=" w-full max-w-[1280px] m-auto flex flex-col relative">
        <div className="text-center">
          <h2 className=" font-heroFont text-5.5xl  mt-8">
            <span className="gradient-text">Contact</span> Us
          </h2>
          <p className=" text-lg mt-5">Let us know what you think.</p>
        </div>
        <form
          className=" flex flex-col justify-center items-center gap-8 mt-8 max-w-[560px] m-auto"
          data-aos="zoom-out"
          data-aos-duration="1000"
        >
          <div className="relative w-full">
            <label
              htmlFor="name"
              className="bg-[#353B40] border border-[#7D8992] px-4 pt-3 pb-1 border-b-0 rounded-t-lg  relative z-30 text-sm "
            >
              Full Name
            </label>
            <input
              name="name"
              id="name"
              placeholder="Enter full name"
              className="bg-[#353B40] text-sm rounded-r-lg rounded-bl-lg px-10 py-5  border border-[#7D8992] w-full placeholder:text-[15px] placeholder:font-light"
            />
            <RiUserLine className=" absolute top-10 left-[3%] w-5 h-5 fill-[#7D8992]" />
          </div>
          <div className="relative w-full">
            <label
              htmlFor="number"
              className="bg-[#353B40] border border-[#7D8992] px-4 pt-3 pb-1 border-b-0 rounded-t-lg relative z-30 text-sm"
            >
              Phone Number
            </label>
            <input
              name="number"
              id="number"
              placeholder="Enter phone number"
              className="bg-[#353B40] text-sm rounded-r-lg rounded-bl-lg px-10 py-5 border border-[#7D8992] w-full placeholder:text-[15px] placeholder:font-light"
            />
            <BsTelephone className=" absolute top-10 left-[3%] w-5 h-5 fill-[#7D8992]" />
          </div>
          <div className="relative w-full">
            <label
              htmlFor="email"
              className="bg-[#353B40] border border-[#7D8992] px-4 pt-3 pb-1 border-b-0 rounded-t-lg relative z-30 text-sm"
            >
              Email
            </label>
            <input
              name="email"
              id="email"
              placeholder="Enter email addres"
              className="bg-[#353B40] text-sm rounded-r-lg rounded-bl-lg px-10 py-5 border border-[#7D8992] w-full placeholder:text-[15px] placeholder:font-light"
            />
            <AiOutlineMail className=" absolute top-11 left-[3%] w-5 h-5 fill-[#7D8992]" />
          </div>
          <div className="relative w-full">
            <label
              htmlFor="message"
              className="bg-[#353B40] border border-[#7D8992] px-4 pt-3 pb-1 border-b-0 rounded-t-lg relative z-30 text-sm"
            >
              How can we help?
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Type your message..."
              className="h-44 bg-[#353B40] text-sm rounded-r-lg rounded-bl-lg px-4 py-5 border border-[#7D8992] w-full placeholder:text-[15px] placeholder:font-light "
            />
          </div>
          <button className="w-full border border-red-500 bg-[#C70025] bg-primary hover:text-primary text-center  hover:bg-transparent  border-primary duration-300 font-bold px-6 py-5 rounded-lg font-body text-base">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
