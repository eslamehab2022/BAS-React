import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Calculator from "../../../Pages/System/Plans/components/Calculator";
import { Link } from "react-router-dom";
import Image from "../../Image";
import Notifications from "../../../Pages/System/Notifications/Notifications";

const SystemControler = ({ child }) => {
  const [showCalculator, setShowCalculator] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const handleShowCalculator = () => setShowCalculator(true);
  const handleCloseCalculator = () => setShowCalculator(false);
  const handleToggleNotifications = () =>
    setShowNotifications(!showNotifications);

  return (
    <>
      <div className="user-control-model px-4  mb-4 d-flex align-items-center justify-content-between">
        <div className="  w-100">{child}</div>
        <div className="icons  flex gap-1">
          <IconButton onClick={handleShowCalculator} aria-label="calculator">
            <Image
              src={process.env.PUBLIC_URL + "/icons/Calculator.png"}
              alt="Calculator Image"
              className="pointer system-notification mx-1"
            />
          </IconButton>

          <IconButton aria-label="messages">
            <Link to={"/System/Chat/index"}>
              <Image
                src={process.env.PUBLIC_URL + "/icons/messages.png"}
                alt="messages Image"
                className="pointer system-notification mx-1"
              />
            </Link>
          </IconButton>

          <IconButton
            onClick={handleToggleNotifications}
            aria-label="notification"
          >
            <Image
              src={process.env.PUBLIC_URL + "/icons/notification.png"}
              alt="notification Image"
              className="pointer system-notification mx-1"
            />
          </IconButton>
        </div>
      </div>
      <Notifications show={showNotifications} />
      <Calculator show={showCalculator} onClose={handleCloseCalculator} />
    </>
  );
};
export default SystemControler;
