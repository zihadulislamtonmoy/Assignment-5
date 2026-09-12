import type { Itechnology } from "../../types/TechnologiesType";
import { type Dispatch, type SetStateAction } from "react";
import { toast } from "react-toastify";

interface SelectedTechnologiesProps {
  selectedTechnologies: Itechnology[];
  setSelectedTechnology: Dispatch<SetStateAction<Itechnology[]>>;
}

const SelectedTechnologies = ({
  selectedTechnologies,
  setSelectedTechnology,
}: SelectedTechnologiesProps) => {

  const handleRemove = (id: string) => {
    const updated = selectedTechnologies.filter((item) => item.id !== id);
    setSelectedTechnology(updated);
    toast.error("Removed from stack");
  };

  const handleRemoveAll = () => {
    setSelectedTechnology([]);
    toast.info("Cleared all items");
  };

  return (
    <div className="bg-white border border-gray-100 rounded-4xl shadow-sm p-6">
      <h2 className="text-3xl font-bold text-gray-900">
        Your Stack
      </h2>

      <p className="mt-2 text-sm text-gray-500 font-normal">
        {selectedTechnologies.length} Technology Selected
      </p>

      <div className="mt-6 min-h-[16rem] border-2 border-dashed border-gray-200 rounded-[28px] p-4 flex flex-col justify-between">
        {selectedTechnologies.length > 0 ? (
          <div>
            <div className="flex flex-col gap-3">
              {selectedTechnologies.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border border-gray-100 p-3 rounded-xl bg-gray-50"
                >
                  <div className="flex items-center gap-3">
                    <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                    <div>
                      <h4 className="font-bold text-sm text-gray-800">{item.name}</h4>
                      <p className="text-xs text-gray-400">{item.category}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-gray-400 hover:text-red-500 text-lg font-bold px-2"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={handleRemoveAll}
              className="mt-4 w-full rounded-lg bg-red-500 py-2 text-sm font-semibold text-white hover:bg-red-600"
            >
              Remove All
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full my-auto">
            <p className="text-xl text-gray-400 text-center">
              Your stack is empty.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectedTechnologies;