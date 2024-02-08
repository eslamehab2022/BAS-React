import React from "react";
import Image from "../../../../Components/Image";

const AllChats = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col justify-center items-center">
        <Image
          src="/icons/Message.gif"
          className={"w-[308px] h-[308px]"}
          alt={" BSA gif"}
        />

        <Image
          src="/systemLogin.gif"
          className={"w-[212px] h-[119px]"}
          alt={" BSA gif"}
        />
        <p className="text-white text-center  mt-2">ابدأ محادثتك</p>
      </div>
    </div>
  );
};

export default AllChats;
