import SearchBar from "./SearchBar.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import { categories } from "../assets/Gallery/Category Images/data_category.js";
interface Photo {
    id: number;
    name: string;
    imageSrc: string;
};

const photos: Photo[] = categories as Photo[];

const GalleryContent = () => {
    return (
        <div className="w-80/100 font-titillium xl:px-30 mx-auto">
            <div className="md:flex pb-5 md:pb-10">
                <div className="text-left">
                    <h1 id="h1" className="font-thin pb-2.5 md:pb-0">PHOTO GALLERY</h1>
                    <h3 id="small" className="font-extralight text-gray-600">Browse our categories.</h3>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mx-auto">
                {photos.map((photos) => (
                    <div key={photos.id} className="bg-white border-gray-200 w-full border mt-auto pb-5 text-left">
                        <Link to="/category" state={{category: photos.name}}>
                            <img src={photos.imageSrc} alt={photos.name} className="aspect-square object-cover object-center w-full" loading="lazy" />
                            <h3 className=" pt-4 ml-5 text-[10px] md:text-[11px] lg:text-[14px] xl:text-[10px] 2xl:text-[14px] uppercase">{photos.name}</h3>
                        </Link>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default GalleryContent;