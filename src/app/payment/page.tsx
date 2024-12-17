import React from "react";
import Image from "next/image";
import Link from "next/link";
const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-8 max-md:p-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 ">
        {/* Billing Info */}
        <div className="lg:col-span-2 space-y-8">
          {/* Billing Info Section */}
          <div className="max-sm:p-4 max-sm:text-sm bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-1">Billing Info</h2>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 mb-6">
                Please enter your billing info
              </p>
              <h1 className="max-sm:hidden text-sm text-gray-500">Step 1 of 4</h1>
            </div>
            <form className="flex flex-col gap-6">
              <div className="w-full flex flex-wrap gap-6">
                <div className="name flex flex-col gap-3 w-full lg:w-[46%]">
                  <label className="font-semibold" htmlFor="name">
                    Name
                  </label>
                  <input
                    placeholder="Your Name"
                    className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                  />
                </div>
                <div className="num flex flex-col gap-3 w-full lg:w-[50%]">
                  <label className="font-semibold" htmlFor="num">
                    Phone Number
                  </label>
                  <input
                    placeholder="Your Phone Number"
                    className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                  />
                </div>
              </div>
              <div className="w-full flex flex-wrap gap-6">
                <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                  <label className="font-semibold" htmlFor="add">
                    Address
                  </label>
                  <input
                    placeholder="Your Address"
                    className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                  />
                </div>
                <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                  <label className="font-semibold" htmlFor="city">
                    Town/City
                  </label>
                  <input
                    placeholder="Your City"
                    className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Rental Info Section */}
          <div className="max-sm:p-4 max-sm:text-sm bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-1">Rental Info</h2>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 mb-6">
                Please select your rental date
              </p>
              <h1 className="max-sm:hidden text-sm text-gray-500">Step 2 of 4</h1>
            </div>
            <div className="space-y-6">
              {/* Pick-Up Info */}
              <div>
                <div className="flex items-center gap-1 mb-4">
                  <img src="/dot.png" alt="" width={18} />
                  <p className="font-medium">Pick - Up</p>
                </div>
                <div className="sec w-full flex flex-wrap gap-7">
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
                <div className="sec w-full flex flex-wrap gap-7">
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
          </div>

          {/* Payment Method Section */}
          <div className="max-sm:p-4 max-sm:text-sm bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-1">Payment Method</h2>
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 mb-6">
                Please enter your payment info
              </p>
              <h1 className="max-sm:hidden text-sm text-gray-500">Step 3 of 4</h1>
            </div>
            <div className="space-y-4 ">
              <div className="bg-gray-100 rounded-md p-7">
                <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 mb-4">
                  <img src="/dot.png" alt="" width={18} />
                  <p className="font-medium">Credit Card</p>
                </div>
                <Image src="/visa.png" alt=""  width={95} height={85} className="mb-3"/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Card number"
                    className="p-3 border rounded-lg w-full"
                  />
                  <input
                    type="text"
                    placeholder="Expiration date"
                    className="p-3 border rounded-lg w-full"
                  />
                  <input
                    type="text"
                    placeholder="Card holder"
                    className="p-3 border rounded-lg w-full"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="p-3 border rounded-lg w-full"
                  />
                </div>
              </div>
              <div className="flex items-center  gap-4 bg-gray-100 p-2 rounded-lg">
                <input
                  type="radio"
                  id="paypal"
                  name="payment"
                  className="mr-2"
                />
                <div className="flex w-full justify-between items-center">
                <label htmlFor="paypal" className="text-gray-800 ">
                  PayPal
                </label>
                <img src="/paypal1.png" alt="" className="h-4" />
                </div>
              </div>

              <div className="flex items-center  gap-4 bg-gray-100 p-2 rounded-lg">
                <input
                  type="radio"
                  id="bitcoin"
                  name="payment"
                  className="mr-2"
                />
                <div className="flex w-full justify-between items-center">
                <label htmlFor="bitcoin" className="text-gray-800">
                  Bitcoin
                </label>
                <img src="/bitcoin.png" alt=""  className="h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Confirmation Section */}
          <div className="bg-white p-7 space-x-6 space-y-7 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Confirmation</h2>
            <p className="text-sm text-gray-500 mb-6">
              We are getting to the end. Just a few clicks and your rental is
              ready!
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <input type="checkbox" id="marketing" className="mr-2" />
                <label htmlFor="marketing" className="text-gray-600 text-sm">
                  I agree with sending marketing and newsletter emails. No spam,
                  promised!
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="terms" className="mr-2" />
                <label htmlFor="terms" className="text-gray-600 text-sm">
                  I agree with our terms and conditions and privacy policy.
                </label>
              </div>
            </div>
            <Link href="/admin">
            <button className="mt-9 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">
              Rent Now
            </button>
            </Link>
            <p className="text-xs text-gray-500 mt-4">
              All your data are safe. We are using the most advanced security to
              provide you the best experience ever.
            </p>
          </div>
        </div>

        {/* Rental Summary */}
        <div className="max-md:h-auto bg-white h-[25%] p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-2">Rental Summary</h2>
          <p className="text-sm text-gray-500 mb-4">
            Prices may change depending on the length of the rental and the
            price of your rental car.
          </p>
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/rental.png"
              alt="Car Thumbnail"
              className="w-30 h-20"
            />
            <div>
              <h3 className="text-2xl font-bold">Nissan GT - R</h3>
              
              <p className="text-yellow-500 text-sm">
                ★★★★☆ <span className="text-gray-500">440+ Reviewer</span>
              </p>
            </div>
          </div>
          <hr />
          <div className="space-y-2 text-sm mt-4">
            <div className="flex justify-between text-gray-700">
              <p>Subtotal</p>
              <p>$80.00</p>
            </div>
            <div className="flex justify-between">
              <p>Tax</p>
              <p>$0</p>
            </div>
            <div className="flex justify-between items-center  ">
              <input
                type="text"
                placeholder="Apply promo code"
                className="p-2 border rounded-lg flex-1"
              />
              <button className="max-sm:hidden ml-3 bg-gray-100 px-4 py-2 rounded-lg">
                Apply now
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center mt-6 font-bold text-2xl">
            <p className="text-md font-semibold text-gray-900">Total Rental Price</p>
            <p>$80.00</p>
          </div>
          <p className="mt-2 text-gray-400 text-xs ">Overall price and includes rental discount</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
