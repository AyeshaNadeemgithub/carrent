import React from "react";
import {
  FiHome,
  FiBarChart2,
  FiRepeat,
  FiMail,
  FiCalendar,
  FiSettings,
  FiHelpCircle,
  FiMoon,
  FiLogOut,
} from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="hidden md:h-full w-64 bg-white shadow-sm md:flex flex-col justify-between p-6 ">
      {/* Main Menu */}
      <div>
        <h2 className="text-gray-500 text-sm font-semibold mb-4 space-x-5">MAIN MENU</h2>
        <ul className="space-y-4">
          <li className="flex items-center space-x-4 text-blue-600 font-medium">
            <FiHome size={20} />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-4 text-gray-500">
            <FiBarChart2 size={20} />
            <span>Car Rent</span>
          </li>
          <li className="flex items-center space-x-4 text-gray-500">
            <FiBarChart2 size={20} />
            <span>Insight</span>
          </li>
          <li className="flex items-center space-x-4 text-gray-500">
            <FiRepeat size={20} />
            <span>Reimburse</span>
          </li>
          <li className="flex items-center space-x-4 text-gray-500">
            <FiMail size={20} />
            <span>Inbox</span>
          </li>
          <li className="flex items-center space-x-4 text-gray-500">
            <FiCalendar size={20} />
            <span>Calendar</span>
          </li>
        </ul>
      </div>

      {/* Preferences */}
      <div>
        <h2 className="text-gray-500 text-sm font-semibold mb-4 mt-8 space-x-7 space-y-5">PREFERENCES</h2>
        <ul className="space-y-4">
          <li className="flex items-center space-x-4 text-gray-500">
            <FiSettings size={20} />
            <span>Settings</span>
          </li>
          <li className="flex items-center space-x-4 text-gray-500">
            <FiHelpCircle size={20} />
            <span>Help & Center</span>
          </li>
          <li className="flex items-center space-x-4 text-gray-500">
            <FiMoon size={20} />
            <span className="flex items-center">
              Dark Mode
              <span className="ml-2 bg-gray-200 p-1 rounded-full flex items-center">
                <FiMoon size={12} className="text-gray-600" />
              </span>
            </span>
          </li>
        </ul>
        <div className="mt-8 flex items-center space-x-4 text-gray-500">
          <FiLogOut size={20} />
          <span>Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
