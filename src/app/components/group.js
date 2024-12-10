import Image from 'next/image';

export default function Group() {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10">

        <div className="relative">
          <Image
            src="/images/Rectangle 515.png"
            alt="Group"
            width={800}
            height={168}
            className="w-full md:w-[700px] h-auto"
          />
          <div className="absolute top-0 left-0 p-4">
            <Image
              src="/images/Table ronde 165cm Festi 2.png"
              alt="Table ronde 165cm Festi"
              width={60}   
              height={40}
            />
            <Image
              src="/images/Group 96.png"
              alt="Group 96"
              width={60}   
              height={40}
            />
            <Image
              src="/images/Group 97.png"
              alt="Group 97"
              width={60}   
              height={40}
            />
            <Image
              src="/images/Group 98.png"
              alt="Group 98"
              width={60}   
              height={40}
            />
          </div>
          <div className="absolute top-[43px] left-[121px] opacity-100">
            <Image
              src="/images/Location Cheese big picture 1.png"
              alt="Location Cheese Big Picture"
              width={482}
              height={452}
            />
          </div>
        </div>

        <div className="relative w-full md:w-[600px] p-4">

          <Image
            src="/images/Rectangle 527.png"
            alt="Table ronde 165cm Festi"
            width={600}
            height={130}
            className="w-full"
          />

          <div className="absolute top-[13px] w-full">
            <Image
              src="/images/Group 95.png"
              alt="Group 95"
              width={560}
              height={170}
              className="w-full"
            />
            <Image
              src="/images/Frame 128.png"
              alt="Frame 128"
              width={520}
              height={170}
              className="w-full"
            />
            <Image
              src="/images/Line 1.png"
              alt="Line 1"
              width={520}
              height={180}
              className="w-full"
            />

            <div className="absolute top-[85px] left-[9px]">
              <Image
                src="/images/Frame 95.png"
                alt="Frame 95"
                width={69}
                height={30}
              />
            </div>
            <div className="absolute top-[85px] left-[95px]">
              <Image
                src="/images/Frame 95 (1).png"
                alt="Frame 95 (1)"
                width={70}
                height={30}
              />
            </div>
          </div>

          <div className="absolute top-[100px] right-0 text-right">
            <p
              className="font-geist text-[12px] font-medium leading-[15.6px]"
              style={{
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              RÉF _ VABGN5
            </p>
          </div>

          <div className="absolute top-[133px]">
            <Image
              src="/images/Line 2.png"
              alt="Line 2"
              width={520}
              height={190}
              className="w-full"
            />
            <div className="absolute top-0 p-4 text-left text-sm leading-relaxed text-gray-700">
              <p className="font-medium">
                Location appareil à raclette - Raclette traditionnelle 1/2 roue
              </p>
              <p>Réglable en hauteur</p>
              <p>Appareil à raclette professionnel</p>
              <p>Boîtier de chauffe horizontal réglable en hauteur</p>
              <p className="mt-2 font-medium">220V</p>
              <p>900W</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 w-full space-y-4 sm:space-y-0 sm:space-x-2">
           <Image
              src="/images/Group 131.png"
              alt="Group 131"
              width={153}
              height={49}
              className="max-w-[120px] w-full sm:w-auto"
            />
            <Image
              src="/images/Frame 99.png"
              alt="Frame 99"
              width={592}
              height={50}
              
            />
          </div>

        </div>

      </div>
    </div>
  );
}
