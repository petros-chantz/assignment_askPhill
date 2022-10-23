export const Product = (props: any) => {
  return (
    <div className="flex flex-col h-full gap-3">
      <div className="h-5/6 bg-sky-200">
        <img src={props.products.thumbNail} alt="" className="bg-slate-800" />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <p>{props.products.name}</p>
          <p>${props.products.price}</p>
        </div>
        <p>{props.products.department}</p>
      </div>
    </div>
  );
};
