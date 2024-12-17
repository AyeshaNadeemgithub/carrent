import React from "react";
import Image from "next/image";
import DashBoard from "../components/Dashboard";
import RentalDashboard from "../components/RentalDashboard";
export default function Page() {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <DashBoard />
      <RentalDashboard/>
     
    </div>
  );
}
