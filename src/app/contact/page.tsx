import React from "react";
import Image from "next/image";


export default function Contact() {
  return (
    <>
      <main>
        {/* container */}
        <div className="w-[80%] h-[742px] pl-[195px] mt-10 flex justify-evenly">
          <div className="flex flex-col gap-4 pt-[100px]">
            <h5 className="font-[700] text-[#252B42] text-sm">Contact Us</h5>
            <h1 className="w-[378px] text-6xl tracking-[0.2px] font-[700] text-[#252B42]">
              Get In Touch today!
            </h1>
            <h4 className=" text-[#737373] font-[500] w-[280px] text-sm">
              We know how large objects will act, but things on a small scale.
            </h4>
            <p className="font-[700] text-[#252B42]">Phone : +451 215 215</p>
            <p className="font-[700] text-[#252B42]">Fax : +451 215 215</p>
          </div>
          <Image src="/Images/contact1.png" alt="" width={800} height={742} />
        </div>

        {/* 2nd div of contact  */}
        <div className="w-[100%] h-[841px] py-[112px] flex flex-col gap-28">
          <div className="flex flex-col items-center gap-2">
            <h6 className="text-[#252B42] font-[700]">Visit Our Office</h6>
            <h2 className="w-[450px] text-3xl text-center text-[#252B42] font-[700] tracking-[0.2px] ">
              We help Small businesses with big ideas
            </h2>
          </div>
          {/* items  */}
          <div className="flex justify-center items-center">
            {/* item1  */}
            <div className="w-[328px] h-[343px] flex flex-col gap-5 items-center ">
              <Image
                src="/Images/contactPhone.png"
                alt=""
                width={72}
                height={72}
              />
              <p className="text-sm text-[#252B42] font-[700]">
                georgia.young@exmaple.com
              </p>
              <p className="text-sm text-[#252B42] font-[700]">
                georgia.young@ple.com
              </p>
              <h4 className="font-[900] text-[#252B42]">Get Support</h4>
              <button className="rounded-[37px] border border-[#23A6F0] text-[#23A6F0] px-8 py-4 text-center">
                Submit Request
              </button>
            </div>
            {/* item2  */}
            <div className="w-[328px] h-[400px] flex flex-col gap-5 pt-8 items-center  bg-[#252B42] ">
              <Image src="/Images/location.png" alt="" width={72} height={72} />
              <p className="text-sm text-white font-[700]">
                georgia.young@exmaple.com
              </p>
              <p className="text-sm text-white font-[700]">
                georgia.young@ple.com
              </p>
              <h4 className="font-[900] text-white">Get Support</h4>
              <button className="rounded-[37px] border border-[#23A6F0] text-[#23A6F0] px-8 py-4 text-center">
                Submit Request
              </button>
            </div>
            {/* item3  */}
            <div className="w-[328px] h-[343px] flex flex-col gap-5 items-center  ">
              <Image
                src="/Images/contactEn.png"
                alt=""
                width={72}
                height={72}
              />
              <p className="text-sm text-[#252B42] font-[700]">
                georgia.young@exmaple.com
              </p>
              <p className="text-sm text-[#252B42] font-[700]">
                georgia.young@ple.com
              </p>
              <h4 className="font-[900] text-[#252B42]">Get Support</h4>
              <button className="rounded-[37px] border border-[#b9cfdb] text-[#23A6F0] px-8 py-4 text-center">
                Submit Request
              </button>
            </div>
          </div>
        </div>

        {/* last div  */}
        <div className="h-[348px] flex flex-col items-center">
          <div className="w-[72px] h-[28px]">
            <Image src="/Images/arrow.png" alt="" width={72} height={28} />
          </div>
          <div className="mt-16 flex flex-col items-center gap-4">
            <h6 className="font-[700]  text-[#252B42]">
              We Cant Wait to Meet You
            </h6>
            <h1 className="text-5xl text-[#252B42] font-[700]">Lets Talk</h1>
            <button className="mt-2 w-[186px] h-[52px] px-10 py-4 bg-[#23A6F0] rounded-md text-sm font-[700] text-white">
              Try it free now
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
