import React from "react";

const RentalDashboard = () => {
  return (
    <div className="min-h-screen p-4 w-full bg-gray-100 flex flex-col lg:flex-row gap-6 font-sans">
      {/* Left Section */}
      <div className="bg-white shadow-md rounded-lg p-6 flex-1">
        <h1 className="font-semibold text-gray-700 mb-4">Details Rental</h1>
        {/* Map and Car Details */}
        <div className="mb-6">
          <div className="h-40 bg-gray-200 rounded-md mb-4">
            {/* Replace this with an actual map/image */}
            <img
              src="/map.png"
              alt="/map.png"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="flex items-center gap-4 mb-4">
            <img src="/rental.png" alt="Car Thumbnail" className="w-30 h-20" />
            <div>
              <h3 className="text-2xl font-bold">Nissan GT - R</h3>

              <p className="text-gray-500 text-sm">Sports car </p>
            </div>
          </div>
        </div>

        {/* Pick-Up and Drop-Off Details */}
        {/* <div className="border-t pt-4 space-y-4 text-gray-600">
          <div className="flex justify-between">
            <div>
              <p className="font-semibold">Pick - Up</p>
              <p className="text-sm">Location: Kota Semarang</p>
              <p className="text-sm">Date: 20 July 2022</p>
              <p className="text-sm">Time: 07:00</p>
            </div>
            <div>
              <p className="font-semibold">Drop - Off</p>
              <p className="text-sm">Location: Kota Semarang</p>
              <p className="text-sm">Date: 23 July 2022</p>
              <p className="text-sm">Time: 01:00</p>
            </div>
          </div>
          <p className="font-semibold text-right text-xl text-gray-800">
            Total Rental Price: <span className="text-blue-600">$80.00</span>
          </p>
        </div> */}
        <div>
          <div className="flex items-center gap-1 mb-4">
            <img src="/dot.png" alt="" width={18} />
            <p className="font-medium">Pick - Up</p>
          </div>
          <div className="sec w-full flex  max-sm:flex-wrap gap-7">
            <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
              <label className="font-semibold" htmlFor="add">
                Locations
              </label>
              <select
                title="city"
                className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
              >
                <option value="">Select Your City</option>
              </select>
            </div>
            <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
              <label className="font-semibold" htmlFor="city">
                Date
              </label>
              <select
                title="cty"
                className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
              >
                <option value="">Select Your Date</option>
              </select>
            </div>
          </div>
          <div className="third w-full mb-7">
            <div className="city flex flex-col gap-3 mt-4 mb-3 w-full lg:w-[45%]">
              <label className="font-semibold" htmlFor="city">
                Time
              </label>
              <select
                title="cit"
                className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
              >
                <option value="">Select Your Time</option>
              </select>
            </div>
          </div>
          <div className="mb-8">
            <div className="flex items-center gap-1 ">
              <img src="/dot.png" alt="" width={18} />
              <p className="font-medium">Drop - off</p>
            </div>
          </div>
          <div className="sec w-full flex max-sm:flex-wrap gap-7">
            <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
              <label className="font-semibold" htmlFor="add">
                Locations
              </label>
              <select
                title="city"
                className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
              >
                <option value="">Select Your City</option>
              </select>
            </div>
            <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
              <label className="font-semibold" htmlFor="city">
                Date
              </label>
              <select
                title="cty"
                className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
              >
                <option value="">Select Your Date</option>
              </select>
            </div>
          </div>
          <div className="third w-full">
            <div className="city flex flex-col gap-3  mt-4 mb-3 w-full lg:w-[45%]">
              <label className="font-semibold" htmlFor="city">
                Time
              </label>
              <select
                title="cit"
                className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
              >
                <option value="">Select Your Time</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col gap-6 flex-1">
        {/* Top 5 Car Rental */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="font-semibold text-gray-700 mb-4">Top 5 Car Rental</h3>
          <div className=" flex items-center justify-around">
            {/* Pie Chart Placeholder */}
            <img src="/circle2.png" alt="" className="max-sm:h-28" />
            <div className="space-y-2 text-gray-600 max-sm:text-sm">
              <p>
                Sport Car: <span className="font-semibold"> 17,439</span>
              </p>
              <p>
                SUV: <span className="font-semibold"> 9,478</span>
              </p>
              <p>
                Coupe: <span className="font-semibold"> 13,197</span>
              </p>
              <p>
                Hatchback: <span className="font-semibold">18,147</span>
              </p>
              <p>
                MPV: <span className="font-semibold">14,406</span>
              </p>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white h-full shadow-md rounded-lg p-6 ">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-700">Recent Transaction</h3>
            <a href="/" className="text-blue-600 text-sm">
              View All
            </a>
          </div>
          <div className="max-md:space-y-7 space-y-8">
            {/* Transaction Item */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img
                  src="/car1.png"
                  alt="Nissan GT-R"
                  className="w-auto h-12 rounded-md"
                />
                <div>
                  <p className="font-semibold text-sm">Nissan GT - R</p>
                  <p className="text-xs text-gray-500">Sport Car</p>
                </div>
              </div>
              <p className="font-semibold">$80.00</p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img
                  src="/car2.png"
                  alt="Koenigsegg"
                  className="w-auto h-12 rounded-md"
                />
                <div>
                  <p className="font-semibold text-sm">Koenigsegg</p>
                  <p className="text-xs text-gray-500">Sport Car</p>
                </div>
              </div>
              <p className="font-semibold">$99.00</p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img
                  src="/car3.png"
                  alt="Rolls Royce"
                  className="w-auto h-12 rounded-md"
                />
                <div>
                  <p className="font-semibold text-sm">Rolls - Royce</p>
                  <p className="text-xs text-gray-500">Coupe</p>
                </div>
              </div>
              <p className="font-semibold">$96.00</p>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img
                  src="/car4.png"
                  alt="CR-V"
                  className="w-auto h-12 rounded-md"
                />
                <div>
                  <p className="font-semibold text-sm">CR - V</p>
                  <p className="text-xs text-gray-500">SUV</p>
                </div>
              </div>
              <p className="font-semibold">$80.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalDashboard;
