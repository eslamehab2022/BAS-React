import React from "react";
import { Container, Modal } from "react-bootstrap";
import Slider from "react-slick";
import Image from "../Image";
import { staticImageSrc } from "../../Config/Config";
import Progress from "../Progress";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CursolModel = ({ show, onClose, imgs }) => {
  const settings = {
    dots: true,
    arrows: true, // Adding arrows
    infinite: true,
    dir: "rtl",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div>
      <Modal
        size="lg"
        show={show}
        onHide={onClose}
        aria-labelledby="example-modal-sizes-title-lg"
        className=" systemModal"
      >
        <div className=" flex gap-3 items-center justify-center">
          <Slider className="" {...settings}>
            {imgs ? (
              imgs.map((img, index) => (
                <div
                  key={index}
                  className="  flex gap-5 my-5   w-[full] h-[full] rounded  justify-content-center "
                >
                  <Image
                    src={staticImageSrc + img}
                    alt="design carousal"
                    className=" !w-[300px] !h-[300px] mx-3   rounded"
                  />
                </div>
              ))
            ) : (
              <Progress />
            )}
          </Slider>
        </div>
      </Modal>
    </div>
  );
};

export default CursolModel;
