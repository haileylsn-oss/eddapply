import React, { useState } from 'react';
import img from '../assets/LOGO-removebg-preview.png';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa'; // Import React icon for the close button

const EmailPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-80 flex justify-center items-center z-50">
          <div className="bg-white shadow-lg w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] flex relative rounded-lg overflow-hidden">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-xl text-black hover:text-gray-300"
              onClick={closePopup}
            >
              <FaTimes />
            </button>

            {/* Popup Content */}
            <div className="flex w-full h-full">
              {/* Image on the left */}
              <div className="w-1/2">
                <img
                  src={img} // Replace with the actual image link
                  alt="Model"
                  className="p-[30px] object-cover rounded-md"
                />
              </div>

              {/* Text and Call to Action Button on the right */}
             <div className="w-1/2 p-6 flex flex-col justify-center items-center text-center">
  <h2 className="text-sm font-bold text-gray-800">
   Empowering Lives with Economic Development Administration
  </h2>
  <p className="text-gray-600 mt-4 text-sm font-thin">
    This grant provides financial support to eligible applicants. Review the requirements and check your eligibility today to see if you can benefit from this opportunity.
  </p>
  <Link to="/winners">
    <button className="mt-6 px-6 py-2 text-sm bg-black text-white hover:bg-white hover:border hover:text-black hover:border-black mb-9">
      Check Eligibility
    </button>
  </Link>
</div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmailPopup;
