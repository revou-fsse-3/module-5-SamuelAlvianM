import { ChangeEvent, ReactNode, useState } from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Suggestions from "./Suggestions";
import { forecastType, optionType } from "../../types";

type Props = {
  term: string;
  options: optionType[];
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onOptionSelect: (option: optionType) => void;
  onSubmit: () => void;
  data: forecastType | null;
  error: Error | null;
  city: optionType | null;
  children?: ReactNode;
};

const Search: React.FC<Props> = ({
  term,
  city,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
  children,
}: Props) => {
  const router = useRouter();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
      router.push("/forecast");
    }
  };

  return (
    <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg text-zinc-700">
      <Header />

      <div className="relative flex mt-10 md:mt-4">
        <input
          type="text"
          value={term}
          className="px-2 py-1 rounded-l-md border-2 border-white"
          onChange={onInputChange}
          onKeyPress={handleKeyPress}
        />

        {options.length > 0 && (
          <Suggestions options={options} onSelect={onOptionSelect} onSubmit={onSubmit} />
        )}

        {"cod" in options || term?.length > 8 ? (
          <>{children}</>
        ) : (
          <>
            City not found
          </>
        )}

        {!("cod" in options) && city && (
          <button
            className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100 px-2 py-1 cursor-pointer"
            onClick={onSubmit}
          >
            Search
          </button>
        )}
      </div>
    </section>
  );
};

export default Search;