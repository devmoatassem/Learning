import React from "react";
import { FaRegBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <div className="mx-auto flex w-full items-center justify-between border-b px-10 py-5 py-5 lg:px-36 2xl:max-w-[1400px]">
      <div className="relative w-[500px]">
        <input
          type="text"
          placeholder="Search Here"
          className="w-full rounded-lg border px-5 py-2 pl-10 placeholder:text-sm placeholder:text-bgdark-grey"
        />
        <div className="absolute left-3 top-3 mt-0.5 text-bgdark-grey">
          <FaSearch />
        </div>
      </div>
      <div className="rounded-full bg-bggrey p-2 text-bgdark-grey">
        <FaRegBell />
      </div>
    </div>
  );
};

export default Header;
