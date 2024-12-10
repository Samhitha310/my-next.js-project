import Image from 'next/image';

export default function Article() {
  return (
    <div
      className="flex flex-col items-center px-6 py-4 gap-6 sm:gap-4"
      style={{ backgroundColor: '#FBF9F899' }}
    >
      <div className="flex items-center justify-between w-full flex-wrap sm:flex-nowrap gap-4 sm:gap-0">
        {/* Heading Section */}
        <div className="w-auto sm:w-[150px]">
          <div
            style={{
              opacity: '1',
              fontFamily: 'Cabinet Grotesk',
              fontSize: '28px', // Adjusted font size for mobile
              fontWeight: '500',
              lineHeight: '1.2',
              textAlign: 'left',
            }}
            className="text-xl sm:text-2xl"
          >
            Articles similaires
          </div>
        </div>

        {/* Link Section */}
        <div className="w-auto sm:w-[150px] text-right sm:text-left">
          <div
            style={{
              opacity: '1',
              fontFamily: 'Cabinet Grotesk',
              fontSize: '14px', // Adjusted font size for mobile
              fontWeight: '500',
              lineHeight: '1.5',
              textAlign: 'left',
              textDecorationLine: 'underline',
            }}
            className="text-sm sm:text-base"
          >
            Voir toute la collection
          </div>
        </div>
      </div>

      <div className="relative flex justify-center items-center">

        <div className="absolute left-0 z-10">
          <Image
            src="/images/Rectangle 536.png"
            alt="Left Image"
            width={40}
            height={20}
          />
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 "
          >
            <Image
              src="/images/arrow-right.png"
              alt="Left Arrow"
              width={30}
              height={30}
            />
          </button>
        </div>

        <div className="flex overflow-hidden">
          <div className="flex transition-transform duration-400">
            <div className="relative sm:w-4/5 p-6 bg-white rounded-lg shadow-md cursor-pointer">
              <Image
                src="/images/Card_Product.png"
                alt="Card Product"
                width={330}
                height={180}
                className="w-full h-auto sm:h-[250px] md:h-[280px] lg:h-[320px] object-cover"
              />
            </div>
            <div className="relative sm:w-4/5 p-4 bg-white rounded-lg shadow-md cursor-pointer">
              <Image
                src="/images/Card_Product (3).png"
                alt="Card Product (3)"
                width={330}
                height={180}
                className="w-full h-auto sm:h-[250px] md:h-[280px] lg:h-[320px] object-cover"
              />
            </div>
            <div className="relative sm:w-4/5 p-4 bg-white rounded-lg shadow-md cursor-pointer">
              <Image
                src="/images/Card_Product (4).png"
                alt="Card Product (4)"
                width={330}
                height={180}
                className="w-full h-auto sm:h-[250px] md:h-[280px] lg:h-[320px] object-cover"
              />
            </div>
            <div className="relative sm:w-4/5 p-4 bg-white rounded-lg shadow-md cursor-pointer">
              <Image
                src="/images/Card_Product (5).png"
                alt="Card Product (5)"
                width={330}
                height={180}
                className="w-full h-auto sm:h-[250px] md:h-[280px] lg:h-[320px] object-cover"
              />
            </div>
            <div className="relative sm:w-1/2 md:w-1/2 lg:w-1/3 p-4 bg-white rounded-lg shadow-md cursor-pointer">
              <Image
                src="/images/Card_Product (2).png"
                alt="Card Product (2)"
                width={330}
                height={180}
                className="w-full h-auto sm:h-[250px] md:h-[280px] lg:h-[320px] object-cover"
              />
            </div>
          </div>
        </div>

        <div className="absolute right-0 z-10">
          <Image
            src="/images/Rectangle 535.png"
            alt="Right Image"
            width={40}
            height={20}
          />
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 "
          >
            <Image
              src="/images/icon.png"
              alt="Right Arrow"
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>
    </div>
  );
}