
import React from 'react'
import { Form } from 'react-bootstrap'
import { BsBuildings } from "react-icons/bs"
import { Link } from 'react-router-dom'

const DesignCard = () => {
    return (

        // <Link to="/Landing/DesignMultiStep">
            <div className="choice-card design-card d-flex flex-column justify-content-center align-items-center">

                <BsBuildings size={60} color='#E1B67C' />
                <h3 className='mt-3 fs-6'>التصميم</h3>
            </div>
        // </Link>

    )
}

export default DesignCard
