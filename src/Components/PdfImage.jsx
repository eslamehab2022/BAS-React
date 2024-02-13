import React, { useMemo } from "react";
import Pdf from "./Pdf";
import Image from "./Image";

const PdfImage = ({
  openPdf,
  setOpenPdf,
  text = "",
  pdfSrc,
  className,
  width,
  height,
}) => {
  return (
    <div>
      {openPdf && pdfSrc && (
        <Pdf PdfFile={pdfSrc} openPdf={openPdf} setOpenPdf={setOpenPdf} />
      )}
      <div
        className={` bg-[#2B2B40] py-1
      px-3
      flex justify-center
      items-center
      rounded-md
      pointer
      ${className}
      overflow-hidden
      `}
      style={{
        width:`${width}px`,
        height:`${height}px`,
        
      }}
        onClick={() => {
          setOpenPdf(true);
        }}
      >
        <Image
          src={"/icons/Pdf.png"}
          alt="pdf"
          className=" m-auto w-[26.94px] h-[26.94px] "
        />
      </div>
    </div>
  );
};

export default PdfImage;
