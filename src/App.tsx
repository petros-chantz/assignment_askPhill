import axios from "axios";
import useSWR from "swr";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer/Footer";
import React from "react";
import { Filter } from "./components/Store/Filters/Filter";

export const App = () => {
  const url = "https://6354eaa3da523ceadcf64ca5.mockapi.io/assignment/products";

  const { data, error } = useSWR(url);

  if (error)
    return (
      <React.Fragment>
        <Navbar />
        <section className="flex justify-center gap-10 h-screen mb-20 bg-white">
          <h1>Sorry, something is wrong :(</h1>
        </section>
        <Footer />
      </React.Fragment>
    );

  if (data) {
    return (
      <React.Fragment>
        <Navbar />
        <section className="flex flex-row gap-10 mb-20 bg-white">
          <Filter />
          <section className="w-5/6 grid grid-cols-2 gap-y-4 py-10 px-10 gap-x-10">
            {data.map((products: any, index: any) => (
              <div>
                <p>{products.name}</p>
              </div>
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
      <section className="flex justify-center gap-10 h-screen mb-20 bg-white">
        <h1>Sorry, we couldn't load any products :(</h1>
      </section>
      <Footer />
    </React.Fragment>
  );
};
