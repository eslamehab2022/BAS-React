import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import SaveButton from "../SaveButton";

const AddAttachment = ({ attachment, setAttachment }) => {
  const [openAddAttachemnt, setOpenAddAttachemnt] = useState(false);
  return (
    <div className="w-100 ">
      {openAddAttachemnt && (
        <Modal
          className="submitSystemPoper"
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          onHide={() => setOpenAddAttachemnt(false)}
          show={openAddAttachemnt}
        >
          <Modal.Body className="d-flex align-items-center">
            <img
              src={`${process.env.PUBLIC_URL}/chooseFile.png`}
              className="my-3"
              alt="choose file"
            />
            <Form.Group className={``} controlId="formBasicImage">
              <Form.Control
                type="file"
                name="imageFile"
                multiple={true}
                htmlFor="formFile"
                className={`chooseFile text-white`}
                onChange={(e) => setAttachment(e.currentTarget.files[0].name)}
              />
            </Form.Group>
            <div
              className="my-3"
              onClick={() => {
                setOpenAddAttachemnt(false);
              }}
            >
              <SaveButton />
            </div>
          </Modal.Body>
        </Modal>
      )}

      <div
        className={`addFileShape pointer my-1 bg-[#2B2B40] p-0  d-flex flex-column align-items-center justfiy-content-center`}
      >
        <div
          className={` pointer bg-[#2B2B40]   d-flex flex-column align-items-center justfiy-content-center`}
        >
          <div
            onClick={() => {
              setOpenAddAttachemnt(true);
            }}
          >
            <svg
              className="m-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M1 8H8M8 8H15M8 8V15M8 8V1"
                stroke="#EFAA20"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-sm mx-auto text-white">اضافة جديدة</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAttachment;
