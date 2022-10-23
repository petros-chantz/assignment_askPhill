export const Newsletter = () => {
  return (
    <div className="flex flex-col justify-center py-10 pb-20 gap-10 border-b-[1px] border-opacity-10 border-black">
      <h1 className="self-center text-center">
        <span className="block uppercase">Join our</span>
        <span className="block uppercase">newsletter</span>
      </h1>
      <div className="flex flex-row self-center gap-2 border-b-2 border-black">
        <input
          type="text"
          aria-label="email input"
          className="self-center text-black uppercase placeholder:font-light border-none placeholder:text-black focus:ring-white w-80 bg-beige"
          placeholder="your email"
        />
        <p className="self-center">subscribe</p>
      </div>
    </div>
  );
};
