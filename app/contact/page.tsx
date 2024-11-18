"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+1) 669 837 6887",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mishafu@usc.edu",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "3201 S Hoover St, Los Angeles, CA 90089",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.2, ease: "easeIn" },
      }}
      className="py-6 pt-12"
    >
      <div className="container mx-auto">
        <div className="max-w-[50%] mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6 xl:mb-8 text-center">
            Contact Me
          </h1>
          <h1 className="text-1xl text-white mb-12 xl:mb-14 text-center">
            Let’s connect! Whether it’s for a collaboration, a question, or
            just to say hi – I’d love to hear from you!
          </h1>
        </div>
        <div className="flex-1 flex flex-wrap justify-center items-stretch gap-6">
          <ul className="flex flex-wrap justify-center items-stretch w-full gap-6">
            {info.map((item, index) => (
              <li
                key={index}
                className="w-full sm:w-[calc(33.33%-1rem)] flex flex-col items-center text-center gap-4 p-4 bg-[#1f1f25] rounded-md"
              >
                {/* icon */}
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                  <div className="text-[28px]">{item.icon}</div>
                </div>

                {/* title */}
                <p className="text-white/60 text-lg font-medium">{item.title}</p>

                {/* desciption */}
                <h3 className="text-xl text-white">{item.description}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
