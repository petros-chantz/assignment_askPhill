import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

export const Navbar = () => {
  return (
    <div className="flex flex-col justify-center w-full px-10 py-10 h-1/6 bg-slate-800">
      <div className="flex flex-row justify-between w-full gap-20 lg:justify-around lg:gap-32 2xl:gap-80">
        <h2 className="self-center font-medium text-white">miista</h2>
        <div className="flex-row self-center hidden gap-5 md:gap-10 lg:flex">
          {["shop", "e8 by miinsta", "stories", "about", "journal"].map(
            (keyword) => (
              <p className="text-white cursor-pointer hover:underline">
                {keyword}
              </p>
            )
          )}
        </div>
        <div className="flex flex-row self-center justify-center gap-5">
          <p className="self-center text-white cursor-pointer hover:underline">
            account
          </p>
          <MagnifyingGlassIcon className="self-center w-5 h-5 text-white" />
          <HeartIcon className="self-center w-5 h-5 text-white" />
          <ShoppingBagIcon className="self-center w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
};
