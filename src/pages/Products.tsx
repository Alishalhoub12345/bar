import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Slider from "../components/Slider.js";
import ProductsContent from "../components/ProductsContent.js";
import StickyHeader from "../components/Sticky-Header.js";

export default function Products() {

  return (
    <div className="w-full">

      {/* Sticky Top Header */}
      <StickyHeader />

      {/* Navbar */}
      <div className="relative">
        <Navbar />

      </div>

      {/* Slider Image*/}
      <Slider isHome={false}></Slider>

      <ProductsContent/>
      
      <Footer />
    </div>
  )
}
