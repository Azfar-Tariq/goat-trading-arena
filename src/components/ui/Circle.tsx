import React, { useEffect, useRef } from "react";

const Circle: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const circle = circleRef.current;

    const handleMouseMove = (event: MouseEvent) => {
      if (circle) {
        circle.style.top = `${event.clientY - circle.offsetHeight / 2}px`;
        circle.style.left = `${event.clientX - circle.offsetWidth / 2}px`;
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
      className="circle absolute w-96 h-96 bg-[#0085ff] rounded-full opacity-50 pointer-events-none blur-[8rem]"
    ></div>
  );
};

export default Circle;
