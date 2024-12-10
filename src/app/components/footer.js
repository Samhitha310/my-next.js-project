import Image from "next/image";

export default function Footer() {
  return (
    <div className="relative w-full h-auto bg-gray-100 p-4">
   
      <div className="relative w-full bg-cover bg-no-repeat flex items-center justify-between px-4 py-2" 
           style={{ backgroundImage: "url('/images/Rectangle 546.png')" }}>
   
        <div className="flex items-center space-x-8">

          <Image
            src="/images/Group (1).png"
            alt="Group (1)"
            width={100} 
            height={50}
          />
        
          <Image
            src="/images/Frame 117 (1).png"
            alt="Frame 117(1)"
            width={150} 
            height={50}
          />
       
          <Image
            src="/images/Frame 117.png"
            alt="Frame 117"
            width={180} 
            height={50}
          />
          
          <Image
            src="/images/Frame 206 (2).png"
            alt="Frame 206 (2)"
            width={150} 
            height={50}
          />
        </div>

       
        <div>
          <Image
            src="/images/Frame 205.png"
            alt="Frame 205"
            width={100} 
            height={50}
          />
        </div>
      </div>
    </div>
  );
}
