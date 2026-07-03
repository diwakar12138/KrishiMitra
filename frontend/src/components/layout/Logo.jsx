import { FaLeaf } from "react-icons/fa";

function Logo() {
  return (
    <div className="flex items-center gap-2 sm:gap-2.5 cursor-pointer select-none whitespace-nowrap">
      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
        <FaLeaf className="text-sm sm:text-base md:text-lg text-green-700" />
      </div>

      <div className="flex flex-col justify-center leading-none">
        <h1 className="text-base sm:text-lg md:text-xl font-bold text-green-700 leading-none">
          KrishiMitra
        </h1>
        <p className="hidden sm:block text-[11px] md:text-xs text-gray-500 leading-none mt-1.5">
          Smart Farming Companion
        </p>
      </div>
    </div>
  );
}

export default Logo;