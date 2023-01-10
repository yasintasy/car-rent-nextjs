import React from "react";
import Link from "next/link";
import Logo from "../components/svg/logo";

export default function Home() {
  return (
    <div className="flex flex-row w-screen h-screen">
      {/* Main Menu */}
      <div className="flex flex-col justify-between flex-none p-6 text-white bg-black w-60">
        <div className="flex flex-col space-y-5">
          {/* Logo */}
          <div>
            <Link href='/' className="block px-2 py-6">
              <Logo />
            </Link>
          </div>

          <ul>
            <li className="bg-primary">
              <Link href='/'>
                Dashboard
              </Link>
            </li>
          </ul>

        </div>
        <div className="">Button</div>
      </div>
      <div className="w-80 ">B</div>
      <div className="flex-1 bg-purple-700">C</div>
    </div>
  );
}
