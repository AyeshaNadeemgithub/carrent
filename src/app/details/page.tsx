import React from "react";
import Image from "next/image";
import Link from "next/link";
import SideBar from "../components/SideBar";
import Reviews from "../components/Reviews";
import { popular_cars } from "@/data/cars";
import { cars } from "@/data/cars";
import CarCard from "../components/CarCard";

export default function page() {
  return (
    <div className="w-full flex">
            <div className="max-sm:hidden"><SideBar /></div>

      <div className="sec w-full sm:w-[75%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        <section className=" w-full flex flex-col md:flex-row gap-5  items-center justify-around">
          <div className="first flex flex-col gap-4 w-full  lg:max-w-[470px]  lg:max-h-[508px]">
            <div>
              <Image src={"/View.png"} alt="" width={492} height={360} />
            </div>
            <div className=" flex items-center justify-between gap-2 lg:gap-0">
              <Image src={"/View 1.png"} alt="" width={148} height={124} />
              <Image src={"/View 2.png"} alt="" width={148} height={124} />
              <Image src={"/View 3.png"} alt="" width={148} height={124} />
            </div>
          </div>

          <div className="flex bg-white max-md:h-[390px] h-[480px] w-full  lg:max-w-[492px] lg:max-h-[508px]  justify-between rounded-xl shadow-md">
            <div className="w-full h-full  p-7 ">
              {/* Title Section */}
              <div className="flex justify-between items-center">
                <h1 className="max-md:text-xl text-3xl font-semibold">Nisaan GT - R</h1>
                <Image src="/filled.png" alt="" width={25} height={25}/>
              </div>

              {/* Description */}
              <p className="max-md:text-sm text-gray-500 text-xl mt-6">
              NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
              </p>

              {/* Specifications */}
              <div className="grid grid-cols-2 gap-4 mt-6 gap-y-4 gap-x-5 max-md:text-sm text-lg text-gray-600 py-5 ">
                <div>
                  <span className="font-medium">Type Car:</span> Sport
                </div>
                <div>
                  <span className="font-medium">Capacity:</span> 2 Person
                </div>
                <div>
                  <span className="font-medium">Steering:</span> Manual
                </div>
                <div>
                  <span className="font-medium">Gasoline:</span> 70L
                </div>
              </div>

              {/* Price and Button */}
              <div className="flex justify-between items-center mt-[40px]">
                <div>
                  <h1 className="font-bold text-lg sm:text-xl lg:text-2xl flex flex-col">
                    $80.00 /{" "}
                    <span className="text-gray-500 text-sm lg:text-base line-through ">
                       $100.00
                    </span>
                  </h1>
                </div>
                <Link href="/payment" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                  Rent Now
                </Link>
              </div>

              {/* Rating */}
              
            </div>
          </div>
        </section>

        <Reviews />

        <div className="bg-transparent p-3 ">
          <div className="first w-full flex items-center justify-between mb-4">
            <h1 className="text-gray-500 ">Popular Car</h1>
            <Link href={"/categories"}>
              <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
                View All
              </h1>
            </Link>
          </div>

          <div className="flex max-md:gap-6 max-sm:overflow-x-auto sm:grid sm:grid-cols-1 lg:grid-cols-3 ">
            {popular_cars.slice(0, 3).map((car, index) => (
              <CarCard key={index} {...car} />
            ))}
          </div>
        </div>

        <div className="bg-transparent p-3">
          <h1 className=" text-gray-500 mb-4">Recommendation Car</h1>
          <div className="flex max-md:gap-6 max-sm:overflow-x-auto sm:grid sm:grid-cols-1 lg:grid-cols-3">
            {cars.slice(0, 3).map((car, index) => (
              <CarCard key={index} {...car} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
