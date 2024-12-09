import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="bg-[#252B42] h-[58px] p-2">
        <div className="bg-[#252B42] h-12 w-[100%] flex  justify-between  text-white px-12">
          {/* div 1 */}
          {/* inner 1 */}
          <div className="flex items-center gap-2 h-12 ">
            <div className="flex gap-2 items-center">
              <span>
                {" "}
                <Image
                  src={"/Images/phone.png"}
                  alt="phone"
                  width={14}
                  height={14}
                />
              </span>
              <p className="text-sm font-[700]">(225) 555-0118</p>
            </div>
            {/* inner 2 */}

            <div className="flex gap-5 items-center ">
              <span className="relative left-3 top-0.5">
                {" "}
                <Image
                  src={"/Images/envelop.png"}
                  alt="phone"
                  width={14}
                  height={16}
                />
              </span>
              <p className="text-sm font-[700]">miclleli rivera@example.com</p>
            </div>
          </div>

          {/* 2nd div */}
          <div className="flex items-center">
            <p className="text-sm font-[700]">
              Follow Us and get a chance to win 80% off
            </p>
          </div>
          {/* 3rd div */}
          <div className="flex items-center gap-3">
            <p className="text-sm font-[700]">Follow Us : </p>
            <ul className="flex gap-3">
              <li>
                <Image
                  src={"/Images/insta.png"}
                  alt=""
                  width={16}
                  height={16}
                />
              </li>
              <li>
                <Image
                  src={"/Images/youtube.png"}
                  alt=""
                  width={16}
                  height={16}
                />
              </li>
              <li>
                <Image
                  src={"/Images/facebook.png"}
                  alt=""
                  width={16}
                  height={16}
                />
              </li>
              <li>
                <Image
                  src={"/Images/twitter.png"}
                  alt=""
                  width={16}
                  height={16}
                />
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/* ------------------------------------ Navbar  */}
      <nav>
        {/* main  div*/}
        <div className="w-[100%] h-14 flex items-center my-2 gap-16">
          {/* 1st div  */}
          <div className="w-[187px]  pl-[45px]">
            <h1 className="text-2xl leading-8 text-[#252B42] font-[700]">
              Bandage
            </h1>
          </div>
          {/* 2nd div  */}
          <div className="pt-2 mr-6 w-[100%] flex justify-between ">
            <ul className="flex gap-6 items-center font-Montserrat">
              <li className="font-[700]  text-[#737373]">
                <Link href="/">Home</Link>
              </li>
              <li className="font-[700] text-[#737373]">
                <Link href="#">
                  <select className="">
                    <option>Shop</option>
                  </select>
                </Link>
              </li>
              <li className="font-[700] text-[#737373]">
                <Link href="about">About</Link>
              </li>
              <li className="font-[700]  text-[#737373]">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="font-[700] text-[#737373]">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="font-[700]  text-[#737373]">
                <Link href="/pages">Pages</Link>
              </li>
            </ul>
            <div className="flex items-center gap-3">
              <div className="flex gap-3">
                <Image
                  src={"/Images/person.png"}
                  alt=""
                  width={14}
                  height={14}
                />
                <p className="font-[700] text-sm text-[#23A6F0]">
                  Login / Register
                </p>
              </div>
              <ul className="flex items-center">
                <li>
                  <Image
                    src="/Images/glass.png"
                    alt=""
                    width={46}
                    height={46}
                  />
                </li>
                <li className="w-14 h-14 flex items-center">
                  <Image src="/Images/cart.png" alt="" width={56} height={56} />
                </li>
                <li className="w-14 h-14 flex items-center">
                  <Image
                    src="/Images/heart.png"
                    alt=""
                    width={56}
                    height={56}
                  />
                </li>
              </ul>
            </div>
          </div>
          {/* closing div */}
        </div>
      </nav>
    </>
  );
}
