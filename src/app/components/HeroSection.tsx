import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section className="max-md:p-[-3%]">
   
  <div className="flex flex-col md:flex-row items-center justify-center gap-7 mt-17 sm:mt-[-10px] sm:mb-[15px] ml-0 sm:ml-[35px]">
    <img
      src="/hero.png"
      alt=""
      className="h-54 md:ml-[-10px] sm:h-70 lg:h-72 min-md:hidden w-auto sm:mb-0"
    />
    <img
      src="/hero1.png"
      alt=""
      className="hidden md:flex sm:h-72 lg:h-72 w-auto"
    />
  </div>


 

      <div className="flex flex-col  md:flex-row items-center justify-center  sm:mb-[15px] ml-0 sm:ml-[35px] md:flex ">
        <Image
          src={"/Pick - Up.png"}
          alt=""
          width={502}
          height={132}
          className="max-md:w-[80vh] mt-7"
        />
        <img src="/change.png" alt="" className="hidden sm:flex h-24 cursor-pointer md:mt-7" />
        <Image
          src={"/Drop - Off.png"}
          alt=""
          width={502}
          height={32}
          className="max-md:w-[80vh] md:mt-7"
        />
      </div>
    </section>
  );
};

export default HeroSection;
