import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

export function HeroMotion() {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => {
    setIsDragging(true);
    setIsHovered(false);
  };

  const handleDragEnd = async () => {
    setIsDragging(false);
    setIsHovered(false);

    await controls.start({
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 350,
        damping: 20,
      },
    });
  };

  return (
    <div className="relative flex w-full justify-center">
      <div
        className="relative inline-flex justify-center"
        onMouseEnter={() => {
          if (!isDragging) setIsHovered(true);
        }}
        onMouseLeave={() => {
          if (!isDragging) setIsHovered(false);
        }}
      >
        {/* Hover label */}
        {isHovered && !isDragging && (
          <div className="absolute -top-5 sm:-top-6 z-30 rounded-lg bg-[#F1F1F5] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-black sm:px-4 sm:py-2 sm:text-[12px] font-[Satoshi]">
            Drag to move
          </div>
        )}

        {/* Draggable container */}
        <motion.div
          drag
          dragElastic={0}
          dragMomentum={false}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          animate={controls}
          className={`relative flex cursor-grab justify-center px-3 py-2 sm:px-6 sm:py-4 active:cursor-grabbing ${
            isHovered && !isDragging
              ? "border border-dashed border-white/25"
              : "border border-transparent"
          }`}
        >
          {/* Name */}
          <h1
            className="
              select-none text-center font-bold leading-[100%] tracking-[-0.03em]
              text-[#F1F1F5] font-[Satoshi]

              text-[36px]
              sm:text-[48px]
              md:text-[72px]
              lg:text-[96px]
            "
          >
            JUDE ALAYACYAC
          </h1>
        </motion.div>
      </div>
    </div>
  );
}
