import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaShippingFast } from "react-icons/fa";
import { TbMoneybag } from "react-icons/tb";
import { FaGift } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";

const Corosol = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slideContent = [
        {
            // title: "",
            // subtitle: "",
            // discount: "",
            // imageUrl: ""
        },
        {
            // title: "",
            // subtitle: "",
            // discount: "",
            // imageUrl: ""
        },
       
    ];

    return (
        <div className="flex flex-col items-center">
            {/* Main Heading */}
            <h1 className="text-xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4 p-5">Unlock Amazing Deals Today!</h1>


            <div className="relative w-full">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    showStatus={false}
                    className="w-full h-auto"
                    onChange={(index) => setCurrentSlide(index)} // Track the active slide
                    renderArrowPrev={(onClickHandler, hasPrev) =>
                        hasPrev && (
                            <button
                                onClick={onClickHandler}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-transparent border border-white px-3 py-1 rounded hover:bg-gray-700 hover:bg-opacity-50 z-10 mt-16 md:mt-0" // Make button transparent
                            >
                              Prev
                            </button>
                        )
                    }
                    renderArrowNext={(onClickHandler, hasNext) =>
                        hasNext && (
                            <button
                                onClick={onClickHandler}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-transparent border border-white px-3 py-1 rounded hover:bg-gray-700 hover:bg-opacity-50 z-10 mt-16 md:mt-0" // Make button transparent
                            >
                                Next
                            </button>
                        )
                    }
                >
                    {slideContent.map((slide, index) => (
                        <div key={index}>
                            <img src={slide.imageUrl} alt={`Offer ${index + 1}`} className="w-full h-96 object-cover" />
                        </div>
                    ))}
                </Carousel>
                <div className="absolute top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-1/4 text-left text-white">
                    <p className="text-sm">{slideContent[currentSlide].subtitle}</p>
                    <h1 className="text-4xl font-bold">{slideContent[currentSlide].title}</h1>
                    <hr className="w-16 border-white my-4" />
                    <p className="text-lg">{slideContent[currentSlide].discount}</p>
                </div>
            </div>
            <div className="flex flex-wrap justify-around w-full py-8 bg-white">
                <div className="flex flex-col items-center hover:text-orange-500 hover:bg-gray-200 transition-colors duration-300 p-4 rounded-lg cursor-pointer">
                    <i className="fas fa-shipping-fast text-2xl mb-2"><FaShippingFast /></i>
                    <p className="font-bold">FAST & FREE SHIPPING</p>
                    
                </div>
                <div className="flex flex-col items-center hover:text-orange-500 hover:bg-gray-200 transition-colors duration-300 p-4 rounded-lg cursor-pointer">
                    <i className="fas fa-dollar-sign text-2xl mb-2"><TbMoneybag /></i>
                    <p className="font-bold"></p>
                    <p className="">Call +09507171079</p>
                </div>
                <div className="flex flex-col items-center hover:text-orange-500 hover:bg-gray-200 transition-colors duration-300 p-4 rounded-lg cursor-pointer">
                    <i className="fas fa-gift text-2xl mb-2"><FaGift /></i>
                    <p className="font-bold">ONLINE HELP SUPPORT</p>
                    <p className="">Sign Up For Amazing Offers</p>
                </div>
                <div className="flex flex-col items-center hover:text-orange-500 hover:bg-gray-200 transition-colors duration-300 p-4 rounded-lg cursor-pointer">
                    <i className="fas fa-undo text-2xl mb-2"><GiReturnArrow /></i>
                    <p className="font-bold">Transportation Charge not refundable</p>
                   
                </div>
            </div>
        </div>
    );
}

export default Corosol;
