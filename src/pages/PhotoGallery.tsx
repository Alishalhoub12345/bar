import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import GalleryContent  from "../components/GalleryContent.js";
import StickyHeader from "../components/Sticky-Header.js";

export default function PhotoGallery() {

  return (
    <div className="w-full">

      {/* Sticky Top Header */}
      <StickyHeader/>

      {/* Navbar */}
      <div className="relative">
        <Navbar />

      </div>

      <div className="py-5 md:py-15">
        <GalleryContent/>
      </div>
      <Footer/>
    </div>
  )
}
