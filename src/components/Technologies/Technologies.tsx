import { use } from "react";
import type { Itechnology } from "../../types/TechnologiesType";
import TechnologyCard from "./TechnologyCard";
 
interface TechnologiesProps {
    technologiesPromise:Promise<Itechnology[]>
}

const Technologies = ({technologiesPromise}:TechnologiesProps) => {
    const technologies = use(technologiesPromise);
    return (
            <section className="px-6 py-10">

      
      <div className="mx-auto mb-8 max-w-7xl">
        <h1 className="text-4xl font-bold text-[#17365D]">
          Explore the{" "}
          <span className="text-[#C0268C]">
            Technologies
          </span>
        </h1>

        <p className="mt-2 text-gray-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

     
     <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 lg:grid-cols-4 items-start">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:col-span-3">
        
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
          />
        ))}



    </div>

<div className="bg-white border border-gray-100 rounded-4xl shadow-sm p-10">

    <h2 className="text-4xl font-bold text-gray-900">
        Your Stack
    </h2>

    <p className="mt-4 text-2xl text-gray-400 font-normal">
        No technologies selected yet.
    </p>

    <div className="mt-8 h-60 border-2 border-dashed border-gray-200 rounded-[28px] flex items-center justify-center">
        <p className="text-2xl text-gray-400">
            Your stack is empty.
        </p>
    </div>

</div>

     </div>
   

    </section>
    );
};

export default Technologies;