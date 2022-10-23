import { filters } from "../../../interfaces/Interfaces";

export const Material = () => {
  return (
    <div className="flex flex-col gap-5 pt-10">
      <p>material</p>
      {filters.material.map((option: any, optionIdx: any) => (
        <div
          key={option.value}
          className="flex items-center text-base sm:text-sm"
        >
          <input
            id={`material-${optionIdx}`}
            name="material[]"
            defaultValue={option.value}
            type="checkbox"
            className="h-4 w-4 flex-shrink-0 rounded border-gray-300 text-slate-600 focus:ring-slate-500"
            defaultChecked={option.checked}
          />
          <label
            htmlFor={`material-${optionIdx}`}
            className="ml-3 min-w-0 flex-1 text-gray-600"
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};
