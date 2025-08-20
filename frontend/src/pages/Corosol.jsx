 import React, { useState, useEffect } from 'react';

 // --- ICONS (INLINE SVGS TO AVOID DEPENDENCIES) ---
 const ChevronLeft = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>;
 const ChevronRight = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>;
 const FaShippingFast = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M572.69 249.34c-2.33-3.83-6.18-6.34-10.69-6.34H480V176c0-26.51-21.49-48-48-48H224c-26.51 0-48 21.49-48 48v160H48.57c-4.45 0-8.3 2.46-10.57 6.13C35.74 340.08 32 348.45 32 357.35V416c0 35.3 28.7 64 64 64h64c35.3 0 64-28.7 64-64v-32h128v32c0 35.3 28.7 64 64 64h64c35.3 0 64-28.7 64-64v-58.65c0-8.9-3.74-17.27-10.01-22.88L496 264.78l76.69-15.42zM224 336c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm128 0c-8.84 0-16-7.16-16-16s7.16-16 16-16 16 7.16 16 16-7.16 16-16 16zm-208-48H48V176c0-8.84 7.16-16 16-16h144v160zm16 80c0 8.84-7.16 16-16 16H96c-8.84 0-16-7.16-16-16v-16h112v16zm160 0v-16h112v16c0 8.84-7.16 16-16 16h-64c-8.84 0-16-7.16-16-16zm160-128h-96v-48h132.57l-36.57 7.37zM16 160h144v-32H16v32z"></path></svg>;
 const FaGift = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-76.4 29-85.9 67.4C262.2 32.4 227.4 3 185.9 3 137.4 3 97.9 42.5 97.9 91c0 14.5 3.8 27.9 10.1 40H64c-17.7 0-32 14.3-32 32v64h448v-64c0-17.7-14.3-32-32-32zM160 91c0-13.3 10.7-24 24-24s24 10.7 24 24-10.7 24-24 24-24-10.7-24-24zm168 24c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24z"></path></svg>;
 const TbMoneybag = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 7.5a1 1 0 1 0-1-1a1 1 0 0 0 1 1ZM12 21.74a6.4 6.4 0 0 1-2.9-1.09a1 1 0 0 0-1.2 1.6a8.39 8.39 0 0 0 8.2 0a1 1 0 0 0-1.2-1.6A6.4 6.4 0 0 1 12 21.74Z"></path><path d="M12 2a10 10 0 0 0-7.74 16.2a1 1 0 0 0 .5.19a1 1 0 0 0 .71-.29a1 1 0 0 0-.22-1.42A8 8 0 0 1 12 4a8 8 0 0 1 8 8a1 1 0 0 0 2 0a10 10 0 0 0-10-10Z"></path><path d="M12 6a6 6 0 0 0-6 6a1 1 0 0 0 2 0a4 4 0 0 1 4-4a1 1 0 0 0 0-2Z"></path></svg>;
 const GiReturnArrow = () => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm212.3-64.3c-9.3-9.3-24.5-9.3-33.9 0l-50.1 50.1c-9.3 9.3-9.3 24.5 0 33.9l50.1 50.1c9.3 9.3 24.5 9.3 33.9 0 9.3-9.3 9.3-24.5 0-33.9l-14.3-14.3h106.1c13.3 0 24-10.7 24-24s-10.7-24-24-24H245.7l14.6-14.6c9.4-9.3 9.4-24.5.1-33.9z"></path></svg>;

 // --- SLIDE DATA ---
 const slideContent = [
     {
         title: "Flat 25% Off",
         subtitle: "On Your First Medicine Order",
         discount: "Use Code: FIRSTCARE",
         imageUrl: "https://images.unsplash.com/photo-1584308666744-8480404b65ae?q=80&w=2070&auto=format&fit=crop"
     },
     {
         title: "Fast Delivery Across Rajkot",
         subtitle: "Within 24 Hours",
         discount: "Authentic Medicines at Your Doorstep",
         imageUrl: "https://images.unsplash.com/photo-1604935334968-c213a5d6772b?q=80&w=1974&auto=format&fit=crop"
     },
     {
         title: "Healthcare Essentials",
         subtitle: "Up to 40% Off",
         discount: "Vitamins, Supplements, and More",
         imageUrl: "https://images.unsplash.com/photo-1625050723464-9a0a7f18e434?q=80&w=2070&auto=format&fit=crop"
     },
 ];

 // --- REUSABLE FEATURE COMPONENT ---
 const FeatureCard = ({ icon, title, subtitle }) => (
     <div className="flex items-center p-4">
         <div className="text-orange-500 mr-4 text-3xl">
             {icon}
         </div>
         <div>
             <p className="font-bold text-gray-800">{title}</p>
             <p className="text-sm text-gray-500">{subtitle}</p>
         </div>
     </div>
 );

 // --- MAIN CAROUSEL COMPONENT ---
 const HomeCarousel = () => {
     const [currentSlide, setCurrentSlide] = useState(0);

     const nextSlide = () => {
         setCurrentSlide((prev) => (prev === slideContent.length - 1 ? 0 : prev + 1));
     };

     const prevSlide = () => {
         setCurrentSlide((prev) => (prev === 0 ? slideContent.length - 1 : prev - 1));
     };

     useEffect(() => {
         const slideInterval = setInterval(nextSlide, 5000); // Auto-play every 5 seconds
         return () => clearInterval(slideInterval);
     }, []);

     return (
         <div className="w-full mx-auto my-8">
             {/* Carousel Section */}
             <div className="relative overflow-hidden max-w-5xl mx-auto"> {/* Added max-w-5xl and mx-auto */}
                 {/* Slides Container */}
                 <div
                     className="flex transition-transform ease-out duration-500"
                     style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                 >
                     {slideContent.map((slide, index) => (
                         <div key={index} className="relative h-64 md:h-96 w-full flex-shrink-0">
                             <img src={slide.imageUrl} alt={slide.title} className="w-full h-full object-cover" />
                             <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start p-8 md:p-16 text-white">
                                 <p className="text-lg md:text-xl">{slide.subtitle}</p>
                                 <h1 className="text-3xl md:text-5xl font-bold my-2">{slide.title}</h1>
                                 <p className="text-md md:text-lg bg-orange-500 px-3 py-1 rounded-md font-semibold">{slide.discount}</p>
                             </div>
                         </div>
                     ))}
                 </div>

                 {/* Navigation Buttons */}
                 <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-30 p-2 rounded-full hover:bg-opacity-50 z-10 transition-all">
                     <ChevronLeft />
                 </button>
                 <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-30 p-2 rounded-full hover:bg-opacity-50 z-10 transition-all">
                     <ChevronRight />
                 </button>
             </div>

             {/* Features Section */}
             <div className="bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4 border-t border-b border-gray-200 max-w-5xl mx-auto"> {/* Added max-w-5xl mx-auto */}
                 <FeatureCard icon={<FaShippingFast />} title="Free Shipping" subtitle="On orders over ₹500" />
                 <FeatureCard icon={<TbMoneybag />} title="Secure Payments" subtitle="100% Secure Transaction" />
                 <FeatureCard icon={<FaGift />} title="Member Offers" subtitle="Discounts on monthly supplies" />
                 <FeatureCard icon={<GiReturnArrow />} title="Easy Returns" subtitle="7-Day Return Policy" />
             </div>
         </div>
     );
 }

 export default HomeCarousel;
 