import React from "react";
import { FaRegBell } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <div className="flex items-center justify-between border-b px-5 py-5">
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
