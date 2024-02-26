import Link from "next/link";
import Image from "next/image";
export const TheFooter = () => {
  return (
    <footer className="custom-container mt-14 overflow-x-hidden z-50 relative">
      <div className="flex justify-center md:justify-between gap-6 border-b border-paraColor pb-4 md:pb-0 tablet:border-0 items-center flex-col md:flex-row">
        <Link href="./">
          <Image
            className="w-40 "
            src="/hero-logo.png"
            alt="Hero logo"
            width={226}
            height={54}
          />
        </Link>

        <nav className="flex justify-between md:gap-6 lg:gap-8 ">
          <ul className="inline-flex  items-center gap-2 font-bodyFontSatoshi md:gap-8">
            <li>
              <Link href="./about" className="">
                Home
              </Link>
            </li>
            <li>
              <Link href="./how_works" className="whitespace-nowrap">
                How it work
              </Link>
            </li>
            <li>
              <Link href="./pricing" className="">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="./log" className="">
                Contact
              </Link>
            </li>
            <li>
              <Link href="./log" className="whitespace-nowrap">
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-between items-center my-8 flex-col md:flex-row gap-2">
        <div>
          <p>Copyright 2023. All rights reserved by Animade</p>
        </div>
        <div className="flex gap-4">
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms & Condition</Link>
        </div>
      </div>
    </footer>
  );
};
