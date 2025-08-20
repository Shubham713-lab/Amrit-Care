 import React from 'react';
 import { ShoppingCart } from 'lucide-react';

 const HeroBanner = () => {
   return (
     <div className="relative bg-gray-800 text-white h-screen"> {/* Added h-screen here */}
       {/* Background Image */}
       <img
         src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2070&auto=format&fit=crop"
         alt="Pharmacist with medicines"
         className="absolute inset-0 w-full h-full object-cover opacity-30"
       />

       {/* Content */}
       <div className="relative container mx-auto px-4 py-24 md:py-32 text-center flex flex-col justify-center h-full"> {/* Added flex and justify-center */}
         <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
           Fast & Reliable Medicine Delivery
         </h1>
         <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 mb-8">
           Get your essential medicines and healthcare products delivered to your doorstep, right here in Rajkot.
         </p>
         <a
           href="/orders" // Link to your main ordering or product page
           className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 mx-auto" // Added mx-auto
         >
           <ShoppingCart className="mr-2 -ml-1 h-5 w-5" />
           Order Now
         </a>
       </div>
     </div>
   );
 };

 export default HeroBanner;
 