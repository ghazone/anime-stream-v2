import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Input } from "./ui/input";

const Navbar = () => {
  return (
    <nav className="xl:px-16 md:px-8 px-4 fixed top-6 left-0 right-0 z-10">
      <div className="max-w-7xl">
        <div className="isolate rounded-lg ring-1 ring-white/20 shadow-lg bg-neutral-800/20 text-neutral-50 px-8 py-5 backdrop-blur-md">
          <div className="flex justify-between items-center">
            <div className="">
              <p>Navbar</p>
            </div>
            <ul className="flex gap-4" style={{ listStyle: "none" }}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/trending">Trending</Link>
              </li>
              <li>
                <Link href="/on-going">Airing</Link>
              </li>
            </ul>
            <Input type="text" className="w-auto" placeholder="Search..." />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
