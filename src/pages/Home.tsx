import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Slider from "../components/Slider.js";
import TechnicalSection from "../components/TechnicalSection.js";
import GetInTouch from "../components/GetInTouch.js";
import StickyHeader from "../components/Sticky-Header.js";
import { AboutSection } from "../components/AboutSection.js";

export default function Home() {
  const ios =/iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  return (
    <div className="w-full">

      {/* Sticky Top Header */}
      <StickyHeader />

      {/* Navbar */}
      <div className="relative">
        <Navbar />
      </div>

      {/* Slider Image */}
      <Slider isHome={true} />

      {/* About Us Section */}
      <AboutSection/>

      {/* Technical Specs and Performance */}
      <div
        id="tech"
        className="place-items-center mx-auto font-titillium py-20 px-5 w-80/100"
      >
        <h1 id="h1" className="sm:text-3xl font-bold">
          TECHNICAL SPECIFICATIONS & PERFORMANCE
        </h1>
        <br />
        <h2 id="h2">
          Detailed product specifications and proven performance of BARRILUX stretch ceilings-
          <br />
          covering installation, durability, acoustics, safety, hygiene, and sustainability.
        </h2>
        <TechnicalSection />
      </div>

      {/* Get In Touch */}
      <div id="contact" className={`flex items-center bg-[url('/src/images/get-in-touch-cropped.png')] bg-cover bg-center h-140 md:h-120 relative pt-10 ${ios ? "bg-scroll" : "bg-fixed"}`}>
        <div className="absolute inset-0 bg-black opacity-25"></div>
        <GetInTouch />
      </div>

      <Footer />
    </div>
  );
}