"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";

const InfiniteCarousel= ({logos}) => {

    const scrollerRef = useRef(null)

    useEffect(() => {
        const scroller = scrollerRef.current;

            function addAnimation() {
                if(!scroller) return;

                const innerScroller = scroller.querySelector('.scroll_inner')

                if(!innerScroller) return;
                
                if(innerScroller.getAttribute("data-cloned") === "true") return;

                const innerScrollerChildren = Array.from(innerScroller.children);

             innerScrollerChildren.forEach(item => {
                const extendedLogos = item.cloneNode(true)

                innerScroller.appendChild(extendedLogos);
             });

             innerScroller.setAttribute("data-cloned", "true")

            }

            addAnimation();
    }, [])
    return(
        <div ref={scrollerRef} className="scroller w-full overflow-hidden">
            <div className="scroll_inner flex flex-wrap gap-2 bg-white py-1 animate-infinite_scroll whitespace-nowrap">
             {logos.map((logo, index) => {
                return(
                    <span key={index}>
                    <Image src={logo.src}  alt={`logo ${index +1}`} height={50}/></span>
                )
             })}   
            </div>
        </div>
    )
}
export default InfiniteCarousel