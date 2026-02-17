import { useState } from "react";
import type { AccordionItemData } from "../types.ts";
import { AccordionItem } from "./AccordionItem.js";

interface AccordionProps {
  items: AccordionItemData[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 divide-y divide-gray-200 border border-gray-200 w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => toggle(index)}
        />
      ))}
    </div>
  );
}