import globe from "../images/icons/globe.png";
import whatsapp from "../images/icons/whatsapp-logo-colored.png";

const StickyHeader = () => {
    return (
        <header className="sticky bg-white top-0 z-1000 py-1.5">
            <div className="w-80/100 mx-auto xl:px-30">
                <div className="text-right ">
                    <span className="flex flex-row items-center justify-end">
                        <a id="small" className="text-gray-400 flex flex-row items-center">Barrilux Catalogue 2026 <img src={globe} className="w-4.5 h-4.5 ml-1" /></a>
                        <a href="https://api.whatsapp.com/send?phone=96170447717" id="small" className="items-center text-gray-400 flex flex-row ml-6">+961 70447717<img src={whatsapp} className="w-6 h-6" /></a>
                    </span>
                </div>
            </div>
        </header>
    );
};

export default StickyHeader;