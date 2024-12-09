import React from "react"
import Image from "next/image"

export default function AboutContent() {
  return (
   <>
    {/* 5th div */}
    <div className=" w-[100%] flex flex-col gap-24 mt-20 ">
          <div className="w-[100%]  flex flex-col items-center gap-2">
            <h1 className="text-4xl text-[#252B42] font-[700]">
              Meet Our Team{" "}
            </h1>
            <p className="w-[420px] text-sm text-center">
              Lorem ipsum, dolor sit amet elit. Lorem ipsum dolor sit Lorem,
              ipsum dolor. ametest officia minus.
            </p>
          </div>
          {/* image and content  */}
          {/* container */}
          <div className="flex w-[100%] justify-center">
            {/* person 1 */}
            <div className="w-[316px] h-[383px]">
              <Image
                src={"/Images/aboutPerson1.jpeg"}
                alt=""
                width={290}
                height={231}
              />
              <div className=" flex flex-col items-center gap-2 mt-2">
                <h4 className="font-[700] text-[#252B42]">Username</h4>
                <h5 className="font-[700] text-sm text-[#737373]">
                  Professtion
                </h5>
                <ul className="flex gap-2 ">
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
                      src={"/Images/instagram.png"}
                      alt=""
                      width={16}
                      height={16}
                    />
                  </li>

                  <li>
                    <Image
                      src={"/Images/twitter2.png"}
                      alt=""
                      width={16}
                      height={16}
                    />
                  </li>
                </ul>
              </div>
            </div>
            {/* person 2 */}
            <div className="w-[316px] h-[383px]">
              <Image
                src={"/Images/aboutPerson2.jpeg"}
                alt=""
                width={290}
                height={231}
              />
              <div className=" flex flex-col items-center gap-2 mt-2">
                <h4 className="font-[700] text-[#252B42]">Username</h4>
                <h5 className="font-[700] text-sm text-[#737373]">
                  Professtion
                </h5>
                <ul className="flex gap-2 ">
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
                      src={"/Images/instagram.png"}
                      alt=""
                      width={16}
                      height={16}
                    />
                  </li>

                  <li>
                    <Image
                      src={"/Images/twitter2.png"}
                      alt=""
                      width={16}
                      height={16}
                    />
                  </li>
                </ul>
              </div>
            </div>
            {/* person 3 */}
            <div className="w-[316px] h-[383px]">
              <Image
                src={"/Images/aboutPerson3.jpeg"}
                alt=""
                width={290}
                height={231}
              />
              <div className=" flex flex-col items-center gap-2 mt-2">
                <h4 className="font-[700] text-[#252B42]">Username</h4>
                <h5 className="font-[700] text-sm text-[#737373]">
                  Professtion
                </h5>
                <ul className="flex gap-2">
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
                      src={"/Images/instagram.png"}
                      alt=""
                      width={16}
                      height={16}
                    />
                  </li>

                  <li>
                    <Image
                      src={"/Images/twitter2.png"}
                      alt=""
                      width={16}
                      height={16}
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
   </>
  )
}
