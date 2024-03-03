import React, { forwardRef } from "react";

 const UploadFile = forwardRef(({...props},ref) => {
  return (
    <label className="cursor-pointer bg-[#252538] rounded-[7px] w-28 h-32 flex justify-center items-center">
      <input type="file" className="hidden" ref={ref} {...props} />
      <img src="/icons/Pdf.png" alt="" className="w-7" />
    </label>
  );
})

export default UploadFile