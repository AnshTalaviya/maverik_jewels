import React, { useState } from "react";
import Slider from "react-slick";
import { FaInstagram } from "react-icons/fa";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    src: "/images/onee.jpg",
    description: "Elegant gold ring with a brilliant-cut diamond",
  },
  {
    src: "/images/twoo.jpg",
    description: "Minimalist gold ring perfect for everyday wear",
  },
  {
    src: "/images/three.jpg",
    description: "Vintage-inspired statement ring for engagements",
  },
  {
    src: "/images/four.jpg",
    description: "Modern twist with double-band and solitaire diamond",
  },
  {
    src: "/images/three.jpg",
    description: "Modern twist with double-band and solitaire diamond",
  },
  {
    src: "/images/four.jpg",
    description: "Modern twist with double-band and solitaire diamond",
  },
];

const InstagramSlider = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index) => {
    setActiveIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);
  const prevImage = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextImage = () => setActiveIndex((prev) => (prev + 1) % images.length);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow:6 ,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="px-4 py-8">



    

      <Slider {...sliderSettings}>
        {images.map((item, index) => (
          <div key={index} className="p-2">
            <div
              className="relative group cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                src={item.src}
                alt=""
                className="w-full h-auto rounded-xl shadow-md group-hover:opacity-60 transition"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition rounded-xl">
                <FaInstagram className="text-white text-3xl" />
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-xl max-w-xl w-full p-6 text-center">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <X size={28} />
            </button>

            <img
              src={images[activeIndex].src}
              alt="Modal Preview"
              className="w-full rounded-lg"
            />
            <p className="mt-4 text-gray-800 text-base">
              {images[activeIndex].description}
            </p>

            <div className="flex justify-between mt-6">
              <button onClick={prevImage} className="text-gray-700 hover:text-black">
                <ChevronLeft size={30} />
              </button>
              <button onClick={nextImage} className="text-gray-700 hover:text-black">
                <ChevronRight size={30} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstagramSlider;
