"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center gap-2 p-4">

      <Image
        src="/images/Text (1).png"
        alt="Text (1)"
        width={38}
        height={29}
        quality={100}
      />

      <Image
        src="/images/Ellipse 2.png"
        alt="Ellipse 2"
        width={5}
        height={5}
        quality={100}
        
      />
      <Image
        src="/images/Link (11).png"
        alt="Link (11)"
        width={95}
        height={21}
        quality={100}
      />
    </div>
  );
}
