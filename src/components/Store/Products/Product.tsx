export const Product = (props: any) => {
  const productColors: string[] = [
    "bg-gray-300",
    "bg-slate-300",
    "bg-zinc-300",
    "bg-neutral-300",
    "bg-stone-300",
    "bg-red-300",
    "bg-orange-300",
    "bg-amber-300",
    "bg-yellow-300",
    "bg-lime-300",
    "bg-green-300",
    "bg-emerald-300",
    "bg-teal-300",
    "bg-cyan-300",
    "bg-sky-300",
    "bg-indigo-300",
    "bg-violet-300",
    "bg-purple-300",
    "bg-fuchsia-300",
    "bg-pink-300",
    "bg-rose-300",
  ];

  return (
    <div className="flex flex-col h-full gap-3">
      <div
        className={`h-32 ${
          productColors[Math.floor(Math.random() * productColors.length)]
        } w-full"`}
      ></div>
      <div className="flex h-20 flex-col">
        <div className="flex flex-row justify-between">
          <p>{props.products.name}</p>
          <p>${props.products.price}</p>
        </div>
        <p className="keyword">{props.products.department}</p>
      </div>
    </div>
  );
};
