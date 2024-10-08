import React from "react";
import Link from "next/link";
import SearchBar, { SearchResponsive } from "./SearchBar";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="xl:px-16 md:px-8 px-4 fixed top-6 left-0 right-0 z-10">
      <div className="max-w-7xl">
        <div className="isolate rounded-lg ring-1 ring-white/20 shadow-lg bg-neutral-800/20 text-neutral-50 xl:px-8 px-4 md:px-4 xl:py-5 py-3 backdrop-blur-md">
          <div className="flex justify-between items-center">
            <div>
              <p>Navbar</p>
            </div>
            <div className={"sm:block hidden"}>
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
            </div>
            <div className={"flex gap-3"}>
              <SearchBar />
              <SearchResponsive />
              <div className={"sm:hidden block"}>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="destructive">
                      <HamburgerMenuIcon />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>
                      <Link href="/">Home</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/trending">Trending</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link href="/on-going">Airing Anime</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
