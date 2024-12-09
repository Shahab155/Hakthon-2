import React from "react";
import Image from "next/image";
import Circle from "./Circle";
import HeroBottom from "./HeroBottom";

export default function HeroItems() {
  return (
    <>
      {/* 3rd div  */}
      {/* outer container */}
      <div className="w-[100%]  flex flex-col items-center ">
        {/* inner container  */}
        <div className="w-[1124px]  ">
          {/* heading and para  */}
          <div className="flex flex-col items-center gap-3 my-10">
            <h4 className="text-sm text-[#737373] font-[400]">
              Featured Products
            </h4>
            <h3 className="text-2xl text-[#252B42] font-[700]">
              BESTSELLER PRODUCTS
            </h3>
            <p className="text-[#737373] text-sm ">
              Problems trying to resolve between
            </p>
          </div>
          {/* hero items  */}
          {/* main container  */}
          <div className="flex flex-col gap-20">
            {/* items container 1  */}
            <div className=" w-[100%] flex gap-[30px]  justify-center items-center">
              {/* item1  */}
              <div className="flex flex-col gap-4 w-[239px] h-[427px]">
                <Image
                  src="/Images/hero6.jpeg"
                  alt=""
                  width={239}
                  height={427}
                />
                <div className=" flex flex-col items-center gap-3">
                  <h3 className="text-[#252B42] font-[700]">Graphic Design</h3>
                  <h4 className="text-[#737373] text-sm font-[700]">
                    English Department
                  </h4>
                  <p>
                    <span className="text-[#BDBDBD] font-[700]">$16.6</span>{" "}
                    <span className="text-[#23856D] font-[700]">$6.48</span>
                  </p>
                </div>
                <Circle />
              </div>
              {/* item2  */}
              <div className="flex flex-col gap-4 w-[239px] h-[427px]">
                <Image
                  src="/Images/hero7.jpeg"
                  alt=""
                  width={239}
                  height={427}
                />
                <div className=" flex flex-col items-center gap-3">
                  <h3 className="text-[#252B42] font-[700]">Graphic Design</h3>
                  <h4 className="text-[#737373] text-sm font-[700]">
                    English Department
                  </h4>
                  <p>
                    <span className="text-[#BDBDBD] font-[700]">$16.6</span>{" "}
                    <span className="text-[#23856D] font-[700]">$6.48</span>
                  </p>
                </div>
                <Circle />
              </div>
              {/* item3  */}
              <div className="flex flex-col gap-4 w-[239px] h-[427px]">
                <Image
                  src="/Images/hero8.jpeg"
                  alt=""
                  width={239}
                  height={427}
                />
                <div className=" flex flex-col items-center gap-3">
                  <h3 className="text-[#252B42] font-[700]">Graphic Design</h3>
                  <h4 className="text-[#737373] text-sm font-[700] ">
                    English Department
                  </h4>
                  <p>
                    <span className="text-[#BDBDBD] font-[700]">$16.6</span>{" "}
                    <span className="text-[#23856D] font-[700]">$6.48</span>
                  </p>
                </div>
                <Circle />
              </div>

              {/* item4  */}
              <div className="flex flex-col gap-4 w-[239px] h-[427px]">
                <Image
                  src="/Images/hero9.jpeg"
                  alt=""
                  width={239}
                  height={427}
                />
                <div className=" flex flex-col items-center gap-3">
                  <h3 className="text-[#252B42] font-[700]">Graphic Design</h3>
                  <h4 className="text-[#737373] text-sm font-[700]">
                    English Department
                  </h4>
                  <p>
                    <span className="text-[#BDBDBD] font-[700]">$16.6</span>{" "}
                    <span className="text-[#23856D] font-[700]">$6.48</span>
                  </p>
                </div>
                <Circle />
              </div>
            </div>
            {/* container 2  */}
            <div className="flex gap-[30px] justify-center">
              {/* item5  */}
              <div className="flex flex-col gap-4 w-[239px] h-[427px]">
                <Image
                  src="/Images/hero10.jpeg"
                  alt=""
                  width={239}
                  height={427}
                />
                <div className=" flex flex-col items-center gap-3">
                  <h3 className="text-[#252B42] font-[700]">Graphic Design</h3>
                  <h4 className="text-[#737373] text-sm font-[700]">
                    English Department
                  </h4>
                  <p>
                    <span className="text-[#BDBDBD] font-[700]">$16.6</span>{" "}
                    <span className="font-[700] text-[#23856D]">$6.48</span>
                  </p>
                </div>
                <Circle />
              </div>
              {/* item6  */}
              <div className="flex flex-col gap-4 w-[239px] h-[427px]">
                <Image
                  src="/Images/hero11.jpeg"
                  alt=""
                  width={239}
                  height={427}
                />
                <div className=" flex flex-col items-center gap-3">
                  <h3 className="text-[#252B42] font-[700]">Graphic Design</h3>
                  <h4 className="text-[#737373] text-sm font-[700]">
                    English Department
                  </h4>
                  <p>
                    <span className="text-[#BDBDBD] font-[700]">$16.6</span>{" "}
                    <span className="text-[#23856D] font-[700]">$6.48</span>
                  </p>
                </div>
                <Circle />
              </div>
              {/* item7  */}
              <div className="flex flex-col gap-4 w-[239px] h-[427px]">
                <Image
                  src="/Images/hero12.jpeg"
                  alt=""
                  width={239}
                  height={427}
                />
                <div className=" flex flex-col items-center gap-3">
                  <h3 className="text-[#252B42] font-[700]">Graphic Design</h3>
                  <h4 className="text-[#737373] text-sm font-[700]">
                    English Department
                  </h4>
                  <p>
                    <span className="text-[#BDBDBD] font-[700]">$16.6</span>{" "}
                    <span className="text-[#23856D] font-[700]">$6.48</span>
                  </p>
                </div>
                <Circle />
              </div>
              {/* item8 */}
              <div className="flex flex-col gap-4 w-[239px] h-[427px]">
                <Image
                  src="/Images/hero13.jpeg"
                  alt=""
                  width={239}
                  height={427}
                />
                <div className=" flex flex-col items-center gap-3">
                  <h3 className="text-[#252B42] font-[700]">Graphic Design</h3>
                  <h4 className="text-[#737373] text-sm font-[700]">
                    English Department
                  </h4>
                  <p>
                    <span className="text-[#BDBDBD] font-[700]">$16.6</span>{" "}
                    <span className="font-[700] text-[#23856D]">$6.48</span>
                  </p>
                </div>
                <Circle />
              </div>
            </div>
            {/*closing tag of container2*/}
            {/*closing main container*/}{" "}
          </div>
        </div>
      </div>
      <HeroBottom />
    </>
  );
}
