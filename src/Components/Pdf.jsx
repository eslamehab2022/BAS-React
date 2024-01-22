import { useState, useRef } from "react";
import { Modal } from "react-bootstrap";
import { Document, Page } from "react-pdf";
import Button from "@mui/material/Button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Pdf = ({ openPdf, setOpenPdf, PdfFile, height, width }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const pdfRef = useRef(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const changepage = (offset) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const changepageBack = () => {
    changepage(-1);
  };

  const changepageNext = () => {
    changepage(1);
  };

  //     if (pdfRef.current) {
  //         ((blob) => {
  //             const url = URL.createObjectURL(blob);
  //             const a = document.createElement('a');
  //             a.href = url;
  //             a.download = 'downloaded_pdf.pdf';
  //             a.click();
  //             URL.revokeObjectURL(url);
  //         });
  //     }
  // };

  return (
    <div>
      {openPdf && (
        <Modal
          className="d-flex claimModal align-items-center jusify-content-center"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          onHide={() => setOpenPdf(false)}
          show={openPdf}
        >
          <Modal.Body className="d-flex align-items-center">
            <div className="d-flex w-100 jusify-content-start">
              <Button
                href={PdfFile}
                download={true}
                class="downloadpdfBtn mb-3"
              >
                <svg
                  class="svgIcon"
                  viewBox="0 0 384 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                </svg>
                <span class="icon2"></span>
                <span class="tooltip">Download</span>
              </Button>
            </div>
            <Document
              file={PdfFile}
              onLoadSuccess={onDocumentLoadSuccess}
              loading="Loading..."
              onLoadError={(error) =>
                console.error("Document loading failed:", error)
              }
              inputRef={pdfRef}
            >
              <Page height={height} width={width} pageNumber={pageNumber} />
            </Document>
            {numPages && (
              <p className="text-white">
                Page {pageNumber} of {numPages}
              </p>
            )}
            <div className="d-flex gap-4">
              {pageNumber > 1 && (
                <FaArrowRight
                  onClick={changepageBack}
                  size={20}
                  className="pointer"
                  color="#EFAA20"
                />
              )}
              {pageNumber < numPages && (
                <FaArrowLeft
                  onClick={changepageNext}
                  size={20}
                  color="#EFAA20"
                  className="pointer"
                />
              )}
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default Pdf;
