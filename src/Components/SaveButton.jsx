import React from "react";
import { Button } from "react-bootstrap";

const SaveButton = ({ onClick, type = "Button", text = "حفظ" }) => {
  return (
    <div className=" d-flex justify-content-center">
      <button
        onClick={onClick}
        type={type}
        className="bg-[#EFAA20] text-base border-solid text-black !w-[139px] !h-[28px] !rounded-md hover:!bg-transparent hover:!text-white hover:border-2 hover:border-[#EFAA20] "
      >
        {text}
      </button>
    </div>
  );
};
export default SaveButton;
