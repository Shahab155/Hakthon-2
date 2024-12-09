import React from "react";
import Image from "next/image";

export default function HeroBottom() {
  return (
    <>
      <div className="w-[100%] h-[800px] bg-[#23856D] my-20 flex items-center justify-evenly gap-10 ">
        <div className="flex flex-col gap-8 ">
          <h5 className="font-[700] text-white text-sm">Summer 2020</h5>
          <h1 className="text-6xl tracking-[0.2px] font-[700] text-white w-[330px]">
            Vita Classic Product
          </h1>
          <h4 className=" text-white font-[500] w-[280px] text-sm">
            We know how large objects will act, but things on a small scale.
          </h4>

          <div className="text-sm w-[170px] text-center py-4 px-4 rounded-md bg-[#2DC071] text-white font-[Montserrat]">
            <button>Add to Cart</button>
          </div>
        </div>
        <div className="w-[443px] h-[685px]">
          <Image src="/Images/hero14.png" alt="" width={443} height={685} />
        </div>
      </div>

      {/* hero bottom 2  */}
      <div className="flex justify-around ">
        {/* image  */}
        <div className="w-[650px] h-[774px]  ">
          <Image src="/Images/hero15.png" alt="" width={725} height={685} />
        </div>
        {/* other content */}
        <div className="flex flex-col gap-8 pt-20 pr-10 ">
          <h5 className="font-[700] text-[#BDBDBD] text-sm">Summer 2020</h5>
          <h1 className="text-6xl tracking-[0.2px] font-[700] text-[#252B42] w-[330px]">
            Vita Classic Product
          </h1>
          <h4 className=" text-[#737373] font-[500] w-[280px] text-sm">
            We know how large objects will act, but things on a small scale.
          </h4>
          <div className="flex gap-2">
            <div className="text-sm w-[150px] font-[700] text-center py-4 px-4 rounded-sm bg-[#2DC071] text-white font-[Montserrat]">
              <button>Buy Now</button>
            </div>
            <div className="text-sm w-[150px] font-[700] text-center py-4 px-4 rounded-sm border-2 border-[#2DC071] text-[#2DC071] font-[Montserrat]">
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
