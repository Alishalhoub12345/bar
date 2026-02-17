import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import { Link, NavLink } from "react-router-dom";
import logo from "../images/barrilux-logo-white.png";
import logoMobile from "../images/barrilux-logo-white-mobile-modified.png";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const isLargeScreen = useMediaQuery({ minWidth: 1024 }); // lg

    let imgSrc = logo;

    if (isLargeScreen) {
        imgSrc = logo;
    } else {
        imgSrc = logoMobile;
    }

    useEffect(() => {
        document.documentElement.classList.add("scroll-smooth");
    }, []);

    const navLinks = [
        { label: "PRODUCTS", href: "/products", internal: true },
        { label: "BARRILUX MIRROR", href: "https://barriluxmirror.com/", external: true },
        { label: "SPECIAL PROJECTS", href: "/projects", internal: true },
        { label: "PHOTO GALLERY", href: "/gallery", internal: true },
        { label: "TECHNICAL SPECS", href: "/#tech", anchor: true },
        { label: "CONTACT US", href: "/#contact", anchor: true }
    ];

    const getNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
        `text-end transition-colors ${isActive
            ? 'text-black'
            : 'text-gray-400 hover:text-black'
        }`;

    const mirror = "BARRILUX MIRROR";
    return (
        <div className="w-80/100 py-3 mx-auto">
            {/* Main navbar */}
            <div className="bg-gray-50 font-titillium flex flex-row items-center justify-between xl:px-30">

                {/* Logo / Brand */}
                <div className="items-center ">
                    <Link to="/">
                        <img className="h-auto w-80/100 md:w-80/100  lg:w-50/100 lg:h-50/100 xl:w-60/100 2xl:w-70/100 aspect-auto" src={imgSrc} alt="nav-logo" loading="lazy" />
                    </Link>
                </div>

                {/* Desktop links */}
                <div className="hidden lg:flex items-center justify-right">
                    <ul className="hidden lg:flex lg:flex-row lg:gap-3 xl:gap-5 2xl:gap-10 font-titillium text-[10px] xl:text-[12px] 2xl:text-[14px]">
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                {item.internal ? (
                                    <NavLink
                                        to={item.href}
                                        className={getNavLinkClasses}
                                    >
                                        {item.label}
                                    </NavLink>
                                ) : item.external ? (
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 text-end hover:text-black"
                                    >
                                        {item.label}
                                    </a>
                                ) : (
                                    <Link
                                        to={item.href}
                                        className="text-gray-400 text-end hover:text-black"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="lg:hidden">
                    {/* Mobile menu button */}
                    <div className="items-baseline">
                        <button className="flex flex-col gap-1 p-2" onClick={() => setIsOpen(!isOpen)}>
                            <span className="block w-5 h-0.5 bg-[#000000]"></span>
                            <span className="block w-4 h-0.5 bg-[#000000] mx-auto"></span>
                            <span className="block w-5 h-0.5 bg-[#000000]"></span>
                        </button>
                    </div>
                    {/* Mobile dropdown */}
                    {isOpen && (
                        <div id="h2" className=" flex lg:hidden left-0 top-full absolute bg-white shadow h-60 items-center w-full justify-center z-2000">
                            <ul className="flex flex-col gap-2 px-4">
                                {navLinks.map((item) => (
                                    <li key={item.label + "-mobile"}>
                                        <Link
                                            to={item.href}
                                            className="block transition-colors duration-200 hover:bg-[#0B3A4F] hover:text-white"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
