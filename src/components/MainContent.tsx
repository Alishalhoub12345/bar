import React, { useState } from 'react';
import { Link } from "react-router-dom";
import HoverDiv from "../components/HoverDiv.js";
import prodim from "../images/supreme-educational-hq.jpg";
import mirror from "../images/barrilux-mirror.jpg";

const ArrowIcon = () => (
  <svg
    className="
      mt-0.5 ml-2 w-4 h-4 fill-black transition-colors
      [@media(hover:hover)_and_(pointer:fine)]:group-hover:fill-white
    "
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const MainContent = () => {
    return (
        <div className="w-80/100 mx-auto font-titillium md:pt-10" >
            {/*About Us*/}
            <HoverDiv />

            {/*Products Overview*/}
            <div className="lg:flex flex-col lg:flex-row mx-auto xl:px-30 pb-10 ">
                <div className="lg:hidden sm:w-full">
                    <img className="h-full w-full" src={prodim} alt="products-overview" loading="lazy"/>
                </div>
                <div className="lg:w-1/2 text-left   lg:mr-20 xl:mr-25 2xl:mr-25">
                    <h1 id="h1" className="my-2 font-thin">PRODUCT OVERVIEW</h1>
                    <h3 id="h3" className="my-2 font-semibold">BARRILUX Ceilings: Precision Meets Pure Design</h3>
                    <p id="p" className="text-justify font-thin">
                        Elevate every room with ceilings custom-crafted to your exact space. Our complete collection of sleek railings and tailored accessories brings any design concept to life. Powered by continuous innovation and trusted partnerships, BARRILUX delivers enduring beauty and unmatched quality you can see and feel.
                        Backed with fire certifications and international test reports covering quality, durability, health, environment and acoustic requirements, BARRILUX ceilings have earned a worldwide reputation of excellence.
                    </p>
                    <br />
                    <button id="p" className="bg-transparent border border-black group text-black flex ml-auto items-center transition [@media(hover:hover)_and_(pointer:fine)]:hover:bg-black [@media(hover:hover)_and_(pointer:fine)]:hover:text-white"> 
                        <span>
                            <Link className="flex align-text-bottom items-center font-thin group-hover:font-light" to="/products">Show More
                                <ArrowIcon/>
                            </Link>
                        </span>
                    </button>
                </div>
                {/*Insert Image Here when available*/}
                <div className="hidden lg:block lg:w-1/2 py-5 ">
                    <img className="h-full w-full" src={prodim} alt="products-overview" loading="lazy"/>
                </div>
            </div>
            {/*Barrilux Mirror*/}
            <div className="lg:flex flex-col lg:flex-row mx-auto xl:px-30">
                {/*Insert Image Here when available*/}
                <div className="md:w-full lg:w-1/2 md:py-5 lg:mr-20 xl:mr-25 2xl:mr-25">
                    <img className="h-full w-full" src={mirror} alt="products-overview" loading="lazy"/>
                </div>
                <div className="lg:w-1/2 text-left py-5">
                    <h1 id="h1" className="md:my-2 font-thin">BARRILUX MIRROR</h1>

                    <p id="p" className="text-justify my-2">
                        Introducing the all new BARRILUX MIRROR product.
                    </p>
                    <p id="p" className="text-justify font-thin mt-2">
                        BARRILUX has been bringing passion and pioneering solutions to the stretch ceiling sector for 33 years. From design to manufacturing to installation and maintenance, we offer a complete suite of services to our clients. Today BARRILUX is a leading firm in the field and is proud of the thousands of projects executed all over the world. Handling complex and big projects that require expertise and solid organization is at the core of our reputation. Our commitment to quality extends from our partnerships with the most reliable raw material producers to the work we complete for our esteemed clients.
                    </p>
                    <br/>
                    <p id="p" className="text-justify">
                        We bring inspiration and innovation to every project we undertake. Dedication, respect and transparency are at the heart of our values.
                    </p>
                    <br />
                    <button id="p" className="bg-transparent border border-black text-black flex ml-auto items-center group transition [@media(hover:hover)_and_(pointer:fine)]:hover:bg-black [@media(hover:hover)_and_(pointer:fine)]:hover:text-white">
                        <span>
                            <Link className="flex align-text-bottom items-center font-thin group-hover:font-light" to="https://barriluxmirror.com/" target="_blank" rel="noopener noreferrer">Visit BARRILUX MIRROR Site
                                <ArrowIcon/>
                            </Link>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MainContent;


