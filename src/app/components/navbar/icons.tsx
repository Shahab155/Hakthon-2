import React from "react";
import Image from "next/image";

export default function Icons() {
  return (
    <>
      <ul className="flex gap-3">
        <li>
          <Image src={"/Images/insta.png"} alt="" width={16} height={16} />
        </li>
        <li>
          <Image src={"/Images/youtube.png"} alt="" width={16} height={16} />
        </li>
        <li>
          <Image src={"/Images/facebook.png"} alt="" width={16} height={16} />
        </li>
        <li>
          <Image src={"/Images/twitter.png"} alt="" width={16} height={16} />
        </li>
      </ul>
    </>
  );
}
