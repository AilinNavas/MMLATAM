"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 border-t-2 rounded-md border-violet-500 shadow-md focus:outline-none hover:text-violet-500"
      >
        <h3 className="text-lg font-semibold flex justify-between ">{title}
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5 ml-1"
            aria-hidden="true"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </motion.svg>
            </h3>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="overflow-hidden"
      >
        <div className="p-4 text-base leading-6">
          <p>{content}</p>
        </div>
      </motion.div>
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-2 my-10">
      {items.map((item, index) => (
        <AccordionItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Accordion;
