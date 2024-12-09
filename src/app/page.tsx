import Link from "next/link";
import HeroSection from "./components/HeroSection";
import CarSection from "./components/CarSection";

export default function Home() {
  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]  bg-gray-100 w-full  overflow-hidden">
      <HeroSection />
      <CarSection />

      <div className="text-center">
        <Link href={"/categories"}>
          <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5">
            Show More Cars
          </button>
        </Link>
      </div>
    </div>
  );
}
