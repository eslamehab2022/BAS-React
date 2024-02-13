import React from "react";
import { CiSearch } from "react-icons/ci";
export default function SearchButton({}) {
  return (
    <div
      dir="ltr"
      className="bg-[#161620] text-white px-3 py-2 rounded-[7.721px] flex items-center gap-2"
    >
      <CiSearch fontSize={20} fontWeight={500} />
      <input
        type="text"
        name=""
        id=""
        placeholder="Search...."
        className="w-full bg-transparent text-start"
      />
    </div>
  );
}
