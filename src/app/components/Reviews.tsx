const Reviews = () => {
  return (
    <section className="p-4 bg-white rounded-lg">
      <div className="flex items-center justify-start gap-4 mb-6">
        <h2 className="text-xl font-semibold">Reviews</h2>
        <span className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-sm">
          13
        </span>
      </div>
      {/* Review List */}
      <div className="space-y-6">
        {/* Single Review */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Reviewer Info */}
          <div className="flex items-center space-x-4">
            <img
              src="/male.png"
              alt="Reviewer"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h4 className="text-lg font-semibold">Alex Stanton</h4>
              <p className="text-sm text-gray-500">CEO at Bukalapak</p>
            </div>
          </div>
          {/* Review Date */}
          <div className="mt-2 md:mt-0 md:text-right">
            <p className="text-sm text-gray-400">21 July 2022</p>
            <div className="flex space-x-1 mt-1">
              <span className="text-yellow-400 ">⭐</span>
              <span className="text-yellow-400">⭐</span>
              <span className="text-yellow-400">⭐</span>
              <span className="text-yellow-400">⭐</span>
              <span className="text-gray-400">⭐</span>
            </div>
          </div>
        </div>
        {/* Review Text */}
        <p className="text-sm text-gray-600 mt-3">
          We are very happy with the service from the MORENT App. Morent has a
          low price and also a large variety of cars with good and comfortable
          facilities. In addition, the service provided by the officers is also
          very friendly and very polite.
        </p>
<br />
        {/* Another Review */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center ">
          {/* Reviewer Info */}
          <div className="flex items-center space-x-4">
            <img
              src="/female.png"
              alt="Reviewer"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h4 className="text-lg font-semibold">Skylar Dias</h4>
              <p className="text-sm text-gray-500">CEO at Amazon</p>
            </div>
          </div>
          {/* Review Date */}
          <div className="mt-2 md:mt-0 md:text-right">
            <p className="text-sm text-gray-400">20 July 2022</p>
            <div className="flex space-x-1 mt-1">
              <span className="text-yellow-400">⭐</span>
              <span className="text-yellow-400">⭐</span>
              <span className="text-yellow-400">⭐</span>
              <span className="text-yellow-400">⭐</span>
              <span className="text-gray-300">⭐</span>
            </div>
          </div>
        </div>
        {/* Review Text */}
        <p className="text-sm text-gray-600 mt-3">
          We are greatly helped by the services of the MORENT Application.
          Morent has low prices and also a wide variety of cars with good and
          comfortable facilities. In addition, the service provided by the
          officers is also very friendly and very polite.
        </p>
      </div>
      {/* Show All Button */}
      <div className=" mt-8 text-center">
        <button className="text-blue-600 font-medium hover:underline flex text-center items-center justify-center">
          Show All <span className="ml-1">↓</span>
        </button>
      </div>
    </section>
  );
};

export default Reviews;
