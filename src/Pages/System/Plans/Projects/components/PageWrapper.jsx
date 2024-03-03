import { IoMdArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import {
    IconButton,
  } from "@mui/material";
import { ModalTitle } from "../../../PlanModel/components/ModalTitle";
import SystemControler from "../../../../../Components/System/SystemControler/SystemControler";

export const PageWrapper = ({ children , title }) => {
    const navigate = useNavigate();
    return (
      <>
        <SystemControler
          child={
            <IconButton
              onClick={() => {
                navigate(-1);
              }}
            >
              <IoMdArrowDropright color="white" fontSize={25} />
            </IconButton>
          }
        />
        <div className="flex flex-col bg-[#1E1E2D] p-3 border !border-[#EFAA20] rounded-[27px] min-h-screen">
          <div className="pt-3 pb-4">
            <ModalTitle title={title} />
          </div>
          <div className="h-[650px] overflow-y-scroll scrollbar-none">
            {children}
          </div>
        </div>
      </>
    );
  };