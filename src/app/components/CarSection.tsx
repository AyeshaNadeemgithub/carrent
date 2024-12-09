import Link from "next/link"
import CarCard from "./CarCard"
import { popular_cars } from "@/data/cars"
import { cars } from "@/data/cars"

const CarSection = () => {
  return (
    <>
    <div className="bg-gray-100 p-6">
     <div className="first w-full flex items-center justify-between mb-4">
          <h1 className="text-gray-500 ">Popular Car</h1>
          <Link href={"/categories"}>
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
              View All
            </h1>
          </Link>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {popular_cars.map((car, index) => (
          <CarCard key={index} {...car} />
        ))}
      </div>
    </div>
      
     <div className="bg-gray-100 p-6">
      <h1 className=" text-gray-500 mb-4">Recommendation Car</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car, index) => (
          <CarCard key={index} {...car} />
        ))}
      </div>
    </div>
    </>
  )
}

export default CarSection
