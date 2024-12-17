import Link from 'next/link';
import React from 'react';

type CarCardProps = {
  name: string;
  type: string;
  price: number;
  originalPrice?: number;
  fuelCapacity: string;
  transmission: string;
  seats: string;
  imageUrl: string;
  blur:string;
  filled:string
};

const CarCard: React.FC<CarCardProps> = ({
  name,
  type,
  price,
  fuelCapacity,
  transmission,
  seats,
  imageUrl,
  blur,
  filled,
}) => {
  
  return (
    <div className=" max-md:w-72 bg-white w-64 p-5 mb-1 rounded-lg shadow-md flex-shrink-0 ">
     
      <div className="mt-2">
        <h2 className="text-sm font-semibold flex  items-center justify-between">{name} <img src={filled} alt="" className='h-4' /></h2>
        <p className="text-sm text-gray-500">{type}</p>
        <img src={imageUrl} alt={name} className="mt-10 mb-10" />
        <img src={blur} alt={name} className="mt-[-80px] " />
        <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
        
          <span className='flex gap-1'><img src="/feul.png" alt="" className='h-4' />{fuelCapacity}</span>
          <span className='flex gap-1'><img src="/manual.png" alt="" className='h-4' />{transmission}</span>
          <span className='flex gap-1'><img src="/people.png" alt="" className='h-4' />{seats} People</span>
        </div>
        <div className="flex items-center justify-between mt-2 gap-6">
          <p className="text-gray-700">
            <span className="flex items-center font-bold text-xl ">${price.toFixed(2)}</span>
           
          </p>
          
          <button 
            className="bg-blue-500 text-white px-2 py-2 text-sm rounded-md hover:bg-blue-600"
          >
            <Link  href={"/details"}>Rent Now</Link>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default CarCard;