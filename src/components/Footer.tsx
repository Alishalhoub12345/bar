import logo from "../images/barrilux-logo-full-white.png";
import mobile from "../images/barrilux-logo-full-white-mobile.png";
import in2info from "../images/download.png";
import whatsapp from "../images/icons/whatsapp.png";
import facebook from "../images/icons/facebook.png";
import instagram from "../images/icons/instagram.png";
import { Link, NavLink } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="bg-[#000000] text-white font-titillium w-screen pt-10 pb-10" >
      <div className="container mx-auto justify-left w-80/100 ">
        <div className="flex flex-col mb-4 md:mb-0 text-left">
          {/* Logo */}
          <div>
            <img src={mobile} className="lg:hidden w-50/100 md:w-25/100" alt="mobile-logo" loading="lazy"/>
            <img src={logo} className="hidden lg:block lg:w-10/100 lg:aspect-auto" alt="logo-footer" loading="lazy"/>
          </div>
          {/*Columns*/}
          <div className="md:flex md:flex-row pt-5 gap-12">
            {/* Address and Company Info */}
            <div className="mb-4 md:mb-0 text-left md:w-1/3">
              <h1 className=" text-white text-[12px] md:text-[16px] lg:text-[18px]">
                <a href="#main" className="hover:text-blue-300">BARRILUX - LEBANON</a>
                <span className="text-[10px] ml-1 align-super">TM</span>
              </h1>
              <div id="p" className="mt-2 md:gap-6 sm:text-[13px] text-left">
                <p>
                  Fanar, Beirut, Lebanon<br />
                  <a className="hover:text-blue-300" href="tel:+961-1-872-423">+961 1 872 423</a><br />
                  <a className="hover:text-blue-300" href="mailto:sales@barrilux.com">sales@barrilux.com</a>
                </p>
              </div>
              <div id="x-small" className="mt-2 md:gap-6  text-left text-gray-400">
                <p>
                  Bahrain - Egypt - India - Iraq - Jordan - KSA - Kuwait - Lebanon - Nigeria - Qatar - UAE
                </p>
              </div>
            </div>
            {/* Links */}
            <div className="mb-4 md:mb-0 text-left md:w-1/3">
              <h1 className="text-white  text-[12px] md:text-[16px] lg:text-[18px]" >LINKS</h1>
              <div id="small" className="mt-2 flex flex-col md:flex-row  md:gap-6 text-left">
                <p>
                  <NavLink className="hover:text-blue-300" to="/"> Main </NavLink><br />
                  <NavLink className="hover:text-blue-300" to="/products">Products</NavLink><br />
                  <a className="hover:text-blue-300" href="https://barriluxmirror.com/" target="_blank" rel="noopener noreferrer">BARRILUX MIRROR</a><br />
                  <NavLink className="hover:text-blue-300" to="/projects">Special Projects</NavLink><br />
                  <NavLink className="hover:text-blue-300" to="/gallery">Photo Gallery</NavLink>
                </p>
              </div>
            </div>
            {/* Connect With Us */}
            <div className="mb-4 md:mb-0 text-left md:w-1/3">
              <h1 className="text-white  text-[12px]  md:text-[16px] lg:text-[18px]" >CONNECT WITH US</h1>
              <div id="small" className="mt-2 sm:flex sm:flex-col text-left gap-1">
                <a className="hover:text-blue-300 flex flex-row items-center"><img className="w-5 mr-3.5" src={facebook} alt="facebook logo" /> Facebook</a>
                <a className="hover:text-blue-300 flex flex-row items-center"><img className="w-5 mr-3.5" src={instagram} alt="instagram logo" /> Instagram</a>
                <a className="hover:text-blue-300 flex flex-row items-center"><img className="w-5 mr-3.5" src={whatsapp} alt="whatsapp logo" /> Whatsapp</a>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center sm:gap-6 gap-0 justify-between pt-3 mt-6">
          <p id="small" className="text-center opacity-80">
            © {new Date().getFullYear()} Barrilux
            <span className="align-super text-[6px]">TM</span> All rights reserved.
          </p>

          <div className="flex items-center pt-2 xl:pt-0 gap-2">
            <p id="small" className="opacity-80">SITE <span className="font-semibold">MANAGER</span> V4.0</p>
            <a
              href="http://www.in2info.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={in2info} alt="In2info Logo" className="w-14.5 sm:w-17" loading="lazy" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
