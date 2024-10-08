"use client";
import React, { useRef } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const SearchBar = () => {
  const router = useRouter();
  const inputRef = useRef();
  const handleSearch = (e) => {
    const inputValue = inputRef.current.value;
    if (!inputValue) return;
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      router.push(`/search/${inputValue}`);
    }
  };
  return (
    <div className={"relative "}>
      <Button
        onClick={handleSearch}
        variant={"destructive"}
        className="absolute top-1/2 -translate-y-1/2 h-full right-0 z-100 sm:block hidden"
      >
        <Search size={18} />
      </Button>
      <Input
        ref={inputRef}
        onKeyDown={handleSearch}
        type="search"
        className="w-auto sm:block hidden"
        name={"search"}
        placeholder="Search..."
      />
    </div>
  );
};

export const SearchResponsive = () => {
  const router = useRouter();
  const inputRef = useRef();
  const handleSearch = (e) => {
    const inputValue = inputRef.current.value;
    if (!inputValue) return;
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      router.push(`/search/${inputValue}`);
    }
  };
  return (
    <div className="block sm:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="destructive">
            <Search />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 h-12">
          <Input
            ref={inputRef}
            onKeyDown={handleSearch}
            type="search"
            className="w-full h-full sm:hidden "
            name={"search"}
            placeholder="Search..."
          />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SearchBar;
