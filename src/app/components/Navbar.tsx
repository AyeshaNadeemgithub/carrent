import Image from "next/image";
const Header = () => {
  return (
    <header className="px-3 py-3 flex justify-between items-center md:px-8 md:py-6 bg-white border border-gray-200">
      
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-xl ml-1 md:ml-5 text-blue-600 md:text-2xl font-bold">MORENT</h1>
      </div>

      {/* Search Bar */}
      <div className=" hidden md:flex items-center
       mx-[290px] w-[70vh] ml-4 px-3 border border-gray-300 rounded-full max-lg:mx-[490px] max-lg:w-[90vh]">
        <Image
          src="/search.png"
          alt="search"
          width={24}
          height={24}
          
        />
        <input
          type="text"
          placeholder="Search Something here"
          className="w-[80vh] ml-1 px-4 py-2 rounded-full bg-transparent text-sm appearance-none border-none  focus:outline-none"
        />
        <Image
          src="/search1.png"
          alt="search"
          width={24}
          height={24}
          className="mr-[-1px]"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4">
        {/* Heart Icon */}
        <button className="w-10 h-10 rounded-full flex items-center justify-center">
          <img
            src="/heart.png"
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </button>

        {/* Notification Icon */}
        <button className="relative w-10 h-10  rounded-full flex items-center justify-center">
          <img
            src="/notification.png"
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </button>

        {/* Settings Icon */}
        <button className="w-10 h-10  rounded-full flex items-center justify-center">
          <img
            src="/setting.png"
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </button>

        {/* Profile Image */}
        <button className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src="/profile.png"
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;

