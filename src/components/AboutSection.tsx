import React, { useState, useEffect, useRef } from 'react';
import img1 from "../assets/Gallery/Photos/1671467291.jpg";
import img2 from "../images/supreme-educational-hq.jpg";
import img3 from "../images/barrilux-mirror.jpg";
import { AboutItem } from "../types";
import { Link } from "react-router-dom";

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

const aboutItems: AboutItem[] = [
    {
        id: 1,
        title: "ABOUT US",
        subtitle: "More than 33 Years of Satisfied Clients",
        description: "For the past 33 years, we developed unique manufacturing techniques to adapt our Stretch Ceiling production to Architects’ requirements. The best results were achieved through close coordination between BARRILUX manufacturing facilities and its installation teams on site. The strong alliance that we built with our film suppliers is behind the sustainable quality that we guarantee. With thousands of executed projects, BARRILUX now has the biggest in-house team of qualified technicians and ceiling designers. Integrating high quality films and combining both the manufacturing and the installation aspects, BARRILUX is in an exclusive to deliver a single source warranty. BARRILUX’s lasting partnerships with leading film suppliers form the foundation of the exceptional, sustainable quality we promise. By combining premium-grade films with our expertise in both manufacturing and installation, BARRILUX offers a seamless, single-source warranty that few can match.",
        hasButton: false,
        button: "",
        buttonLink: "",
        newWindow: false,
        imageUrl: img1
    },
    {
        id: 2,
        title: "PRODUCT OVERVIEW",
        subtitle: "BARRILUX Ceilings: Precision Meets Pure Design",
        description: "Elevate every room with ceilings custom-crafted to your exact space. Our complete collection of sleek railings and tailored accessories brings any design concept to life. Powered by continuous innovation and trusted partnerships, BARRILUX delivers enduring beauty and unmatched quality you can see and feel.\nBacked with fire certifications and international test reports covering quality, durability, health, environment and acoustic requirements, BARRILUX ceilings have earned a worldwide reputation of excellence.",
        hasButton: true,
        button: "Show More",
        buttonLink: "/products",
        newWindow: false,
        imageUrl: img2
    },
    {
        id: 3,
        title: "BARRILUX MIRROR",
        subtitle: "Introducing the all new BARRILUX MIRROR product.",
        description: "BARRILUX has been bringing passion and pioneering solutions to the stretch ceiling sector for 33 years. From design to manufacturing to installation and maintenance, we offer a complete suite of services to our clients. Today BARRILUX is a leading firm in the field and is proud of the thousands of projects executed all over the world. Handling complex and big projects that require expertise and solid organization is at the core of our reputation. Our commitment to quality extends from our partnerships with the most reliable raw material producers to the work we complete for our esteemed clients. \nWe bring inspiration and innovation to every project we undertake. Dedication, respect and transparency are at the heart of our values.",
        hasButton: true,
        button: "Visit BARRILUX MIRROR site",
        buttonLink: "https://barriluxmirror.com/",
        newWindow: true,
        imageUrl: img3
    }
]

export const AboutSection = () => {
    const [current, setCurrent] = useState<AboutItem>(aboutItems[0]!);
    const [scale, setScale] = useState(0.3);

    const intervalRef = useRef<number | null>(null);

    const startInterval = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = window.setInterval(() => {
            setCurrent(prev => {
                const index = aboutItems.findIndex(item => item.id === prev.id);
                const nextIndex = (index + 1) % aboutItems.length;
                return aboutItems[nextIndex]!;
            });
        }, 15000);
    };

    useEffect(() => {
        startInterval();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    const handleSelect = (item: AboutItem) => {
        setScale(0.3);
        startInterval();

        setTimeout(() => {
            setCurrent(item);
            setScale(1);
        }, 50);
    };

    useEffect(() => {
        setScale(0.3);
        const timeout = setTimeout(() => setScale(1), 50);
        return () => clearTimeout(timeout);
    }, [current.id]);

    return (
        <div className="relative h-160 w-[80%] mx-auto font-titillium md:pt-10 text-left">
            <div className="flex h-full">
                {/* Left column */}
                <div className="w-1/2 pl-45 pr-8 flex flex-col justify-between h-full">
                    <div>
                        <h1 id="h1" className="mb-2 font-thin">{current.title}</h1>
                        <h3 id="h3" className="mb-2 font-semibold">{current.subtitle}</h3>
                        <p id="p" className="font-thin text-justify">{current.description}</p>
                        {current.hasButton ?
                            <button id="p" className="bg-transparent border border-black text-black flex mt-10 mr-auto  items-center group transition [@media(hover:hover)_and_(pointer:fine)]:hover:bg-black [@media(hover:hover)_and_(pointer:fine)]:hover:text-white">
                                <span>
                                    {current.buttonLink ?
                                        <Link className="flex align-text-bottom items-center font-thin group-hover:font-light" to="https://barriluxmirror.com/" target="_blank" rel="noopener noreferrer">{current.button}
                                            <ArrowIcon />
                                        </Link>
                                        :
                                        <Link className="flex align-text-bottom items-center font-thin group-hover:font-light" to="/products">{current.button}
                                            <ArrowIcon />
                                        </Link>
                                    }

                                </span>
                            </button>
                            :
                            <div className="hidden"></div>

                        }
                    </div>

                    <div className="flex flex-col gap-2 text-left">
                        {aboutItems.map(item => {
                            const isActive = current.id === item.id;

                            return (
                                <button
                                    id="p"
                                    key={item.id}
                                    onClick={() => handleSelect(item)}
                                    className={`relative flex flex-col items-start pb-4 pt-4 pr-4 !pl-0 text-left overflow-hidden transition-colors duration-300
                                        ${isActive ? 'text-black' : 'text-gray-400'}`}
                                >
                                    <span>{item.title}</span>

                                    {/* Animated bottom border */}
                                    {isActive && (
                                        <span
                                            className="absolute bottom-0 left-0 h-0.5 bg-black"
                                            style={{
                                                width: '0%',
                                                animation: 'loaderAnimation 15s linear forwards',
                                            }}
                                        ></span>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Right column */}
                <div className="w-1/2 relative flex justify-center items-center">
                    <div key={current.id} className="w-full h-full flex items-center">
                        <img
                            src={current.imageUrl}
                            alt={current.title}
                            className="w-3/4 h-full object-cover transition-transform duration-[1000ms] ease-in-out"
                            style={{
                                transform: `scale(${scale})`,
                                transformOrigin: 'center',
                            }}
                            ref={el => {
                                if (el) {
                                    el.style.transform = 'scale(0.3)';
                                    requestAnimationFrame(() => {
                                        el.style.transform = 'scale(1)';
                                    });
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};