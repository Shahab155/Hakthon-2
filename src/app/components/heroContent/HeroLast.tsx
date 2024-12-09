import React from "react";
import Image from "next/image";

export default function HeroLast() {
  return (
    <>
      {/* main container  */}

      {/* item container  */}

      <div className="flex justify-center gap-[30px] mb-32 pl-28">
        {/* item 1 */}
        <div className="flex flex-col justif-center gap-4">
          {/* image  */}
          <div className="w-[348px] h-[300px]">
            <Image src="/Images/hero16.jpeg" alt="" width={348} height={300} />
          </div>
          {/* content  */}
          <ul className="flex gap-5 text-[12px] ">
            <li className="text-[#8EC2F2]">Google</li>
            <li className="text-[#737373]">Trending</li>
            <li className="text-[#737373]">New</li>
          </ul>
          <h2 className="w-[247px] text-2xl tracking-[0.2px] text-[#252B42]">
            Loudest al Madison #1 (lingural)
          </h2>
          <p className=" w-[280px] text-[#737373]">
            We focus on ergonomics and meeting you where you work. Its only a
            keystroke away
          </p>
          <div className="flex justify-between w-[298px] text-xs">
            <span>22 April 2021</span> <span>10 Comments</span>
          </div>
          <h4 className="font-[700] text-[#737373]">Learn More</h4>
        </div>

        {/* item 2 */}
        <div className="flex flex-col justif-center gap-4">
          {/* image  */}
          <div className="w-[370px] h-[300px]">
            <Image src="/Images/hero17.jpeg" alt="" width={370} height={300} />
          </div>
          {/* content  */}
          <ul className="flex gap-5 text-[12px] ">
            <li className="text-[#8EC2F2]">Google</li>
            <li className="text-[#737373]">Trending</li>
            <li className="text-[#090808]">New</li>
          </ul>
          <h2 className="w-[247px] text-2xl tracking-[0.2px] text-[#252B42]">
            Loudest al Madison #1 (lingural)
          </h2>
          <p className=" w-[280px] text-[#737373]">
            We focus on ergonomics and meeting you where you work. Its only a
            keystroke away
          </p>
          <div className="flex justify-between w-[298px] text-xs">
            <span>22 April 2021</span> <span>10 Comments</span>
          </div>
          <h4 className="font-[700] text-[#737373]">Learn More</h4>
        </div>
        {/* item 3 */}
        <div className="flex flex-col justif-center gap-4">
          {/* image  */}
          <div className="w-[348px] h-[300px]">
            <Image src="/Images/hero18.jpeg" alt="" width={200} height={200} />
          </div>
          {/* content  */}
          <ul className="flex gap-5 text-[12px] ">
            <li className="text-[#8EC2F2]">Google</li>
            <li className="text-[#737373]">Trending</li>
            <li className="text-[#737373]">New</li>
          </ul>
          <h2 className="w-[247px] text-2xl tracking-[0.2px] text-[#252B42]">
            Loudest al Madison #1 (lingural)
          </h2>
          <p className=" w-[280px] text-[#737373]">
            We focus on ergonomics and meeting you where you work. Its only a
            keystroke away
          </p>
          <div className="flex justify-between w-[298px] text-xs">
            <span>22 April 2021</span> <span>10 Comments</span>
          </div>
          <h4 className="font-[700] text-[#737373]">Learn More</h4>
        </div>
      </div>
    </>
  );
}
