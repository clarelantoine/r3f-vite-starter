import { useEffect, useState } from "react";

export default function GridHelper({ cols = 12, gap = 20, inset = 20 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key.toLowerCase() === "g") {
        setVisible((prev) => !prev);
      }
    };

    window.addEventListener("keypress", handleKeyPress);

    return () => window.removeEventListener("keypress", handleKeyPress);
  }, []);
  return (
    visible && (
      <div
        className="grid__helper"
        style={{
          position: "fixed",
          display: "grid",
          pointerEvents: "none",
          background: "white",
          opacity: 0.1,
          zIndex: 999,
          gap: gap,
          inset: inset,
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
        }}
      >
        {Array.from({ length: cols }).map((_, index) => (
          <div
            key={index}
            className="grid__helper__col"
            style={{ background: "red" }}
          ></div>
        ))}
      </div>
    )
  );
}
