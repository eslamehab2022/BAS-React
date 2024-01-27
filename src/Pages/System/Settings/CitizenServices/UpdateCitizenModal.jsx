import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IoClose } from "react-icons/io5";
import IconButton from "@mui/material/IconButton";
import SaveButton from "../../../../Components/SaveButton";
// import CloseBtn from "/assets/icons/Rejected.svg"
function UpdateCitizenModal({ title, show, handleClose, arr, id }) {
  const [inputVal, setInputVal] = useState("");
  const handleSave = () => {
    arr((prev) => {
      const filteredData = prev.filter((prev) => prev.id != id);

      // console.log(prev.subCategories)
      return filteredData;
      //   return [...prev,{id:prev.length+1,name:inputVal}]
    });
    handleClose();
  };

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
            اسم الخدمة
            </p>
            <input type="text" placeholder="ادخل الاسم" className="w-full bg-[#161622] rounded-md px-2 py-3 mb-3" />
            
            <p className="text-end py-3 px-2 font-semibold rounded-[7px] outline-none">
            ارفاق صورة
            </p>

            <div className="!justify-start  gap-5 p-3 border !border-[#EFAA20] rounded-md">
              
              <div className="w-24  overflow-hidden relative bg-[#252538] rounded-md text-center">
              <button className="absolute top-1 left-1 ">
              <IoClose />
              </button>
              <div className="w-full h-16 rounded-md bg-[#151521] grid place-content-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
  <g clip-path="url(#clip0_2966_33145)">
    <path d="M20.8673 25.3569H4.56224C4.25172 25.3569 4 25.1051 4 24.7946V0.618152C4 0.307625 4.25172 0.0559082 4.56224 0.0559082H16.9316C17.0807 0.0559082 17.2237 0.115169 17.3292 0.220589L21.2649 4.1563C21.3703 4.26172 21.4296 4.40475 21.4296 4.55386V11.3008C21.4296 11.6113 21.1778 11.863 20.8673 11.863C20.5568 11.863 20.3051 11.6113 20.3051 11.3008V4.78674L16.6987 1.1804H5.12449V24.2324H20.3051V21.4212C20.3051 21.1107 20.5568 20.8589 20.8673 20.8589C21.1778 20.8589 21.4296 21.1107 21.4296 21.4212V24.7946C21.4296 25.1051 21.1778 25.3569 20.8673 25.3569Z" fill="white"/>
    <path d="M16.9223 28.7303H1.17943C0.868904 28.7303 0.617188 28.4786 0.617188 28.1681V5.1161C0.617188 4.80558 0.868904 4.55386 1.17943 4.55386H4.55289C4.86342 4.55386 5.11514 4.80558 5.11514 5.1161C5.11514 5.42663 4.86342 5.67835 4.55289 5.67835H1.74168V27.6059H16.36V24.7946C16.36 24.4842 16.6118 24.2324 16.9223 24.2324C17.2327 24.2324 17.4845 24.4842 17.4845 24.7946V28.1681C17.4845 28.4786 17.2327 28.7303 16.9223 28.7303ZM20.858 5.1161H16.9223C16.6118 5.1161 16.36 4.86439 16.36 4.55386V0.618152C16.36 0.307625 16.6118 0.0559082 16.9223 0.0559082C17.2327 0.0559082 17.4845 0.307625 17.4845 0.618152V3.99162H20.858C21.1684 3.99162 21.4202 4.24333 21.4202 4.55386C21.4202 4.86439 21.1684 5.1161 20.858 5.1161Z" fill="white"/>
    <path d="M27.609 21.9834H10.1794C9.8689 21.9834 9.61719 21.7316 9.61719 21.4212V11.3008C9.61719 10.9902 9.8689 10.7385 10.1794 10.7385H27.609C27.9195 10.7385 28.1712 10.9902 28.1712 11.3008V21.4212C28.1712 21.7316 27.9195 21.9834 27.609 21.9834ZM10.7417 20.8589H27.0467V11.863H10.7417V20.8589Z" fill="white"/>
    <path d="M12.4294 19.5338C12.1189 19.5338 11.8672 19.282 11.8672 18.9715V13.3491C11.8672 13.0386 12.1189 12.7869 12.4294 12.7869H13.835C14.9201 12.7869 15.8029 13.6696 15.8029 14.7547C15.8029 15.8398 14.9201 16.7226 13.835 16.7226H12.9917V18.9715C12.9917 19.282 12.74 19.5338 12.4294 19.5338ZM12.9917 15.5981H13.835C14.3001 15.5981 14.6784 15.2198 14.6784 14.7547C14.6784 14.2897 14.3001 13.9114 13.835 13.9114H12.9917V15.5981ZM18.4454 19.5338H17.4896C17.1792 19.5338 16.9274 19.282 16.9274 18.9715V13.3491C16.9274 13.0386 17.1792 12.7869 17.4896 12.7869H18.4454C20.0886 12.7869 21.4253 14.1237 21.4253 15.7668V16.5539C21.4253 18.1971 20.0886 19.5338 18.4454 19.5338ZM18.0519 18.4093H18.4454C19.4685 18.4093 20.3008 17.577 20.3008 16.5539V15.7668C20.3008 14.7437 19.4685 13.9114 18.4454 13.9114H18.0519V18.4093ZM23.1121 19.5338C22.8016 19.5338 22.5498 19.282 22.5498 18.9715V13.3491C22.5498 13.0386 22.8016 12.7869 23.1121 12.7869H25.361C25.6715 12.7869 25.9233 13.0386 25.9233 13.3491C25.9233 13.6596 25.6715 13.9114 25.361 13.9114H23.6743V18.9715C23.6743 19.282 23.4225 19.5338 23.1121 19.5338Z" fill="white"/>
    <path d="M24.804 16.9236H23.1173C22.8068 16.9236 22.5551 16.6718 22.5551 16.3613C22.5551 16.0508 22.8068 15.7991 23.1173 15.7991H24.804C25.1145 15.7991 25.3663 16.0508 25.3663 16.3613C25.3663 16.6718 25.1145 16.9236 24.804 16.9236ZM18.6194 9.61438H6.81224C6.50172 9.61438 6.25 9.36267 6.25 9.05214C6.25 8.74161 6.50172 8.48989 6.81224 8.48989H18.6194C18.9298 8.48989 19.1816 8.74161 19.1816 9.05214C19.1816 9.36267 18.9298 9.61438 18.6194 9.61438ZM18.6194 7.36541H6.81224C6.50172 7.36541 6.25 7.11369 6.25 6.80316C6.25 6.49264 6.50172 6.24092 6.81224 6.24092H18.6194C18.9298 6.24092 19.1816 6.49264 19.1816 6.80316C19.1816 7.11369 18.9298 7.36541 18.6194 7.36541ZM12.4347 5.11643H6.81224C6.50172 5.11643 6.25 4.86471 6.25 4.55419C6.25 4.24366 6.50172 3.99194 6.81224 3.99194H12.4347C12.7452 3.99194 12.9969 4.24366 12.9969 4.55419C12.9969 4.86471 12.7452 5.11643 12.4347 5.11643Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_2966_33145">
      <rect width="28.7869" height="28.7869" fill="white"/>
    </clipPath>
  </defs>
</svg>
              </div>
              <p className="text-xs p-2">المرفق</p>
              </div>
              <label htmlFor="uploadimage" className="w-24 cursor-pointer flex flex-col justify-center border !border-dashed !border-[#EFAA20] items-center bg-[#252538] rounded-md text-center">
              
                <input type="file" name="" id="uploadimage" className="hidden" />
              
              <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M1 8H8M8 8H15M8 8V15M8 8V1"
                      stroke="#EFAA20"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              <p className="text-xs p-2">أضافة جديدة</p>
              </label>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-none justify-center gap-2">
          <SaveButton
            onClick={handleSave}
          >
            حفظ
          </SaveButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateCitizenModal;
