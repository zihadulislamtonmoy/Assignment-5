import { FaStar } from "react-icons/fa";
import type { Itechnology } from "../../types/TechnologiesType";

interface TechnologyCardProps {
  technology: Itechnology;
}

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      
    
      <div className="flex items-center justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-12 w-12 object-contain"
        />

        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-500">
          {technology.badge}
        </span>
      </div>

     
      <h2 className="mt-4 text-xl font-bold text-gray-800">
        {technology.name}
      </h2>

  
      <p className="mt-2 text-sm leading-6 text-gray-500">
        {technology.description}
      </p>

      
      <div className="mt-5 flex items-center justify-between">
        
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
          {technology.category}
        </span>

        <span className="rounded-full bg-green-50 px-3 py-1 text-xs text-green-600">
          {technology.difficulty}
        </span>

        <span className=" flex items-center text-sm font-semibold text-gray-700">
         <FaStar/> { technology.rating}
        </span>

      </div>

  
      <button className="mt-5 w-full rounded-lg bg-[#17365D] py-2.5 text-sm font-semibold text-white hover:bg-[#102B4C]">
        Add to Stack
      </button>

    </div>
  );
};

export default TechnologyCard; 