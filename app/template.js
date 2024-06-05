export default function Template({ children }) {
    return <div>{children}</div>
  }


// 'use client'

// import { motion } from 'framer-motion'

// export default function Template({ children }) {
//     return (<motion.div
//         initial={{
//             y: -10,

//         }}
//         animate={{ y:0 }}
//         transition={{ ease: 'easeInOut', duration: 0.75 }}
//     >
//         {children}
//     </motion.div>
//     )
// }