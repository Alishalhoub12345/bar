import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import CategoryContent from "../components/CategoryContent.js";
import StickyHeader from "../components/Sticky-Header.js";
import { useLocation } from 'react-router-dom';

export default function Category() {
    const location = useLocation();
    const { category } = location.state || {};
    
    return (
        <div className="w-full">

            {/* Sticky Top Header */}
            <StickyHeader />

            {/* Navbar */}
            <div className="relative">
                <Navbar />

            </div>

            <div className="py-5 md:py-15">
                <CategoryContent category={category} />
            </div>
            <Footer />
        </div>
    )
}



