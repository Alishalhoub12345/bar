import React, { useState } from 'react';
import { Link } from "react-router-dom";
import HoverDiv from "../components/HoverDiv.js";
import prodim from "../images/supreme-educational-hq.jpg";
import mirror from "../images/barrilux-mirror.jpg";
import { Samples }from "./Samples.js";


const ProductsContent = () => {
    return (
        <div className="w-80/100 mx-auto font-titillium pt-10 " >
            {/* Products Header */}
            <div className=" mx-auto xl:px-30">
                <div className="flex flex-col">
                    <h1 id="h1" className="my-2 font-thin text-left">A COMPLETE SYSTEM</h1>
                    <p id="p" className="text-justify font-thin">
                        BARRILUX is a complete ceiling system. Soft PVC membranes are stretched and hooked under tension into custom aluminum rail profiles. A full range of accessories is avialble for spotlights, HVAC vents, spirnklers, and access panels. Installations are quick, dry and clean- no painting required- and can be easily dismantled and re-installed for maintenance.
                    </p>
                    <p id="p" className="text-justify font-thin mt-2">
                        Our materials are 100% recyclable and low-maintenance, helping reduce waste and downtime for commercial, hospitality, healthcare, and residential environments.
                    </p>
                </div>
                <div className="py-5">
                    <h3 id="h3" className="my-2 font-bold text-left">COLORS, TEXTURES & SHAPES</h3>
                    <p id="p" className="text-justify font-thin">
                        BARRILUX materials are very flexible: Inclined, Curved, Vaulted, Suspended, Wave-like, Diamond-like, 3D shapes… All other shapes are easily achieved.                    </p>
                    <p id="p" className="text-justify font-thin mt-2">
                        A complete range of colors and textures is available. The most currently used textures are Plain, Embossed, Brushed, Perforated and Mirror-like. More than 200 colors are available in Matt, Satin, Glossy, Metallic, Clear glass, Frosted glass and Translucent versions.
                    </p>
                    <p id="p" className="text-justify font-thin mt-2">
                        BARRILUX films are excellent media for digital printing and UV printing that is commonly used. Our translucent film range is backlit and offers variable light intensity and light color.
                    </p>
                </div>
                <div>
                    <Samples/>
                </div>
            </div>
        </div>
    );
}

export default ProductsContent;


