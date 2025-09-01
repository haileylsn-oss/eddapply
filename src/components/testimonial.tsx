import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
// import ReactPlayer from "react-player";
import video from "../assets/aboutus.mp4"; // Replace with actual video
import ReactPlayer from "react-player";
import girl2 from '../assets/girl2.jpg'
import man from '../assets/john.jpg'
import girl from '../assets/mikolo.jpg'


const testimonials = [
  {
    name: "Sarah Johnson",
    review: "I received $500,000 in grant money and it helped me start my  business!",
    rating: 5,
    img : girl2,
    amount: 500000
  },
  {
    name: "James Brown",
    review: "EDA helped me get a $300,000 education grant for college. Amazing support!",
    rating: 4,
    img: man,
    amount: 300000
  },
  {
    name: "Emily Davis",
    review: "I never thought I’d qualify, but I got $250,000 in assistance. Life-changing!",
    rating: 5,
    img : girl,
    amount: 250000
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-12">
      {/* Video Section */}
      <div className="w-full max-w-4xl mx-auto mb-8 rounded-lg shadow-lg overflow-hidden">
      {/* Video Player */}
      <ReactPlayer
        url={video}
        playing
        loop
        muted
        controls
        width="100%"
        height="400px"
      />
    </div>


      {/* Testimonial Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-semibold text-center mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Testimonial
      </motion.h2>

      {/* Testimonial Cards */}
      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.3, duration: 0.5 }}
          >
            <img src={testimonial.img} className="w-[100px] rounded-full h-[100px] m-auto" />
            <h3 className="font-semibold text-lg flex justify-center">{testimonial.name}</h3>
            <p className="text-sm font-bold text-blue-800 flex justify-center">
  {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(testimonial.amount)} Won
</p>

            <p className="text-gray-600 mt-2 flex justify-center">{testimonial.review}</p>
            <div className="flex mt-3 flex justify-center">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
