import React, { useState } from "react";

export default function useCustomModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  //   const onSave
  return {
    handleShow,
    handleClose,
    show,
  };
}
