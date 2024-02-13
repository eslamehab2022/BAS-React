import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export default function AddNewCitizenServices({
  title,
  show,
  handleClose,
  arr,
  id,
  type,
}) {
  const [inputVal, setInputVal] = useState("");
  const handleSave = () => {
    arr((prev) => {
      // console.log(prev.subCategories)
      return prev.map((item) =>
        item.id == id ? { ...item, name: inputVal } : item
      );
      // {...prev,subCategories: [...prev.subCategories,{id:prev.subCategories.length+1,name:inputVal}] }
    });
    handleClose();
  };
  return (
    <Modal
      centered
      contentClassName="bg-[#1E1E2D] border !max-w-[700px] !border-[#EFAA20] !rounded-[20px] text-white"
      show={show}
      onHide={handleClose}
      size="lg"
    >
      {type === "vacations" ? (
        <>
          <Modal.Header className="!justify-between border-none">
            <Modal.Title className="text-xl">{title}</Modal.Title>
            <Button
              className="p-0 bg-transparent hover:bg-transparent"
              onClick={handleClose}
            >
              <img src="/Rejected.png" alt="" />
            </Button>
          </Modal.Header>
          <Modal.Body>
            <input
              className="w-full bg-[#161622] py-3 px-2 rounded-[7px] outline-none"
              type="text"
              placeholder="ادخل الاسم"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer className="border-none">
            <Button
              className="mx-auto py-1 px-14 font-semibold text-[15px] border !border-[#EFAA20] text-[#2B2B40] hover:text-white bg-[#EFAA20] hover:bg-[#2B2B40]"
              onClick={handleSave}
            >
              حفظ
            </Button>
          </Modal.Footer>
        </>
      ) : null}
      {type === "services" ? (
        <>
          <Modal.Header className="!justify-between border-none">
            <div className=""></div>
            <Modal.Title className="p-2 text-xl border !border-[#EFAA20] rounded-[5px] text-[#EFAA20]">
              {title}
            </Modal.Title>
            <Button
              className="p-0 bg-transparent hover:bg-transparent"
              onClick={handleClose}
            >
              <img src="/Rejected.png" alt="" />
            </Button>
          </Modal.Header>
          <Modal.Body>
            <div className="w-full ">
              <div className="flex flex-col gap-2 mb-3">
                <p className="">اسم الخدمة</p>
                <input
                  className="w-full bg-[#161622] py-3 px-2 rounded-[7px] outline-none"
                  type="text"
                  placeholder="ادخل الاسم"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2 mb-2">
                <p className="">ارفاق الملف</p>
                <label
                  htmlFor="upload-image"
                  className="w-full cursor-pointer grid place-content-center bg-[#161622] py-4 px-2 rounded-[7px] outline-none"
                >
                  <input
                    id="upload-image"
                    className="hidden"
                    type="file"
                    placeholder="ادخل الاسم"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                  />
                  <div className="flex flex-col items-center justify-center gap-1">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="32"
                      viewBox="0 0 35 32"
                      fill="none"
                    >
                      <path
                        d="M17.2234 16.0178V30.0121M17.2234 16.0178L13.3361 19.1276M17.2234 16.0178L21.1107 19.1276M6.39179 11.5349C4.92116 11.905 3.63628 12.7993 2.77854 14.0499C1.92081 15.3005 1.54927 16.8213 1.73372 18.3265C1.91817 19.8317 2.64592 21.2178 3.78025 22.2243C4.91457 23.2307 6.37738 23.7884 7.89385 23.7924H9.44878"
                        stroke="white"
                        stroke-width="2.70019"
                        stroke-linecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M23.172 8.45814C22.6406 6.35366 21.3288 4.52999 19.5026 3.35683C17.6764 2.18366 15.4724 1.74878 13.3375 2.14033C11.2026 2.53188 9.29638 3.72057 8.00536 5.46543C6.71435 7.2103 6.1351 9.38078 6.38504 11.5369C6.38504 11.5369 6.62294 12.9083 7.10963 13.6858"
                        stroke="white"
                        strokeWidth="2.70019"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M24.9967 23.7934C26.0945 23.7926 27.1798 23.5594 28.181 23.109C29.1822 22.6586 30.0766 22.0013 30.8055 21.1803C31.5343 20.3593 32.081 19.3933 32.4096 18.3458C32.7382 17.2982 32.8412 16.193 32.7119 15.1028C32.5825 14.0126 32.2238 12.9622 31.6592 12.0206C31.0946 11.0791 30.3371 10.2678 29.4364 9.64013C28.5357 9.01246 27.5122 8.58267 26.4334 8.37905C25.3546 8.17542 24.245 8.20257 23.1774 8.45872L21.1094 9.0216"
                        stroke="white"
                        strokeWidth="2.70019"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                <p>ارفق الملف</p>
                  </div>
                </label>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="border-none">
            <Button
              className="mx-auto py-1 px-14 font-semibold text-[15px] border !border-[#EFAA20] text-[#2B2B40] hover:text-white bg-[#EFAA20] hover:bg-[#2B2B40]"
              onClick={handleSave}
            >
              حفظ
            </Button>
          </Modal.Footer>
        </>
      ) : null}
    </Modal>
  );
}
