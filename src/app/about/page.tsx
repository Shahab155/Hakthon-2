import React from "react";
import Image from "next/image";
import AboutContent from "./about";

export default function About() {
  return (
    <>
      <main>
        <div className="w-[100%] h-[729px] ">
          <div className="py-[112px] w-[1050px] h-[545px] relative left-[195px] top-[50px] ">
            <div className="flex justify-between w-[1044px]  ">
              {/* div 1 */}
              <div className="flex flex-col gap-4">
                <h5 className="font-[700] text-[#252B42] text-sm">
                  About company
                </h5>
                <h1 className="text-6xl tracking-[0.2px] font-[700] text-[#252B42]">
                  ABOUT US
                </h1>
                <h4 className=" text-[#737373] font-[500] w-[280px] text-sm">
                  We know how large objects will act, but things on a small
                  scale.
                </h4>
                <div className="text-sm w-[195px] py-4 px-8 rounded-sm bg-[#23A6F0] text-white font-[Montserrat]">
                  <button>Get Quote Now</button>
                </div>
              </div>
              <div className="absolute top-[5px] right-[11px]">
                <Image
                  src="/Images/about1.png"
                  alt="shoping girl"
                  width={375}
                  height={419}
                />
              </div>
            </div>
          </div>
          {/* --------------------------------------------- */}
          {/* 2nd div  */}
          <div className="w-[100%] h-[236px] flex  justify-center items-center">
            {/* container */}
            <div className="w-[90%]  h-[236px] flex justify-evenly items-center ">
              <div className="flex flex-col gap-3">
                <h3 className="text-sm text-[#E74040] font-[400]">
                  Problem trying
                </h3>
                <h1 className="text-xl font-[700] leading-[32px] text-[#252B42] w-[320px]">
                  {" "}
                  Morem upsum dolor sit, amet consectetur adipisicing elit.
                  laborum!.
                </h1>
              </div>
              <p className="w-[529px] text-[#737373] text-sm font-[400] tracking-[0.2px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
                ullam sed officiis Lorem ipsum, dolor sit amet consectetur
                adipisicing.
              </p>
            </div>
          </div>

          {/* 2nd div closing  */}
        </div>

        {/* --------------------------------------------------------- */}
        {/* 3rd about div */}
        <div className="w-[100%] h-[264px] mt-20">
          {/* items container */}
          <div className=" flex justify-evenly items-center px-12">
            {/* item 1 */}
            <div className="flex flex-col gap-2">
              <h1 className="text-center text-5xl font-[700] text-[#252B42]">
                15K
              </h1>
              <p className="font-[700] text-center text-[#737373]">
                Happy Customers
              </p>
            </div>

            {/* item 1 */}
            <div className="flex flex-col gap-2">
              <h1 className="text-center text-5xl font-[700] text-[#252B42]">
                150K
              </h1>
              <p className="font-[700] text-center text-[#737373]">
                Monthly Visitors
              </p>
            </div>
            {/* item 1 */}
            <div className="flex flex-col gap-2">
              <h1 className="text-center text-5xl font-[700] text-[#252B42]">
                15
              </h1>
              <p className="font-[700] text-center text-[#737373]">
                Countries Worldwide
              </p>
            </div>
            {/* item 1 */}
            <div className="flex flex-col gap-2">
              <h1 className="text-center text-5xl font-[700] text-[#252B42]">
                100+
              </h1>
              <p className="font-[700] text-center text-[#737373]">
                Top Partners
              </p>
            </div>

            {/* 3rd div closing  */}
          </div>
        </div>

        {/* -------------------4rth div ------------------ */}
        <div className="w-[100%] flex justify-center ">
          <div>
            
            <Image
              src={"/Images/aboutVideo.png"}
              alt=""
              width={900}
              height={500}
            />
          </div>
        </div>

       <AboutContent/>
        {/* 6th div  */}
        <div className="w-[100%]  flex flex-col items-center gap-6 ">
            <h1 className="text-4xl text-[#252B42] font-[700]">
              Big Companies Are Here{" "}
            </h1>
            <p className="w-[420px] text-sm text-center">
              Lorem ipsum, dolor sit amet elit. Lorem ipsum dolor sit Lorem,
              ipsum dolor. ametest officia minus.
            </p>
            <div className="w-[100%] mt-20 flex justify-center gap-8">
         <Image src="/Images/logo1.png" alt="" width={153} height={34}/>
         <Image src="/Images/logo2.png" alt="" width={146} height={59}/>
         <Image src="/Images/logo3.png" alt="" width={152} height={75}/>
         <Image src="/Images/logo4.png" alt="" width={151} height={42}/>
         <Image src="/Images/logo5.png" alt="" width={151} height={62}/>
         <Image src="/Images/logo6.png" alt="" width={151} height={72}/>

      </div>
          </div>
{/* 7th div */}

<div className="w-[100%] bg-[#2A7CC7]  my-20 flex  justify-evenly">
<div className="flex flex-col justify-center pl-[100px] h-[600px] gap-5 w-[50%] bg-[#2A7CC7]">
                <h5 className="font-[700] text-white  text-sm">
                  Work With Us
                </h5>
                <h1 className="text-white text-4xl tracking-[0.2px] font-[700] ">
                  Now Lets Grow Yours
                </h1>
                <h4 className=" text-white font-[500] w-[280px] text-sm">
                  We know how large objects will act, but things on a small
                  scale.
                </h4>
                <div className="text-white border text-sm  text-center w-[150px] py-4 px-6 rounded-sm font-[Montserrat]">
                  <button>Button</button>
                </div>
              </div>
              <Image src="/Images/aboutLast.png" alt="" width={500} height={636}/>
</div>
      </main>
    </>
  );
}
