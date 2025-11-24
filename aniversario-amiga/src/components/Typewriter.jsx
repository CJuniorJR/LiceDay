import React, { useEffect, useState } from "react";

export default function Typewriter({ text, speed = 60 }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplay((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <p className="typewriter">{display}</p>;
}
