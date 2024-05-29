"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";



const ShadowImage = ({urlImage, altText ,initialColor, animateColor}) => {
    return (
        <motion.div
        style={{
            width: 350,
            height: 350,
            borderRadius: 1000,
            overflow: "hidden",
            position: "relative",
            boxShadow: `0px -3px 50px 3px ${initialColor}20`
        }}
        initial={{ backgroundColor: "#000000" }}
        animate={{
            backgroundColor: "#08f",
            boxShadow: `0px 0px 50px 3px ${animateColor}`
        }}
        transition={{ duration: 2 }}
    >
        <Image 
            src={urlImage}
            alt={altText}
            quality={80}
          
        />
    </motion.div>
    );
}

export default ShadowImage;

