import SearchBar from "./SearchBar.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Photo {
    id: number;
    name: string;
    location: string;
    imageSrc: string;
};

interface CategoryContentProps {
    category: string;
};

const CategoryContent = ({ category }: CategoryContentProps) => {
    const [search, setSearch] = useState("");
    const [photos, setPhotos] = useState<Photo[]>([]);

    useEffect(() => {
        const loadPhotos = async () => {
            const importer = categoryImportMap[category];
            if (!importer) {
                setPhotos([]);
                return;
            }
            const module = await importer();
            setPhotos(module.default);
        };

        loadPhotos();
    }, [category]);


    const categoryImportMap: Record<string, () => Promise<{ default: Photo[] }>> = {
        "Banks & Offices": () => import("../assets/Gallery/data_banks"),
        "Buildings & Apartments": () => import("../assets/Gallery/data_buildings"),
        "Design & Printed Elements": () => import("../assets/Gallery/data_design"),
        "Health Clubs": () => import("../assets/Gallery/data_health"),
        "Hospitals": () => import("../assets/Gallery/data_hospitals"),
        "Hotels": () => import("../assets/Gallery/data_hotels"),
        "Malls & Shops": () => import("../assets/Gallery/data_malls"),
        "Showrooms": () => import("../assets/Gallery/data_showrooms"),
        "Sports Hall": () => import("../assets/Gallery/data_sports"),
        "Religious": () => import("../assets/Gallery/data_religious"),
        "Restaurants": () => import("../assets/Gallery/data_restaurants"),
        "RGB": () => import("../assets/Gallery/data_rgb"),
        "Theaters": () => import("../assets/Gallery/data_theaters"),
    };


    const filteredPhotos = photos.filter((photo: Photo) =>
        photo.name.toLowerCase().includes(search.toLowerCase()) ||
        photo.location.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="w-80/100 font-titillium xl:px-30 mx-auto">
            <div className="md:flex pb-5 md:pb-10">
                <div className="text-left mt-top">
                    <h1 id="h1" className="font-thin pb-2.5 md:pb-0 uppercase">{category}</h1>
                    <h3 id="small" className="font-extralight text-gray-600 pb-2.5 md:pb-0">Browse our photos. Use the search to filter by photos title or location.</h3>
                    <Link to="/gallery"><h3 id="small" className="font-semibold">Back to category list</h3></Link>
                </div>
                <div className="ml-auto w-full md:w-1/2 mt-auto pt-5 md:pt-0">
                    <SearchBar value={search} onChange={setSearch} />
                    <h3 id="x-small" className="font-extralight text-gray-600 text-left">Showing <span className="font-bold">{filteredPhotos.length}</span> photos</h3>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mx-auto">
                {filteredPhotos.map((photos) => (
                    <div key={photos.id} className="relative group overflow-hidden">
                        {/* Image */}
                        <img src={photos.imageSrc} alt={photos.name} className="aspect-square w-full object-cover" loading="lazy" />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        {/* Text */}
                        <div className=" absolute bottom-10 left-0 right-0 z-10 p-4 transform translate-y-2 opacity-0transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            <h3 className="text-white font-semibold text-sm md:text-base">
                                {photos.name} - {photos.location}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoryContent;