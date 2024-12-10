"use client";
import { useState } from "react";
import Image from "next/image";

export default function Nav() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <nav className="flex flex-wrap items-center justify-between p-4">
      <div className="flex items-center space-x-4 sm:space-x-8 w-full sm:w-auto">

        <Image
          src="/images/Group.png"
          alt="Group"
          width={80} 
          height={80}
        />

      <div className="relative flex items-center w-full sm:w-[600px] h-[48px] rounded-md"
      style={{ backgroundColor: "rgba(249, 250, 251, 1)", 
        border: "1px solid #E5E7EB", }}>
    
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Rechercher un produit"
        className="w-full h-full px-4 text-gray-700 bg-transparent border-none focus:outline-none"
      />

      <div className="absolute right-3">
        <Image
          src="/images/Group 94.png" 
          alt="Search Icon"
          width={30}
          height={30}
        />
      </div>
    </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-12 mt-4 sm:mt-0">
        <Image
          src="/images/Frame 80.png"
          alt="Frame 80"
          layout="intrinsic"
          width={100} 
          height={30}
          quality={100}
        />
        <Image
          src="/images/Frame 72.png"
          alt="Frame 72"
          width={110}
          height={30}
        />
        <Image
          src="/images/Frame 179.png"
          alt="Frame 179"
          width={100}
          height={38}
        />
        <Image
          src="/images/Avatar & Icons.png"
          alt="Avatar & Icons"
          width={150}
          height={38}
        />
      </div>
    </nav>
  );
}
