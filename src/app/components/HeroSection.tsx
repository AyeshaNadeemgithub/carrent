import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section>
    <div className="flex gap-7 mt-[-20px] mb-[45px] ml-[35px]">
      <img src="/hero.png" alt="" className="h-72 " />
      <img src="/hero1.png" alt="" className="h-72 w-auto" />
    </div>
 

      <div className=" hidden md:flex justify-between ">
        <Image
          src={"/Pick - Up.png"}
          alt=""
          width={502}
          height={132}
        />
        <img src="/change.png" alt="" className="h-24 cursor-pointer" />
        <Image
          src={"/Drop - Off.png"}
          alt=""
          width={502}
          height={32}
          
        />
      </div>
    </section>
  );
};

export default HeroSection;
