import { MoveDown  } from "lucide-react";

function ScrollIndicator() {
  return (
    <div
      className="group flex items-center gap-3 select-none"
    >
      {/* Mouse */}
      <div
        className="relative w-7 h-12 rounded-full border border-base-content/60
                   flex justify-center overflow-hidden
                   group-hover:border-primary transition-colors duration-300"
      >
        <span
          className="absolute top-2 w-1 h-2 rounded-full bg-base-content/60
                     animate-scroll
                     group-hover:bg-primary"
        />
      </div>

      {/* Text */}
      <span
        className="text-xs font-medium uppercase tracking-[0.35em]
                   text-base-content/60
                   group-hover:text-primary transition-all duration-300"
      >
        Scroll Down
      </span>

      {/* Arrow */}
      <MoveDown 
        className="w-5 h-5 text-base-content/60 animate-scroll
                   animate-arrow
                   group-hover:text-primary transition-colors duration-300"
      />
    </div>
  );
}

export default ScrollIndicator;
