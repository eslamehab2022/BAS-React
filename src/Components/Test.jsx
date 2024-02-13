import { useState } from "react";
import { Document, Page } from "react-pdf";
import Pdf from "./Pdf";

function Test() {
  const [openPdf, setOpenPdf] = useState(false);

  return (
    <div>
      <Pdf
        openPdf={openPdf}
        setOpenPdf={setOpenPdf}
        PdfFile={process.env.PUBLIC_URL + "/example.pdf"}
      />
    </div>
  );
}

export default Test;
