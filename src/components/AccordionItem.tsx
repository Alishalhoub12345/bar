import type { AccordionItemData } from "../types.ts";

interface AccordionItemProps {
  item: AccordionItemData;
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionItem({
  item,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between p-4 text-left font-medium focus:outline-none focus-visible:ring focus-visible:ring-gray-300"
      >
        <span>{item.title}</span>

        <svg
          className={`w-4 h-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 text-sm text-left text-gray-600 whitespace-pre-wrap">
          {item.content}
        </div>
      </div>
    </div>
  );
}