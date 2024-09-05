import React, { useEffect, useState } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 });
  const [cursorStyle, setCursorStyle] = useState("default");

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === "A" || e.target.tagName === "BUTTON") {
        setCursorStyle("hovered");
      } else {
        setCursorStyle("default");
      }
    };

    const updateTrailingPosition = () => {
      setTrailingPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.2, // Adjust trailing speed
          y: prev.y + dy * 0.2,
        };
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    const interval = setInterval(updateTrailingPosition, 16); // Smooth trailing effect

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      clearInterval(interval);
    };
  }, [position]);

  return (
    <div
      className={`custom-cursor ${cursorStyle}`}
      style={{ left: `${trailingPosition.x}px`, top: `${trailingPosition.y}px` }}
    />
  );
};

export default CustomCursor;
