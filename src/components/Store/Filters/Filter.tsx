import { Color } from "./Color";
import { Price } from "./Price";

export const Filter = () => {
  return (
    <div className="flex flex-col gap-7 py-10 px-10 lg:w-1/6 ">
      <h2>Filter</h2>
      <Color />
      <Price />
    </div>
  );
};
