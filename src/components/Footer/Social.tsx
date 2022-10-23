import { GlobeAltIcon } from "@heroicons/react/24/outline";

export const Social = () => {
  return (
    <div className="flex flex-row justify-around py-5 lg:gap-80 border-t-[1px] border-opacity-10 border-black">
      <h2 className="self-center font-medium">miista</h2>
      <p className="self-center">all right reserved</p>
      <div className="flex flex-row justify-center gap-5">
        <p className="self-center">social</p>
        <GlobeAltIcon className="self-center w-5 h-5 text-black" />
      </div>
    </div>
  );
};
