import React, { useState } from 'react';
import slide from "../images/LUSAIL-OUTDOOR-cropped.jpg";
import slide2 from "../images/supreme-educational-hq-cropped.jpg";

interface SliderProps {
    isHome: boolean;
}

const Slider = ({
    isHome
}: SliderProps) => {
    const isHomePage: boolean = isHome;

    return (
        <div>
            {isHomePage ?
                <div className="w-screen mx-auto">
                    <img className="w-full object-cover" src={slide} />
                </div>
                :
                <div className="w-80/100 mx-auto xl:px-30">
                    <img className="mx-auto w-full object-contain" src={slide2} />
                </div>
            }

        </div>
    )
};

export default Slider;