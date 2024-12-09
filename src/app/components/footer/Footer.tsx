import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="w-[100%] h-[400px] ">
        {/* container */}

        <div className=" flex flex-col items-center justify-center">
          <div className="h-[142px] w-[100%] border-black relative left-[190px]">
            <div className=" w-[1050px] flex justify-between items-center  h-[138px]">
              <h1 className="text-2xl leading-8 text-[#252B42] font-[700]">
                Bandage
              </h1>
              <ul className="flex gap-5 pr-36">
                <li>
                  <Image
                    src={"/Images/facebook.png"}
                    alt=""
                    width={24}
                    height={24}
                  />
                </li>
                <li>
                  <Image
                    src={"/Images/instagram.png"}
                    alt=""
                    width={24}
                    height={24}
                  />
                </li>

                <li>
                  <Image
                    src={"/Images/twitter2.png"}
                    alt=""
                    width={24}
                    height={19}
                  />
                </li>
              </ul>
            </div>
          </div>
          {/* 2nd div container outer */}
          <div className="w-[100%] h-[272px] ">
            <div className="w-[1050px] h-[272px]  relative left-[195px] top-[40px]">
              {/* 3rd div  */}
              <div className="w-[1041px] h-[170px] flex gap-[50px] items-center">
                {/* footer item 1 */}
                <div className=" flex flex-col gap-6">
                  <h5 className="font-[700] leading-6 tracking-[0.1px] text-[#252B42]">
                    Company Info
                  </h5>
                  <ul className="flex flex-col gap-5 font-[500] text-sm text-[#737373]">
                    <li>About</li>
                    <li>Carrier</li>
                    <li>We are hiring</li>
                    <li>Blog</li>
                  </ul>
                </div>
                {/* footer item 2 */}
                <div className="flex flex-col gap-6">
                  <h5 className="font-[700] leading-6 tracking-[0.1px] text-[#252B42]">
                    Legal
                  </h5>
                  <ul className="flex flex-col gap-5 font-[500] text-sm text-[#737373]">
                    <li>About Us</li>
                    <li>Carrier</li>
                    <li>We are hiring</li>
                    <li>Blog</li>
                  </ul>
                </div>
                {/* footer item 3 */}
                <div className="flex flex-col gap-6">
                  <h5 className="font-[700] leading-6 tracking-[0.1px] text-[#252B42]">
                    Features
                  </h5>
                  <ul className="flex flex-col gap-5 font-[500] text-sm text-[#737373]">
                    <li>Bussiness Marketing</li>
                    <li>User Analytic</li>
                    <li>Liver Chat</li>
                    <li>Unlimmited Support</li>
                  </ul>
                </div>
                {/* footer item 4 */}
                <div className="flex flex-col gap-6">
                  <h5 className="font-[700] leading-6 tracking-[0.1px] text-[#252B42]">
                    Resources
                  </h5>
                  <ul className="flex flex-col gap-5 font-[500] text-sm text-[#737373]">
                    <li>IOS Andriod</li>
                    <li>Watch a Demo</li>
                    <li>Customers</li>
                    <li>API</li>
                  </ul>
                </div>
                {/* footer item 5 */}
                <div className="flex flex-col gap-6 h-[170px]">
                  <h5 className="font-[700] leading-6 tracking-[0.1px] text-[#252B42]">
                    Get In Touch
                  </h5>
                  <div className="w-[321px] height-[58px] flex  font-[500] text-sm text-[#737373]">
                    <label className="flex items-center justify-center text-[#E6E6E6] rounded-[5px]">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                      />
                    </label>
                    <label className="w-[117px] h-[58px] bg-[#23A6F0] flex items-center justify-center text-[#E6E6E6] rounded-[2px]">
                      <button>Subscribe</button>
                    </label>
                  </div>
                  <p className="text-[12px] leading-6 tracking-[0.2px] text-[#737373] font-[400]">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* List end */}
          {/* ------------------------------------------------------- */}
          {/* 3rd div of footer */}
          <div className="w-[100%]  pt-3">
            <div className="w-[1050px] h-[170px]  relative left-[195px] ">
              <p className="leading-6 font-[500] text-sm tracking-[0.2px] text-[#737373]">
                Made with love By Finland All Right Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
