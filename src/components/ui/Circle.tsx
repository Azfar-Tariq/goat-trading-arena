import React, { useEffect, useRef } from "react";

const Circle: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const circle = circleRef.current;

    const handleMouseMove = (event: MouseEvent) => {
      if (circle) {
        const offsetX = window.scrollX;
        const offsetY = window.scrollY;

        circle.style.top = `${event.clientY + offsetY - circle.offsetHeight / 2}px`;
        circle.style.left = `${event.clientX + offsetX - circle.offsetWidth / 2}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={circleRef}
      className="circle pointer-events-none absolute h-96 w-96 rounded-full bg-[#0085ff] opacity-50 blur-[8rem]"
    ></div>
  );
};

export default Circle;
