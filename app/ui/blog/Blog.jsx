
 import React from 'react';
 import blogData from '../data/blogData';

 const Blog = () => {
   return (
     <section className='bg-[#0F0F11] py-20'>
       <div className="container mx-auto p-8 max-w-7xl">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
           {blogData.map((article, index) => (
             <div key={index} className={`bg-[#18181B] h-[300px] rounded-lg border-t-4 ${article.colorCategory} shadow-md overflow-hidden`}>
               <div className="p-4 h-[280px]">
                 <span className="text-sm text-gray-200 ">{article.category}</span>
                 <h2 className="text-2xl font-bold my-2 text-white  h-[150px]">{article.title}</h2>
                 <p className="text-sm text-gray-200 mb-4 ">{article.readingTime} de lectura</p>
                 <div className='flex justify-end items-end'>
                   <span className='w-8 h-8 rounded-full hover:bg-[#433E3E] flex items-center justify-center bg-[#18181B] border'>
                   <a href={`/blog/${article.title.toLowerCase().split(' ').join('-')}`}>
                       <svg xmlns="http:www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 text-white -rotate-90" aria-hidden="true">
                         <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                       </svg>
                     </a>
                   </span>
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };

 export default Blog;

