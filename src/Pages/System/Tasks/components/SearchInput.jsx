import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export const Search = ({ ...props }) => {
    const [serach, setSearch] = useState("");
    return (
      <div
        dir="ltr"
        className="bg-[#2B2B40] px-3 py-2 rounded-[7.721px] flex items-center gap-2"
      >
        <CiSearch fontSize={20} fontWeight={500} />
        <input
          type="text"
          value={serach}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search...."
          className="w-full text-white bg-transparent text-start"
        />
      </div>
    );
  };