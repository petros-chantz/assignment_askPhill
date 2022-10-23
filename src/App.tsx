import useSWR from "swr";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer/Footer";
import React from "react";
import { Filter } from "./components/Store/Filters/Filter";
import { Product } from "./components/Store/Products/Product";

export const App = () => {
  const url = "https://6354eaa3da523ceadcf64ca5.mockapi.io/assignment/products";

  const { data, error } = useSWR(url);

  if (error)
    return (
      <React.Fragment>
        <Navbar />
        <section className="flex justify-center gap-10 h-screen self-center mb-20 bg-white">
          <h2 className="self-center">Sorry, something is wrong :(</h2>
        </section>
        <Footer />
      </React.Fragment>
    );

  if (data) {
    return (
      <React.Fragment>
        <Navbar />
        <section className="flex lg:flex-row flex-col gap-10 mb-20 bg-white">
          <Filter />
          <section className="w-5/6 grid grid-cols-1 self-center lg:grid-cols-3 gap-y-10 py-10 px-10 gap-x-20">
            {data.map((products: any, index: any) => (
              <Product products={products} key={index} />
            ))}
          </section>
        </section>
        <Footer />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Navbar />
      <section className="flex justify-center gap-10 h-screen self-center mb-20 bg-white">
        <h2 className="self-center">Sorry, we couldn't load any products :(</h2>
      </section>
      <Footer />
    </React.Fragment>
  );
};
