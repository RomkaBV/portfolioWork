import Link from "next/link";
import Image from "next/image";
export const TheFooter = () => {
  return (
    <footer className="mb-10 max-w-[1280px] mx-auto px-5">
      <div className="flex items-center justify-between bg-transparent  py-4 px-5 border-b-2">
        <div className="">
          <Link href="./">
            <Image
              className="w-32 md:w-56"
              src="/hero-logo.png"
              alt="Hero logo"
              width={226}
              height={54}
            />
          </Link>
        </div>

        <nav className="hidden md:flex justify-between ">
          <ul className="inline-flex  items-center gap-8 font-bodyFontSatoshi">
            <li>
              <Link href="./about" className="">
                Home
              </Link>
            </li>
            <li>
              <Link href="./how_works" className="">
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
              <Link href="./log" className="">
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-6 flex justify-between">
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
