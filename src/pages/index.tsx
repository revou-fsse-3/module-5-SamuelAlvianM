import React from "react";
import Header from "@components/Header";
const IndexPage = ({}) => {

  return (
    <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg text-zinc-700">
      <Header />
    </section>
  );
};

export default IndexPage;