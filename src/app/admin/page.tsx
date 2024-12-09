import React from "react";
import Image from "next/image";
import DashBoard from "../components/Dashboard";
export default function Page() {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <DashBoard />
      <div className="flex">
        <div className="sec hidden md:flex w-full md:w-[75%] lg:w-[80%] bg-[#f6f7f9] p-4 sm:p-6 gap-7 flex-nowrap justify-center">
          <Image
            src={"/Details Rental.png"}
            alt="Details Rental"
            width={534}
            height={836}
            className=" w-full md:w-[45%] lg:w-[534px]"
          />
        </div>
        <div className="flex flex-col items-center mt-10  mr-14">
          <Image src={"/chart.png"} alt="" width={550} height={900} />
          <Image src={"/recent.png"} alt="" width={550} height={900} className="mt-10"/>
        </div>
      </div>
    </div>
  );
}
