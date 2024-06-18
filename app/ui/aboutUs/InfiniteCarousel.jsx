"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";

const InfiniteCarousel = ({ logos }) => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;

    function addAnimation() {
      if (!scroller) return;

      const innerScroller = scroller.querySelector('.scroll_inner');
      if (!innerScroller) return;
      
      if (innerScroller.getAttribute("data-cloned") === "true") return;

      const innerScrollerChildren = Array.from(innerScroller.children);

      innerScrollerChildren.forEach(item => {
        const extendedLogos = item.cloneNode(true);
        innerScroller.appendChild(extendedLogos);
      });

      innerScroller.setAttribute("data-cloned", "true");

      const totalWidth = Array.from(innerScroller.children).reduce((acc, child) => acc + child.offsetWidth + 16, 0); // Adjust 16 if gap changes
      innerScroller.style.width = `${totalWidth}px`;
    }

    addAnimation();
  }, []);

  return (
    <div ref={scrollerRef} className="scroller w-full overflow-hidden py-20">
      <div className="scroll_inner flex gap-6 bg-white py-1 animate-infinite_scroll whitespace-nowrap items-center">
        {logos.map((logo, index) => (
          <span key={index}>
            <Image src={logo.src} alt={logo.altTextTech} />
          </span>
        ))}
      </div>
    </div>
  );
}

export default InfiniteCarousel;



































// "use client"
// import Image from "next/image";
// import { useEffect, useRef } from "react";


// const InfiniteCarousel= ({logos}) => {

//     const scrollerRef = useRef(null)

//     useEffect(() => {
//         const scroller = scrollerRef.current;

//             function addAnimation() {
//                 if(!scroller) return;

//                 const innerScroller = scroller.querySelector('.scroll_inner')

//                 if(!innerScroller) return;
                
//                 if(innerScroller.getAttribute("data-cloned") === "true") return;

//                 const innerScrollerChildren = Array.from(innerScroller.children);

//              innerScrollerChildren.forEach(item => {
//                 const extendedLogos = item.cloneNode(true)

//                 innerScroller.appendChild(extendedLogos);
//              });

//              innerScroller.setAttribute("data-cloned", "true")

//             }

//             addAnimation();
//     }, [])
//     return(
//         <div ref={scrollerRef} className="scroller w-full overflow-hidden py-20">
//             <div className="scroll_inner flex flex-wrap gap-4 bg-white py-1 animate-infinite_scroll whitespace-nowrap items-center">
//              {logos.map((logo, index) => {
//                 return(
//                     <span key={index}>
//                     <Image src={logo.src}  alt={logo.altTextTech} height={60}/></span>
//                 )
//              })}   
//             </div>
//         </div>
//     )
// }
// export default InfiniteCarousel