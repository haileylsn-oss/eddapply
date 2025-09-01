import { FaFacebookF, FaTwitter,  FaPhone, FaEnvelope } from "react-icons/fa";
import logo from '../assets/LOGO-removebg-preview.png'
const Footer = () => {
  return (
    <footer className="bg-[#ccc] text-white py-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* About United Way Benefits */}
          <div>
            <img src={logo} width="200" className="m-auto" />
            <p className="text-black mt-3 text-sm">
              Empowering individuals and families by providing financial assistance, 
              health services, and community support programs.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-blue-800 ">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-black">
              <li><a href="#" className="hover:text-blue-800 transition">Home</a></li>
              <li><a href="#" className="hover:text-blue-800 transition">About Us</a></li>
              <li><a href="#" className="hover:text-blue-800 transition">Programs</a></li>
              <li><a href="#" className="hover:text-blue-800 transition">Resources</a></li>
              <li><a href="#" className="hover:text-blue-800 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information
          <div>
            <h3 className="text-lg font-semibold text-blue-800">Contact Us</h3>
            <div className="text-black mt-3 text-sm flex flex-col justify-center ">
                <div className="flex gap-2  "> <FaLocationArrow/> <p>123 Hope Street, New York, NY 10001</p></div>
                <div className="flex gap-2  "> <FaPhone/> <p>(123) 456-7890 </p></div>
                <div className="flex gap-2  "> <FaEnvelope/> <p>support@unitedwaybenefits.org</p></div>
             
            
             
            </div>
          </div> */}
        </div>

        {/* Social Media & Newsletter Section */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-center">
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-blue-500 transition">
              <FaFacebookF className="text-white text-lg" />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-blue-500 transition">
              <FaTwitter className="text-white text-lg" />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-blue-500 transition">
              <FaPhone className="text-white text-lg" />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-blue-500 transition">
              <FaEnvelope className="text-white text-lg" />
            </a>
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-4 md:mt-0">
            <h3 className="text-lg font-semibold text-blue-800">Subscribe to Our Newsletter</h3>
            <div className="flex mt-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-l-md text-gray-900 focus:outline-none"
              />
              <button className="bg-black px-4 py-2 rounded-r-md hover:bg-blue-800 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-gray-800 text-center text-sm mt-6">
          &copy; {new Date().getFullYear()} Economic Development Administration. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
