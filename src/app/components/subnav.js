"use client"; 
import { useState } from "react";
import Image from "next/image";

export default function SubNav() {

  const [selectedIndex, setSelectedIndex] = useState(0);

  const imageLinks = [
    { src: "/images/Link.png", alt: "Link", width: 120, height: 88 },
    { src: "/images/Link (1).png", alt: "Link (1)", width: 80, height: 138 },
    { src: "/images/Link (2).png", alt: "Link (2)", width: 80, height: 138 },
    { src: "/images/Link (3).png", alt: "Link (3)", width: 155, height: 138 },
    { src: "/images/Link (4).png", alt: "Link (4)", width: 70, height: 138 },
    { src: "/images/Link (5).png", alt: "Link (5)", width: 90, height: 138 },
    { src: "/images/Link (6).png", alt: "Link (6)", width: 55, height: 138 },
    { src: "/images/Link (7).png", alt: "Link (7)", width: 100, height: 138 },
    { src: "/images/Link (8).png", alt: "Link (8)", width: 130, height: 138 },
    { src: "/images/Link (9).png", alt: "Link (9)", width: 55, height: 138 },
    { src: "/images/Link (10).png", alt: "Link (10)", width: 130, height: 138 },
  ];

  const handleSelect = (index) => {
    setSelectedIndex(index); 
  };

  return (
    <div className="flex p-4"> {/* Replace subnav with div */}
      <div className="flex flex-wrap items-center gap-6">
        {imageLinks.map((link, index) => (
          <div
            key={index}
            onClick={() => handleSelect(index)} 
            className={`cursor-pointer p-2 relative ${selectedIndex === index ? "border-b-4 border-blue-500" : ""}`} 
          >
            <Image
              src={link.src}
              alt={link.alt}
              width={link.width}
              height={link.height}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
