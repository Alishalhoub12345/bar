import React, { useState } from 'react';
import Accordion from "./Accordion.js";
import type { AccordionItemData } from "../types.ts";

import Tooltip from './Tooltip.js';
import SpecsGrid from './SpecsGrid.js';

const TechnicalSection = () => {
    const [status, setStatus] = useState(true);

    const handleTechToggle = () => {
        setStatus(true);
    };
    const handleCharacteristicsToggle = () => {
        setStatus(false);
    };

    const buttonTrue = "text-white bg-black rounded-none";
    const buttonFalse = "text-black bg-gray-100 rounded-none";

    const items: AccordionItemData[] = [
        {
            title: "Big Stretches",
            content:
                "BARRILUX® ceilings were originally designed for very large areas. Due to its light weight and easy dismantling features, you can achieve very big spans of flat and homogenous look without any joints."
        },
        {
            title: "Decorative joints",
            content:
                "BARRILUX® ceilings can also be installed in stripes. You can choose the width and length of the individual stripes. The stripes are held together by decorative joints (groove) ensuring a perfect neat finish."
        },
        {
            title: "Reduced obstruction",
            content:
                "We set the levels, fix our peripheral frames &amp; leave the whole ceiling area free for other works. The final ceiling installation is a matter of hours."
        },
        {
            title: "Indirect lighting",
            content:
                "BARRILUX® ceilings will give you the light reflections you need."
        },
        {
            title: "Suspended ceiling",
            content:
                "BARRILUX® can be fixed on a multitude of suspended sub-structures."
        },
        {
            title: "Quick Installation & Dismantling",
            content:
                "The installation of a BARRILUX® flat ceiling (e.g.: 50 m2) would normally take less than three hours. The dismantling of the same would require less than 15 minutes. You can dismantle and re-install your ceiling as many times as you want without affecting its finish."
        },
        {
            title: "Clean Installation",
            content:
                "The installation is clean and dry; no painting is required."
        },
        {
            title: "Maintenance",
            content:
                "BARRILUX® does not require any maintenance.\nEasy dismantling when needed.\nRepeated dismantling will not affect the properties of BARRILUX®.\nAny size access panels are possible."
        },
        {
            title: "Cleaning",
            content:
                "BARRILUX® is anti-static; does not attract dirt.\nIt can be cleaned with water or aseptic solutions, water-jet can be used where appropriate."
        },
        {
            title: "Hygienic",
            content:
                "BARRILUX® surface is smooth & non-porous in nature.\nBARRILUX® is Anti-Bacteria & Anti-Fungus.\nThe material is non-toxic and fiber free (in conformity with international standards).\nThe stretch false ceiling is ideal in hospitals and operation rooms."
        },
        {
            title: "Inert",
            content:
                "BARRILUX® does not react with chemicals: Chlore, formol, ether, trichlore, etc..."
        },
        {
            title: "Moisture proof",
            content:
                "BARRILUX® is not affected by moisture; small water leakages will evaporate without being noticed."
        },
        {
            title: "Water proof",
            content:
                "BARRILUX® ceilings are impermeable to water.\nIn case of large water leakages, BARRILUX® can hold back incredible quantities of water by forming a pocket.\nThe water can be easily evacuated and the ceiling will automatically go back to its original shape."
        },
        {
            title: "Ecological",
            content:
                "BARRILUX® material is 100% recyclable and re-used to produce other product which reduces the amount incinerated waste and burned trash."
        },
        {
            title: "Dust proof",
            content:
                "BARRILUX® will retain the dust coming from the plenum & will not allow any dust to go to the plenum."
        },
        {
            title: "Durability",
            content:
                "PVC Stretch Ceilings have proved to be very long lasting (over 25 years background).\nOther ceilings can be durable, but very few will keep their fresh original look."
        },
        {
            title: "Ageing",
            content:
                "BARRILUX® will maintain all its properties over the years."
        },
        {
            title: "Stable",
            content:
                "No visible deformation with temperature variation from -5° C to + 90° C."
        },
        {
            title: "Para seismic",
            content:
                "BARRILUX® elastic properties make it a perfect solution for high-risk seismic areas. This light weight ceiling brings an additional safety in case of collapse."
        },
        {
            title: "Thermal shield",
            content:
                "It saves energy by lowering the ceiling and by decreasing the waste of heat.\nBARRILUX® can be installed in combination with all types of insulation material."
        }
    ];


    const accordionGrid = (
        <div className="mx-auto pt-10">
            <Accordion items={items} />
        </div>
    );

    return (
        <div>
            <div className="pt-10 mx-auto">
                <button id="h3" className={status ? buttonTrue : buttonFalse} onClick={handleTechToggle}>Technical Specifications</button>
                <button id="h3" className={status ? buttonFalse : buttonTrue} onClick={handleCharacteristicsToggle}>General Characteristics</button>
            </div>
            {status ? <SpecsGrid /> : accordionGrid}
        </div>

    )
}

export default TechnicalSection;