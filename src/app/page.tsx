import React from "react";
import Image from "next/image";
import HeroItems from "./components/heroContent/heroItems";
import HeroLast from "./components/heroContent/HeroLast";

export default function Home() {
  return (
    <>
      {/* container  */}
      <div className="w-[100%] h-[700px] flex items-center justify-around bg-[#2A7CC7] ">
        <div className="flex flex-col gap-8 ">
          <h5 className="font-[700] text-white text-sm">Summer 2020</h5>
          <h1 className="text-6xl tracking-[0.2px] font-[700] text-white">
            New Collection
          </h1>
          <h4 className=" text-white font-[500] w-[280px] text-sm">
            We know how large objects will act, but things on a small scale.
          </h4>
          <div className="text-sm w-[170px] text-center py-4 px-4 rounded-sm bg-[#2DC071] text-white font-[Montserrat]">
            <button>Shop Now</button>
          </div>
        </div>
        <div>
          <Image src="/Images/hero1.png" alt="" width={600} height={636} />
        </div>
      </div>
      {/* 2nd div  */}
      {/* container */}
      <div className="w-[100%] h-[770px] my-10 flex flex-col gap-12 ">
        {/* heading and para  */}
        <div className="flex flex-col items-center gap-3">
          <h3 className="text-2xl text-[#252B42] font-[700]">Editors Pic</h3>
          <p className="text-[#737373] text-sm ">
            Problems trying to resolve between
          </p>
        </div>
        {/* hero images  */}
        <div className="flex h-[500px] gap-5 justify-center">
          {/* image 1 */}
          <div className="h-[500px] w-[510]">
            <Image src="/Images/hero2.jpeg" alt="" width={430} height={500} />
          </div>
          {/* image 2 */}
          <div className="h-[500px] w-[510]">
            <Image src="/Images/hero3.jpeg" alt="" width={430} height={500} />
          </div>

          {/* 2 images container  */}
          <div className="flex flex-col gap-3 h-[242px] w-[219px]">
            {/* image 3 */}

            <Image src="/Images/hero4.jpeg" alt="" width={230} height={170} />
            {/* image 4 */}
            <Image src="/Images/hero5.jpeg" alt="" width={230} height={170} />
          </div>
        </div>
      </div>
      {/* items  */}
      <HeroItems />
      <HeroLast />
    </>
  );
}
