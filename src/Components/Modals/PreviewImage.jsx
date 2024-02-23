import React from 'react'
import { Modal } from "react-bootstrap";
import Image from '../Image';

export default function PreviewImage({onClose,showImg ,imgSrc }) {
  return (
    <Modal
          size="lg"
          show={showImg}
          onHide={onClose}
          aria-labelledby="example-modal-sizes-title-lg"
          className="showRequestImg"
        >
          <Image
            className="pointer w-100 h-100  instrutmentimg"
            src={imgSrc}
            alt="owner img"
          />
        </Modal>
  )
}
