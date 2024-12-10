import Image from 'next/image';

export default function Ces() {
  return (
    <div className="flex flex-col items-center justify-start w-full">
      
      {/* First section */}
      <div className="flex items-center justify-start w-full mb-4"> 
        <div
          style={{
            width: '602px',
            height: '43px',
            gap: '0px',
            opacity: '1',
            fontFamily: 'Cabinet Grotesk',
            fontSize: '35px',
            fontWeight: '500',
            lineHeight: '43.4px',
            textAlign: 'left',
            textUnderlinePosition: 'from-font',
          }}
        >
          Ces produits pourraient vous intéresser
        </div>
      </div>

      {/* "Voir toute la collection" section */}
      <div className="w-[100px] md:w-[150px] ml-auto flex justify-end mb-8 md:mb-0">
        <div
          style={{
            width: '204px',
            height: '20px',
            gap: '0px',
            opacity: '1',
            fontFamily: 'Cabinet Grotesk',
            fontSize: '16px',
            fontWeight: '500',
            lineHeight: '19.84px',
            textAlign: 'left',
            textDecorationLine: 'underline',
            textDecorationStyle: 'solid',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
          }}
        >
          Voir toute la collection
        </div>
      </div>

      <div className="flex items-center justify-start space-x-4 flex-wrap mb-8">
  <div className="flex items-center justify-start w-full sm:w-auto">
    <Image
      src="/images/Card_Product (1).png"
      alt="Card Product"
      width={450}
      height={490}
    />
  </div>

  <div className="flex items-center justify-start w-full sm:w-auto">
    <Image
      src="/images/Card_Product (1).png"
      alt="Card Product"
      width={450}
      height={490}
    />
  </div>

  <div className="flex items-center justify-start w-full sm:w-auto">
    <Image
      src="/images/Card_Product (1).png"
      alt="Card Product"
      width={450}
      height={490}
    />
  </div>

      </div>
    </div>
  );
}
