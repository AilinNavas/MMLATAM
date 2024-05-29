import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShadowImage from "./ShadowImage";



const InfoPersonal = ({ title, description, values, imageUrl, altText, color, specificStyles , techIcons  }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const getBorderColor = (index) => {
        const colors = ["border-lime-500", "border-[#2B0CEA]", "border-[#C30BB1]"];
        return colors[index % colors.length];
    };

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className={`pb-20 px-4 max-w-7xl mx-auto flex flex-col justify-center space-y-6 items-center lg:flex-row  ${specificStyles?.flexDirection || ''}`} >
            <div className={`py-4 flex items-center   ${specificStyles?.justify || 'lg:justify-center'} `}>
                <ShadowImage urlImage={imageUrl} altText={altText} initialColor={color} animateColor={color} />
            </div>

            <div className={`mx-auto space-y-6 flex flex-col justify-center  lg:pl-10 ${specificStyles?.margin || ''}`}>
                <h4 className='text-white font-semibold text-2xl text-left ml-2'>{title}</h4>
                {description.map((para, index) => (
                    <p key={index} className={`text-gray-200 px-2 ${specificStyles?.textAlign || ''}`}>{para}</p>
                ))}
                <div className='flex flex-col space-y-14 md:flex-row justify-start md:space-y-0 md:space-x-10'>
                    {values.map((value, index) => {
                        const isExpanded = expandedIndex === index || hoveredIndex === index;
                        return (
                            <motion.div
                                key={index}
                                className={`relative bg-gray-700 text-white flex justify-center items-center  px-2 py-1 rounded border ${getBorderColor(index)} cursor-pointer`}
                                onClick={() => toggleExpand(index)}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {value.title}
                                <motion.svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className={`h-5 w-5 ml-1 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                                    aria-hidden="true"
                                >
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </motion.svg>
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            className="absolute left-0 top-full mt-2 p-2 bg-gray-800 text-white rounded shadow-lg text-xs  w-full md:w-60  z-10"
                                            initial={{ opacity: 0, x: -50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -50 }}
                                        >
                                            {value.detail}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

        </div>
    );
};

export default InfoPersonal;
