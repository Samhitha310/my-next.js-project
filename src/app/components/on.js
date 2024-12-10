import Image from 'next/image';

export default function On() {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center mx-auto sm:flex-col sm:items-start">
      <div className="relative w-full h-full">
        <Image
          src="/images/Rectangle 544.png"
          alt="Rectangle 544"
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover sm:object-contain"
        />
      </div>

      <div className="absolute top-1/4 left-1/4 sm:top-20 sm:left-1/4 flex flex-col items-center justify-center w-full sm:w-auto">
        <div className="mb-4">
          <div
            style={{
              width: '307px',
              height: '43px',
              fontFamily: 'Cabinet Grotesk',
              fontSize: '35px',
              fontWeight: '500',
              lineHeight: '43.4px',
              textAlign: 'center',
              textUnderlinePosition: 'from-font',
              textDecorationSkipInk: 'none',
            }} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl"
          >
            <span>On s’occupe de </span>
            <span style={{ color: 'rgba(92, 210, 221, 1)' }}>tout</span>
          </div>
          <div
            style={{
              fontFamily: 'Geist',
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '17.36px',
              textAlign: 'center',
              textUnderlinePosition: 'from-font',
              textDecorationSkipInk: 'none',
              marginTop: '10px',
              color: 'rgba(156, 156, 156, 1) ',
            }}
          >
            Office ipsum you must be muted. It meeting commitment busy pain.
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center space-x-2 sm:space-x-4">
          <Image src="/images/Group 111.png" alt="Group 111" width={120} height={25} />
          <Image src="/images/Line 11.png" alt="Line 11" width={100} height={15} />
          <Image src="/images/Group 113.png" alt="Group 113" width={80} height={25} />
          <Image src="/images/Line 10.png" alt="Line 10" width={100} height={15} />
          <Image src="/images/Group 114.png" alt="Group 114" width={120} height={25} />
          <Image src="/images/Line 9.png" alt="Line 9" width={100} height={15} />
          <Image src="/images/Group 115.png" alt="Group 115" width={130} height={25} />
        </div>
      </div>

      <div className="absolute top-80 left-30 flex items-start space-x-7">
        <div className="flex flex-col items-left space-y-7">
          <Image src="/images/Frame 204.png" alt="Frame 204" width={760} height={30} />
        </div>

        <div className="flex flex-col items-right space-y-4">
          <div
            style={{
              width: '800px',
              height: '300px',
              backgroundColor: 'rgba(255, 243, 249, 1)',
              borderRadius: '20px 0px 0px 0px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '25px',
              border: '2px',
            }}className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] mx-auto"
          >
            <div
              style={{
                width: '726px',
                height: '53px',
                fontFamily: 'Cabinet Grotesk',
                fontSize: '43px',
                fontWeight: '500',
                lineHeight: '53.4px',
                textAlign: 'left',
                textUnderlinePosition: 'from-font',
                textDecorationSkipInk: 'none',
                marginTop:'4px',
              }}
            >
              <span>S’inscrire & économiser </span>
              <span style={{ color: 'rgba(92, 210, 221, 1)' }}>10% </span>
            </div>

            <div
              style={{
                fontFamily: 'Geist',
                fontSize: '14px',
                fontWeight: '200',
                lineHeight: '17.36px',
                textAlign: 'left',
                textUnderlinePosition: 'from-font',
                textDecorationSkipInk: 'none',
                marginTop: '4px',
                color: 'rgba(156, 156, 156, 1) ',
              }}
            >
              <p>
                Office ipsum you must be muted. Synergize helicopter prioritize anyway job due
                harvest most opportunity didn't.
              <span>
                Yet busy any meeting shark light marginalised 4-blocker message. Productize
                corporate nail caught synergy
                </span>
                <span>
              highlights lunch. Company another pushback items dear or any.</span></p>
            </div>

            <div className="flex items-center space-x-4">
              <div
                style={{
                  width: '565px',
                  height: '58px',
                  top: '188px',
                  left: '34px',
                  gap: '0px',
                  border: '2px',
                  opacity: '1',
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  display: 'flex',
                  justifyContent: 'left',
                  alignItems: 'left',
                }}
              >
                <span style={{ color: 'rgba(166, 138, 152, 1)' }}>john@doe.com</span>
              </div>

              <div
                style={{
                  width: 'auto',
                  height: '58px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 'var(--radius-md)',
                  border: '2px',
                  opacity: '1',
                }}className="w-full sm:w-[80%] sm:py-2"
              >
                <button
                  style={{
                    backgroundColor: 'transparent',
                    border: '20',
                    cursor: 'pointer',
                  }}
                >
                  <img
                    src="/images/Frame 179 (1).png"
                    alt="Frame 179 Button"
                    style={{
                      width: '167px',
                      height: '60px',
                      radius: '20',
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
