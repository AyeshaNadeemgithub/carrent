import React from "react";

type CarDetailsProps = {
  name: string;
  type: string;
  capacity: string;
  transmission: string;
  fuelCapacity: string;
  price: number;
  originalPrice?: number;
  description: string;
  mainImage: string;
  images: string[];
  rating: number;
  reviews: number;
};

const CarDetailsCard: React.FC<CarDetailsProps> = ({
  name,
  type,
  capacity,
  transmission,
  fuelCapacity,
  price,
  originalPrice,
  description,
  mainImage,
  images,
  rating,
  reviews,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-start bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto gap-6">
      {/* Left Section */}
      <div className="w-full md:w-1/2">
        <div className="bg-gray-100 rounded-lg p-2">
          <img src={mainImage} alt={name} className="w-full rounded-lg" />
        </div>
        <div className="flex mt-4 gap-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-20 h-16 object-cover rounded-lg border hover:border-blue-500"
            />
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2">
        {/* Title Section */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">{name}</h1>
          <button className="text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-2">{description}</p>

        {/* Specifications */}
        <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-gray-600">
          <div>
            <span className="font-medium">Type Car:</span> {type}
          </div>
          <div>
            <span className="font-medium">Capacity:</span> {capacity}
          </div>
          <div>
            <span className="font-medium">Steering:</span> {transmission}
          </div>
          <div>
            <span className="font-medium">Gasoline:</span> {fuelCapacity}
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex justify-between items-center mt-6">
          <div>
            <p className="text-blue-600 font-bold text-xl">${price.toFixed(2)}/days</p>
            {originalPrice && (
              <p className="text-gray-500 line-through text-sm">${originalPrice.toFixed(2)}</p>
            )}
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            Rent Now
          </button>
        </div>

        {/* Rating */}
        <div className="mt-4 flex items-center text-yellow-500">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              fill={index < rating ? "currentColor" : "none"}
              stroke="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
          <span className="ml-2 text-gray-600 text-sm">{reviews} Reviewer</span>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsCard;
