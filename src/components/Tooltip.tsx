type TooltipProps = {
  title: string;
  description: string;
  open: boolean;
  position?: "top" | "bottom";
};

export default function Tooltip({
  title,
  description,
  open,
  position = "bottom",
}: TooltipProps) {
  const positionClasses =
    position === "top"
      ? "bottom-full mb-3"
      : "top-full mt-3";

  return (
    <div
      className={`
        absolute left-1/2 -translate-x-1/2
        ${positionClasses}
        w-56 sm:w-64
        bg-white
        border border-gray-200
        shadow-lg
        rounded-lg
        p-4
        text-left
        z-30
        transition-opacity
        duration-200

        /* Mobile (tap) */
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}

        /* Desktop (hover) */
        lg:opacity-0
        lg:pointer-events-none
        lg:group-hover:opacity-100
        lg:group-hover:pointer-events-auto
      `}
    >
      <h4 className="text-sm font-semibold text-gray-900 mb-1">
        {title}
      </h4>
      <p className="text-sm text-gray-600 leading-snug whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}