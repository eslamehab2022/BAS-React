import React, { createContext, useContext, useState } from "react";
import CreateProjectPoper from "../Components/Client/Landing/CreateProjectPoper";
import App from "../App";
import httpRequest from "../helper/https";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { showAddUpdateUser } from "./CheckAddUpdateUserVisability";
import ConfirmPoper from "../Components/System/ConfirmPoper";

export const multiStepContext = React.createContext();
const StepContext = ({ children }) => {
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [checkProjectType, setCheckProjectType] = useState("");
  const { showAddUserModel, setShowAddUserModel } =
    useContext(showAddUpdateUser);
  const { showAddRequest, setShowAdddRequest } = useState(false);
  const [openDesignSteps, setOpenDesignSteps] = useState(true);
  const [openReviewSteps, setOpenReviewSteps] = useState(true);
  const [userData, setUserData] = useState([]);
  const [openDesign, setOpenDesign] = useState(false);
  const [currentStep, setStep] = useState(1);
  const [finalData, setFinalData] = useState([]);
  const [Submitted, setSubmitted] = useState(false);
  const [openCongrats, setOpenCongrats] = useState(false);
  const submitDesign = async (e) => {
    console.log("data submitted");

    setSubmitted(true);
    try {
      const { data } = await httpRequest({
        url: `/posts`,
        // method: "post",
        method: "get",
        // data: userData,
      });
      setSubmitted(false);
      setOpenDesignSteps(false);

      // Handle the response here
    } catch ({ response }) {
      toast.error(response?.data);
      setSubmitted(false);
    } finally {
      setOpenCongrats(true);
      setUserData([]);
    }
  };
  const submitReview = async () => {
    console.log("data submitted");
    setSubmitted(true);
    try {
      const { data } = await httpRequest({
        url: `/posts`,
        // method: "post",
        method: "get",
        // data: userData,
      });
      setSubmitted(false);
      setOpenReviewSteps(false);

      // Handle the response here
    } catch ({ response }) {
      toast.error(response?.data);
      setSubmitted(false);
    } finally {
      setOpenCongrats(true);
      setUserData([]);
    }
  };

  // submit system
  const submitSystemDesign = async (e) => {
    console.log("data submitted");

    setSubmitted(true);
    try {
      const { data } = await httpRequest({
        url: `/posts`,
        // method: "post",
        method: "get",
        // data: userData,
      });

      setConfirmSubmit(true);

      // Handle the response here
    } catch ({ response }) {
      toast.error(response?.data);
      setSubmitted(false);
    } finally {
      setOpenCongrats(true);
      setUserData([]);
      setOpenDesignSteps(false);
    }
  };

  const submitSystemReview = async (e) => {
    console.log("data submitted");

    setSubmitted(true);
    try {
      const { data } = await httpRequest({
        url: `/posts`,
        // method: "post",
        method: "get",
        // data: userData,
      });

      setConfirmSubmit(true);

      // Handle the response here
    } catch ({ response }) {
      toast.error(response?.data);
      setSubmitted(false);
    } finally {
      setOpenCongrats(true);
      setUserData([]);
      setOpenReviewSteps(false);
    }
  };

  return (
    <>
      {confirmSubmit && (
        <ConfirmPoper
          confirmPoper={confirmSubmit}
          setConfirmPoper={setConfirmSubmit}
          setEditRequest={setConfirmSubmit}
          text={"تم اضافة الطلب فى المشاريع بنجاح  "}
        />
      )}
      <multiStepContext.Provider
        value={{
          showAddRequest,
          setShowAdddRequest,
          submitSystemDesign,
          submitSystemReview,
          setOpenReviewSteps,
          checkProjectType,
          setCheckProjectType,
          openReviewSteps,
          setOpenDesignSteps,
          openDesignSteps,
          openCongrats,
          setOpenCongrats,
          userData,
          setUserData,
          finalData,
          setFinalData,
          currentStep,
          setStep,
          openDesign,
          setOpenDesign,
          submitDesign,
          submitReview,
          Submitted,
        }}
      >
        {children}
      </multiStepContext.Provider>
    </>
  );
};

export default StepContext;
