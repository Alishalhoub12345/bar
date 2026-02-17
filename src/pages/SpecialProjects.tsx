import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import StickyHeader from "../components/Sticky-Header.js";
import ProjectsContent from "../components/ProjectsContent.js";

export default function SpecialProjects() {

  return (
    <div className="w-full">

      {/* Sticky Top Header */}
      <StickyHeader/>

      {/* Navbar */}
      <div className="relative">
        <Navbar />
      </div>

      <div className=" py-5 md:py-15">
        <ProjectsContent/>
      </div>
      <Footer />
    </div>
  )
}
