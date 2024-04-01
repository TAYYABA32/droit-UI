import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="test-1">
      <div className="">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="parent-test">
              <div className="design-parent">
                <div className="color">
                  {testimonial.rating?.map((item, index) => (
                    <IoMdStar key={index} style={{ color: "#EAB308" }} />
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
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " arrow arrow-right"}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <FaArrowRight color="black" size={"14px"} />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className + " arrow arrow-left"}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <FaArrowLeft color="black" size={"14px"} />
    </div>
  );
}
