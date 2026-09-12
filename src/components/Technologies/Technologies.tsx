import { use, useState } from "react";
import  {type Dispatch, type SetStateAction} from "react";
import type { Itechnology } from "../../types/TechnologiesType";
import TechnologyCard from "./TechnologyCard";
import SelectedTechnologies from "./SelectedTechnologies";


 
interface TechnologiesProps {
    technologiesPromise:Promise<Itechnology[]>;
      selectedTechnologies:Itechnology[];
      setSelectedTechnology:Dispatch<SetStateAction<Itechnology[]>>;
}

const Technologies = ({technologiesPromise}:TechnologiesProps) => {
    const technologies = use(technologiesPromise);
    const [selectedTechnologies, setSelectedTechnology] = useState<Itechnology[]>([]);
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
   
              <div className="grid grid-cols-3 gap-5 sm:grid-cols-3 lg:col-span-3">
        
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            selectedTechnologies={selectedTechnologies}
            setSelectedTechnology={setSelectedTechnology}
          />
        ))}


    </div>

    <SelectedTechnologies selectedTechnologies={selectedTechnologies}
            setSelectedTechnology={setSelectedTechnology} />
   </div>

    </section>
    );
};

export default Technologies;