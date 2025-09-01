// import React from "react";
import hero from '../assets/aboout.jpg'
import hero1 from '../assets/about.jpg'
// import hero2 from '../assets/aboout.jpg'
import { motion } from "framer-motion";
import { Globe, HeartHandshake, Users, Phone, ShieldCheck, HandCoins } from "lucide-react";
import SupportBot from '../components/support';

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute bg-black opacity-30 inset-0"></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative  text-center max-w-2xl px-6">
          <h1 className="text-2xl font-bold">About Us</h1>
          <p className="mt-4 text-sm text-gray-300">
            We are dedicated to empowering individuals and families by providing 
            access to essential benefits, financial assistance, and health services.
          </p>
        </div>
      </section>

      <div className="bg-gray-50">
      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <motion.h2 
          className="text-4xl font-bold text-blue-800"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Economic Development Administration
        </motion.h2>
        
        <motion.p 
          className="mt-4 text-gray-700 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          At EDA, we are committed to supporting individuals and families by 
          providing financial assistance, healthcare access, and essential resources. As part of 
          our mission, we collaborate with organizations worldwide to ensure that those in need 
          receive the support they deserve.
        </motion.p>
      </section>

      <SupportBot/>

      {/* Global Reach Section */}
      <section className="bg-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-4xl font-bold"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Our Global Reach
          </motion.h2>

          <motion.p 
            className="mt-4 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
           EDA extends its support across multiple regions, ensuring financial 
            aid and social support reach those who need it the most.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {[
              { title: "North America", region: "United States & Canada", icon: <Globe /> },
              { title: "Australia & Oceania", region: "Supporting various communities", icon: <Globe /> },
              { title: "Europe, Asia & Middle East", region: "Ensuring financial aid distribution", icon: <Globe /> },
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white text-blue-800 p-6 rounded-lg shadow-lg flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                <div className="text-blue-800 p-3 bg-blue-100 rounded-full mb-4 text-4xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-700 mt-2">{item.region}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <img src={hero1} className='mt-3 m-auto' />

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-4xl font-bold text-blue-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose EDA?
          </motion.h2>

          <motion.p 
            className="mt-4 text-gray-700 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            We take pride in providing top-notch assistance and ensuring that beneficiaries receive 
            world-class support.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              { title: "24/7 Support", desc: "Always ready to assist you.", icon: <Phone /> },
              { title: "Financial Assistance", desc: "Programs to uplift families.", icon: <HandCoins /> },
              { title: "Transparency & Fairness", desc: "Ensuring equal distribution.", icon: <ShieldCheck /> },
              { title: "Community Programs", desc: "Focused on education & healthcare.", icon: <Users /> },
              { title: "Self-Sufficiency", desc: "Helping you stand on your own.", icon: <HeartHandshake /> },
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                <div className="text-blue-800 p-3 bg-blue-100 rounded-full mb-4 text-4xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p 
            className="mt-6 text-gray-700 text-lg font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            We believe in transforming lives, one step at a time. If you’re eligible for our programs, 
            apply today and take advantage of the available resources.
          </motion.p>
        </div>
      </section>
    </div>

    </div>
  );
};

export default AboutUs;
