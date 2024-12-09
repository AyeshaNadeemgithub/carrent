import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cars } from "@/data/cars";
import { popular_cars } from "@/data/cars";
import CarCard from "../components/CarCard";
import SideBar from "../components/SideBar";

export default function Page() {
  return (
    <div className="w-full flex">
<SideBar/>
      <div className="sec w-full sm:w-[80%] bg-[#f6f7f9] p-4 sm:p-6  flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
      <div className="flex">
        <Image
          src={"/Pick - Up.png"}
          alt=""
          width={450}
          height={130}
        />
        <img src="/updown.png" alt="" className="h-10 mt-8 p-2 bg-blue-600 rounded-md z-10 text-white cursor-pointer border shadow-lg " />
        <Image
          src={"/Drop - Off.png"}
          alt=""
          width={450}
          height={32}
          
        />
      </div>

        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
            {popular_cars.map((car, index) => (
              <CarCard key={index} {...car} />
            ))}
            {cars.map((car, index) => (
              <CarCard key={index} {...car} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
