import React, { useState } from 'react'

function useSuccessfullModal() {
    const [showSuccess, setShowSuccess] = useState(false);
    const handleCloseSuccess = () => setShowSuccess(false);
    const handleShowSuccess = () => {
        setShowSuccess(true);
      };
    const [showError, setShowError] = useState(false);
    const handleCloseError = () => setShowError(false);
    const handleShowError = () => {
        setShowError(true);
      };
  return ({
    handleShowSuccess,
    handleShowError,
    handleCloseSuccess,
    handleCloseError,
    showSuccess,
    showError
  })
}

export default useSuccessfullModal