import React from "react";
import Link from "next/link";
import Button from "../general/Button";

const Footer = () => {
  return (
    <footer className="bg-[#060606] lg:pb-14" aria-labelledby="footer-heading">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase inline-block">
              Usefull Links
            </h3>
            <ul className="mt-4 space-y-4 ">
              <li className="text-base text-gray-300 hover:text-white">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="text-base text-gray-300 hover:text-white">
                <Link href="/aboutUs">About Us</Link>
              </li>
              <li className="text-base text-gray-300 hover:text-white">
                <Link href="/case-study">Case Study</Link>
              </li>
            </ul>

          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                RECEIVE MORE INFORMATION
              </h3>
              <p className="mt-4 text-sm text-gray-300">
              We would love to contact you.
              </p>
              <form className="mt-4 sm:max-w-md" noValidate="">
                <div className="flex flex-col w-full md:flex-row md:h-full lg:items-center md:space-x-2">
               
             
                    <div className="relative w-full">
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your e-mail"
                        name="email"
                        className="border-white rounded-md h-[3rem] block w-full shadow-sm p-3 border bg-white-2 text-p3 text-gray-1 placeholder-gray-7 focus:ring-gray-800 focus:border-gray-500"
                      ></input>
                    </div>
              
                  <div className="mt-3 md:mt-0 h-[3rem] ">
                    <Button
                      bg={"bg-violet-500"}
                      bgHover={"hover:bg-violet-900"}
                      text={"Contact"}
                      textColor={"text-white"}
                      especif={"h-full lg:max-w-36 lg:rounded-md"}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>



        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a
              href="https://www.linkedin.com/school/digitalhouseschool/"
              title="LinkedIn"
              target="_blank"
              className="text-gray-400 hover:text-gray-300"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-8 w-8"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M17.833 2H6.167A4.167 4.167 0 002 6.167v11.666C2 20.134 3.866 22 6.167 22h11.666A4.167 4.167 0 0022 17.833V6.167C22 3.866 20.135 2 17.833 2zM8.667 17.833h-2.5V8.667h2.5v9.166zM7.417 7.61a1.465 1.465 0 01-1.459-1.47c0-.812.654-1.47 1.459-1.47s1.458.658 1.458 1.47c0 .812-.652 1.47-1.458 1.47zm11.25 10.223h-2.5v-4.67c0-2.806-3.334-2.594-3.334 0v4.67h-2.5V8.667h2.5v1.47c1.164-2.155 5.834-2.314 5.834 2.064v5.632z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            © 2024 Mucho Marketing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;