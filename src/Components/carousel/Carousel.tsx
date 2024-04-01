import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../uidesigner/designer.css";
import { IoMdStar } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import "./carousel.css";

interface Testimonial {
  id: number;
  name: string;
  designation?: string;
  comment: string;
  img?: string;
  rating?: number[];
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({
  testimonials,
}) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: (
      <FaArrowLeft
        className="arrow arrow-right"
        style={{ color: "black", marginLeft: "50px" }}
      />
    ),
    nextArrow: (
      <FaArrowRight
        className="arrow arrow-left"
        style={{ color: "black", marginRight: "50px" }}
      />
    ),
  };

  return (
    <div className="test-1">
      <div className="parent-test">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}>
              <div className="design-parent">
                <div className="color">
                  {testimonial.rating?.map((item) => (
                    <IoMdStar style={{ color: "#EAB308" }} />
                  ))}
                </div>
                <div className="arrow-container">
                  <p>{testimonial.comment}</p>
                  <div className="member">
                    <img
                      src={require(`../../assests/${testimonial.img}`)}
                      alt=""
                    />
                    <div className="name">
                      <h5>{testimonial.name}</h5>
                      <h6>{testimonial.designation}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
