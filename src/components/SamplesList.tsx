import { useEffect, useRef, useState } from "react";

interface SamplesListProps {
    category: string;
}

export default function SamplesList({
    category
}: SamplesListProps) {
    const visible = "grid grid-cols-6 lg:grid-cols-12 gap-1";

    const hidden = "hidden";

    const all = import.meta.glob<{ default: string }>('/src/assets/Colors/All/*.jpg', { eager: true });
    const matt = import.meta.glob<{ default: string }>('/src/assets/Colors/Matt/*.jpg', { eager: true });
    const metallic = import.meta.glob<{ default: string }>('/src/assets/Colors/Metallic/*.jpg', { eager: true });
    const glossy = import.meta.glob<{ default: string }>('/src/assets/Colors/Glossy/*.jpg', { eager: true });
    const translucent = import.meta.glob<{ default: string }>('/src/assets/Colors/Translucent/*.jpg', { eager: true });
    const perforated = import.meta.glob<{ default: string }>('/src/assets/Colors/Perforated/*.jpg', { eager: true });

    const imagesMatt = Object.values(matt).map(
        (module: any) => module.default
    );
    const imagesAll= Object.values(all).map(
        (module: any) => module.default
    );
    const imagesMetallic = Object.values(metallic).map(
        (module: any) => module.default
    );
    const imagesGlossy= Object.values(glossy).map(
        (module: any) => module.default
    );
    const imagesTranslucent = Object.values(translucent).map(
        (module: any) => module.default
    );
    const imagesPerforated = Object.values(perforated).map(
        (module: any) => module.default
    );

    return (
        <div className="py-5">
            <ul className={category === "All" ? visible : hidden}>
                {imagesAll.map((img, i) => (
                <li key={i + "-all"}>
                    <img
                    src={img}
                    className="w-30 h-auto" loading="lazy"
                    />
                </li>
                ))
                } 
            </ul>
            <ul className={category === "Matt" ? visible : hidden}>
                {imagesMatt.map((img, i) => (
                <li key={i + "-matt"}>
                    <img
                    src={img}
                    className="w-30 h-auto" loading="lazy"
                    />
                </li>
                ))
                } 
            </ul>
            <ul className={category === "Metallic" ? visible : hidden}>
                {imagesMetallic.map((img, i) => (
                <li key={i + "-metallic"}>
                    <img
                    src={img}
                    className="w-30 h-auto" loading="lazy"
                    />
                </li>
                ))
                } 
            </ul>
            <ul className={category === "Glossy" ? visible : hidden}>
                {imagesGlossy.map((img, i) => (
                <li key={i + "-glossy"}>
                    <img
                    src={img}
                    className="w-30 h-auto" loading="lazy"
                    />
                </li>
                ))
                } 
            </ul>
            <ul className={category === "Translucent" ? visible : hidden}>
                {imagesTranslucent.map((img, i) => (
                <li key={i +"-translucent"}>
                    <img
                    src={img}
                    className="w-30 h-auto" loading="lazy"
                    />
                </li>
                ))
                } 
            </ul>
            <ul className={category === "Perforated" ? visible : hidden}>
                {imagesPerforated.map((img, i) => (
                <li key={i + "-perforated"}>
                    <img
                    src={img}
                    className="w-30 h-auto" loading="lazy"
                    />
                </li>
                ))
                } 
            </ul>
        </div>
    );
}
