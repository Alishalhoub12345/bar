import { useState } from "react";
import SamplesList  from"./SamplesList.js";

/* All, Matt, Metallic, Glossy/Matt, Translucent, Perforated */

export const Samples = () => {
    const [all, setAll] = useState(true);
    const [matt, setMatt] = useState(false);
    const [metallic, setMetallic] = useState(false);
    const [glossy, setGlossy] = useState(false);
    const [translucent, setTranslucent] = useState(false);
    const [perforated, setPerforated] = useState(false);
    const [current, setCurrent] = useState("All");
    const handleAllToggle = () => {
        if (all === true) {
            return;
        }
        setAll(true);
        setMatt(false);
        setMetallic(false);
        setGlossy(false);
        setTranslucent(false);
        setPerforated(false);
        setCurrent("All");
    };
    const handleMattToggle = () => {
        if (matt === true) {
            return;
        }
        setAll(false);
        setMatt(true);
        setMetallic(false);
        setGlossy(false);
        setTranslucent(false);
        setPerforated(false);
        setCurrent("Matt");
    };
    const handleMetallicToggle = () => {
        if (metallic === true) {
            return;
        }
        setAll(false);
        setMatt(false);
        setMetallic(true);
        setGlossy(false);
        setTranslucent(false);
        setPerforated(false);
        setCurrent("Metallic");
    };
    const handleGlossyToggle = () => {
        if (glossy === true) {
            return;
        }
        setAll(false);
        setMatt(false);
        setMetallic(false);
        setGlossy(true);
        setTranslucent(false);
        setPerforated(false);
        setCurrent("Glossy");
    };
    const handleTranslucentToggle = () => {
        if (translucent === true) {
            return;
        }
        setAll(false);
        setMatt(false);
        setMetallic(false);
        setGlossy(false);
        setTranslucent(true);
        setPerforated(false);
        setCurrent("Translucent");
    };
    const handlePerforatedToggle = () => {
        if (perforated === true) {
            return;
        }
        setAll(false);
        setMatt(false);
        setMetallic(false);
        setGlossy(false);
        setTranslucent(false);
        setPerforated(true);
        setCurrent("Perforated");
    };

    const buttonTrue = "text-white bg-black rounded-none text-[10px] lg:text-[12px] xl:text-[14px]";
    const buttonFalse = "text-black bg-white rounded-none text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-18x]";
    return (
        <div className="py-10">
            <div className="md:flex md:flex-row gap-3">
                <h1 id="h1" className="font-thin text-left my-2">SAMPLES</h1>
                <div className="hidden md:flex md:ml-auto gap-1 pb-2">
                    <button className={all ? buttonTrue : buttonFalse} onClick={handleAllToggle}>All</button>
                    <button className={matt ? buttonTrue : buttonFalse} onClick={handleMattToggle}>Matt</button>
                    <button className={metallic ? buttonTrue : buttonFalse} onClick={handleMetallicToggle}>Metallic</button>
                    <button className={glossy ? buttonTrue : buttonFalse} onClick={handleGlossyToggle}>Glossy/Matt</button>
                    <button className={translucent ? buttonTrue : buttonFalse} onClick={handleTranslucentToggle}>Translucent</button>
                    <button className={perforated ? buttonTrue : buttonFalse} onClick={handlePerforatedToggle}>Perforated</button>
                </div>
                <div className="md:hidden flex flex-col gap-1 pb-2 pt-4">
                    <button className={all ? buttonTrue : buttonFalse} onClick={handleAllToggle}>All</button>
                    <button className={matt ? buttonTrue : buttonFalse} onClick={handleMattToggle}>Matt</button>
                    <button className={metallic ? buttonTrue : buttonFalse} onClick={handleMetallicToggle}>Metallic</button>
                    <button className={glossy ? buttonTrue : buttonFalse} onClick={handleGlossyToggle}>Glossy/Matt</button>
                    <button className={translucent ? buttonTrue : buttonFalse} onClick={handleTranslucentToggle}>Translucent</button>
                    <button className={perforated ? buttonTrue : buttonFalse} onClick={handlePerforatedToggle}>Perforated</button>
                </div>
            </div>
            <div>
                <SamplesList category={current}/>
            </div>
        </div>
    );
};