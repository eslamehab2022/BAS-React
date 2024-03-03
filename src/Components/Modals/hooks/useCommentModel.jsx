import React, { useState } from 'react'

export default function useCommentModel() {
    const [showComment, setShowComment] = useState(false);
    const handleCloseComment = () => setShowComment(false);
  
  const handleShowComment = () => {
    setShowComment(true);
  };
  return ({
    showComment,
    handleCloseComment,
    handleShowComment
  })
}
