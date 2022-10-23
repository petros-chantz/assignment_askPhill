export const Products = (props: any) => {
  console.log(props.products);
  return (
    <section className="w-5/6 grid grid-cols-3 gap-y-4 py-10 px-10 gap-x-10"></section>
  );
};
