"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function TheHeader() {
  const [first, setfirst] = useState(false);

  return (
    <header className=" font-headerFont w-full -mb-24 top-0 left-0 relative z-[999]">
      <div className="flex items-center justify-between bg-transparent lg:max-w-[1280px] mx-auto py-4 px-5">
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
        <div className="md:hidden  order-first">
          <button onClick={() => setfirst(!first)}>
            <Image
              src={first ? "/cross.svg" : "/menu.svg"}
              alt="icon menu"
              width={40}
              height={40}
            />
          </button>
          {first && (
            <ul className="md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black tablet:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in top-20 opacity-100 ">
              <li className="my-7">
                <Link href="./about">About us</Link>
              </li>
              <li className="my-7">
                <Link href="./how_works">How it work</Link>
              </li>
              <li className="my-7">
                <Link href="./pricing">Pricing</Link>
              </li>
              <li className="my-7">
                <Link href="./log">Log In</Link>
              </li>
            </ul>
          )}
        </div>
        <nav className="hidden md:flex justify-between ">
          <ul className="inline-flex  items-center gap-8 font-bodyFontSatoshi">
            <li>
              <Link href="./about" className="">
                About us
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
                Log In
              </Link>
            </li>
          </ul>
          <Link
            href="./sign"
            className="active:scale-y-110  inline-flex  items-center  overflow-hidden px-6 py-2 ml-5  font-bodyFontSatoshi md:bg-transparent border-solid border-2 border-red-700 rounded-xl md:hover:bg-red-700 "
          >
            <span className=" font-headerBoldFont">Sign Up</span>
          </Link>
        </nav>
        <div className="md:hidden">
          <Link href="./">
            <Image src="./user.svg" alt="icon-user" width={40} height={40} />
          </Link>
        </div>
      </div>
    </header>
  );
}
