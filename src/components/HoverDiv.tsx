import React, { useState } from 'react';
import inf from "../images/infinity-tablet-black-white.png";
import hov from "../images/infinity-tablet.png";
import ul from "../images/infinity-upperleft.png";
import ur from "../images/infinity-upperright.png";
import ll from "../images/infinity-lowerleft.png";
import lr from "../images/infinity-lowerright.png";
import ulbw from "../images/infinity-upperleft-bw.png";
import urbw from "../images/infinity-upperright-bw.png";
import llbw from "../images/infinity-lowerleft-bw.png";
import lrbw from "../images/infinity-lowerright-bw.png";
const HoverDiv = () => {
    const upperl = ul;
    const upperr = ur;
    const lowerl = ll;
    const lowerr = lr;
    const upperlb = ulbw;
    const upperrb = urbw;
    const lowerlb = llbw;
    const lowerrb = lrbw;
    const [imageSrc1, setImageSrc1] = useState(upperlb);
    const [imageSrc2, setImageSrc2] = useState(upperrb);
    const [imageSrc3, setImageSrc3] = useState(lowerlb);
    const [imageSrc4, setImageSrc4] = useState(lowerrb);


    const handleMouseEnter1 = () => {
        setImageSrc1(upperl);
    };

    const handleMouseLeave1 = () => {
        setImageSrc1(upperlb);
    };

    const handleMouseEnter2 = () => {
        setImageSrc2(upperr);
    };

    const handleMouseLeave2 = () => {
        setImageSrc2(upperrb);
    };

    const handleMouseEnter3 = () => {
        setImageSrc3(lowerl);
    };

    const handleMouseLeave3 = () => {
        setImageSrc3(lowerlb);
    };
    const handleMouseEnter4 = () => {
        setImageSrc4(lowerr);
    };

    const handleMouseLeave4 = () => {
        setImageSrc4(lowerrb);
    };

    return (
        <div className="lg:flex flex-col lg:flex-row mx-auto xl:px-30 py-10">
            {/*Insert Image Here when available*/}
            <div className="md:w-full lg:w-1/2 lg:mr-20 xl:mr-25 2xl:mr-25 grid grid-rows-2 h-full">
                <div className="grid grid-cols-2 h-full">
                    <img className="w-full" src={imageSrc1} alt="Hover Effect1" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1} loading="lazy"></img>
                    <img className="w-full" src={imageSrc2} alt="Hover Effect2" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2} loading="lazy"></img>
                </div>
                <div className="grid grid-cols-2 h-full">
                    <img className="w-full" src={imageSrc3} alt="Hover Effect3" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3} loading="lazy"></img>
                    <img className="w-full" src={imageSrc4} alt="Hover Effect4" onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4} loading="lazy"></img>
                </div>
            </div>
            <div className="md-full lg:w-1/2 text-left py-2 md:py-5 ">
                <h1 id="h1" className="my-2 font-thin">ABOUT US</h1>
                <h3 id="h3" className="my-2 font-semibold">More than 33 Years of Satisfied Clients</h3>
                <p id="p" className="font-thin text-justify">
                    For the past 33 years, we developed unique manufacturing techniques to adapt our Stretch Ceiling production to Architects’ requirements. The best results were achieved through close coordination between BARRILUX manufacturing facilities and its installation teams on site. The strong alliance that we built with our film suppliers is behind the sustainable quality that we guarantee. With thousands of executed projects, BARRILUX now has the biggest in-house team of qualified technicians and ceiling designers. Integrating high quality films and combining both the manufacturing and the installation aspects, BARRILUX is in an exclusive to deliver a single source warranty. BARRILUX’s lasting partnerships with leading film suppliers form the foundation of the exceptional, sustainable quality we promise. By combining premium-grade films with our expertise in both manufacturing and installation, BARRILUX offers a seamless, single-source warranty that few can match.
                </p>
            </div>
        </div>
    );
};

export default HoverDiv;