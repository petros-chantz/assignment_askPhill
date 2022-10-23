export const Product = (props: any) => {
  const productColors: string[] = [
    "bg-red-300",
    "bg-sky-300",
    "bg-amber-300",
    "bg-green-300",
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
