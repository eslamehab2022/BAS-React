import React from 'react'
import { MdOutlineEngineering } from "react-icons/md"
import { Link } from 'react-router-dom'
const ReviewCard = () => {
  return (

    // <Link to="/landing/ReviewMultiSteps">
    <div className="choice-card review-card d-flex flex-column justify-content-center align-items-center">
      <MdOutlineEngineering size={60} color='#E1B67C' />
      <h3 className='mt-3 fs-6'>الاشراف علي التنفيذ</h3>
    </div>
    // </Link>

  )
}

export default ReviewCard
