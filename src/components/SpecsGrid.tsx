import Tooltip from "./Tooltip.js";
import { SpecificationItems } from "../assets/Items/SpecificationItems.js";
import { useEffect, useRef, useState } from "react";

export default function SpecsGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Close tooltip when clicking outside the grid
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
      if (
        gridRef.current &&
        !gridRef.current.contains(e.target as Node)
      ) {
        setActiveIndex(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, []);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1 pt-10"
    >
      {SpecificationItems.map((item, index) => (
        <div
          key={item.label}
          className="relative md:px-3 group flex flex-col items-center gap-1 bg-white hover:bg-gray-50 aspect-square justify-center cursor-pointer"
          onClick={() =>
            setActiveIndex(activeIndex === index ? null : index)
          }
        >
          <img
            src={item.icon}
            alt={item.label}
            className="w-12 h-12 lg:mb-5"
            loading="lazy"
          />

          <span id="p" className="font-extralight text-gray-900 text-center">
            {item.label}
          </span>

          <Tooltip
            title={item.tooltip.title}
            description={item.tooltip.content}
            open={activeIndex === index}
          />
        </div>
      ))}
    </div>
  );
}
