import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import SaveButton from "../../../Components/SaveButton";
// import CloseBtn from "/assets/icons/Rejected.svg"
function ViewModel({ title, show, handleClose, data }) {  

  return (
    <>
      <Modal
        centered
        contentClassName="bg-[#1E1E2D] border !border-[#EFAA20] !max-w-[700px] overflow-hidden !rounded-[20px] text-white"
        show={show}
        onHide={handleClose}
        size="lg"
      >
        <Modal.Header className="bg-[#1E1E2D] !rounded-[0px] !justify-between border-none">
          <div className=""></div>
          <Modal.Title className="text-[#EFAA20] text-xl font-semibold border !border-[#EFAA20] py-2 px-7 rounded-md">
            {title}
          </Modal.Title>
          <Button
            className="p-0 bg-transparent hover:bg-transparent"
            onClick={handleClose}
          >
            <img src="/Rejected.png" alt="" />
          </Button>
        </Modal.Header>
        <Modal.Body className="justify-start">
          <div className="w-full text-start">
            <p className="text-end py-3 px-2 font-semibold rounded-[7px] outline-none">
              اسم البند : <span className="text-[#ffffff4c]">{data?.name}</span>
            </p>
            <p className="text-end py-3 px-2 font-semibold rounded-[7px] outline-none">
              الوصف
            </p>
            <div className="min-h-[200px] border !border-[#EFAA20] rounded-md">
              {/* <textarea
                className="bg-transparent w-full px-2 py-3"
                // placeholder="وصف البند "
                value={data?.description}
              ></textarea> */}
              <p className="text-right bg-transparent w-full px-2 py-3 text-white">{data?.descraption}</p>
            </div>
            <p className="text-end py-3 px-2 font-semibold rounded-[7px] outline-none">
              المرفقات
            </p>

            <div className="!justify-start p-3 border !border-[#EFAA20] rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="93"
                height="92"
                viewBox="0 0 93 92"
                fill="none"
              >
                <path
                  d="M0 7C0 3.13401 3.13401 0 7 0H86C89.866 0 93 3.13401 93 7V85C93 88.866 89.866 92 86 92H7C3.13401 92 0 88.866 0 85V7Z"
                  fill="#252538"
                />
                <path
                  d="M0 7C0 3.13401 3.13401 0 7 0H86C89.866 0 93 3.13401 93 7V85C93 88.866 89.866 92 86 92H7C3.13401 92 0 88.866 0 85V7Z"
                  fill="#151521"
                />
                <path
                  d="M57.3863 35H34.0603C33.4747 35 33 35.4747 33 36.0603V55.1452C33 55.7308 33.4747 56.2055 34.0603 56.2055H57.3863C57.9719 56.2055 58.4466 55.7308 58.4466 55.1452V36.0603C58.4466 35.4747 57.9719 35 57.3863 35Z"
                  stroke="white"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M33 50.9047L39.6665 44.2382C39.7651 44.138 39.8827 44.0584 40.0124 44.0041C40.1421 43.9498 40.2813 43.9219 40.4219 43.9219C40.5625 43.9219 40.7017 43.9498 40.8314 44.0041C40.9611 44.0584 41.0787 44.138 41.1774 44.2382L47.0884 50.1492C47.1871 50.2494 47.3047 50.329 47.4343 50.3833C47.564 50.4376 47.7032 50.4655 47.8438 50.4655C47.9844 50.4655 48.1236 50.4376 48.2533 50.3833C48.383 50.329 48.5006 50.2494 48.5993 50.1492L51.3295 47.419C51.4282 47.3188 51.5458 47.2393 51.6754 47.185C51.8051 47.1307 51.9443 47.1027 52.0849 47.1027C52.2255 47.1027 52.3647 47.1307 52.4944 47.185C52.6241 47.2393 52.7417 47.3188 52.8404 47.419L58.4466 53.0252"
                  stroke="white"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M49.4342 43.4826C50.3125 43.4826 51.0246 42.7705 51.0246 41.8922C51.0246 41.0138 50.3125 40.3018 49.4342 40.3018C48.5558 40.3018 47.8438 41.0138 47.8438 41.8922C47.8438 42.7705 48.5558 43.4826 49.4342 43.4826Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-none justify-center gap-2">
          {/* <SaveButton onClick={handleSave} /> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ViewModel;
