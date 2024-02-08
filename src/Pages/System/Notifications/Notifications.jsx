import React from "react";
import Image from "../../../Components/Image";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
const Notifications = ({ show }) => {
  return (
    <>
      <div
        className={`  absolute  z-10 opacity-0 max-h-0   py-2  border !border-[#2B2B40]   h-[437px] w-1/4  transition-all ease-in-out duration-500   left-[5%] bg-[#1E1E2D] rounded-[7px] overflow-x-hidden overflow-y-auti=o  scrollbar-none backdrop-blur-[15.899999618530273px]    !scrollbar-track-[transparent] !scrollbar-thin !scrollbar-thumb-[#EFAA20] ${
          show && "  opacity-100 max-h-[473px] "
        }   `}
      >
        <div className="h-[140px] pointer my-3 p-2 bg-[#2B2B40] rounded-[9px] w-90 mx-auto">
          <div className="flex gap-3">
            <Image
              src={"/icons/Notifactionicon.png"}
              alt="Notifactionicon image"
              className={"w-[55px] h-[55px] rounded-[50%]"}
            />
            <div className="flex flex-col gap-2">
              <p className="text-[15px] text-[#6A6A71]"> تأكيد الدفع</p>
              <p className="text-[15px] text-white">
                {" "}
                تم تأكيد دفع القيمة الافتتاحية لمشروعك رقم :{" "}
              </p>
            </div>
          </div>
          <div className="flex justify-end items-center gap-4">
            <div className="flex items-center gap-2">
              <p className="text-white">12:30</p>
              <FaRegClock color="#B7B7B7" />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-white">15-10-2023</p>
              <MdOutlineDateRange color="#B7B7B7" />
            </div>
          </div>
        </div>
        <div className="h-[140px] pointer my-3 p-2 bg-[#2B2B40] rounded-[9px] w-90 mx-auto">
          <div className="flex gap-3">
            <Image
              src={"/icons/Notifactionicon.png"}
              alt="Notifactionicon image"
              className={"w-[55px] h-[55px] rounded-[50%]"}
            />
            <div className="flex flex-col gap-2">
              <p className="text-[15px] text-[#6A6A71]"> رساله جديدة </p>
              <p className="text-[15px] text-white">
                {" "}
                لقد تم الرد علي رسالتك يمكنك تفقد محادثاتي:{" "}
              </p>
            </div>
          </div>
          <div className="flex justify-end items-center gap-4">
            <div className="flex items-center gap-2">
              <p className="text-white">12:30</p>
              <FaRegClock color="#B7B7B7" />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-white">15-10-2023</p>
              <MdOutlineDateRange color="#B7B7B7" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;
