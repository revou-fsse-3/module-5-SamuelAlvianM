import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Search from "../Layout/Search"

export default function App({ Component, pageProps }: AppProps) {

  const { term, options, onInputChange, onOptionSelect, onSubmit, data, error, selectedCity } = pageProps;

  return(
    <Search
    term={term}
    options={options}
    onInputChange={onInputChange}
    onOptionSelect={onOptionSelect}
    onSubmit={onSubmit}
    data={data}
    error={error}
    city={selectedCity}
    >
      <Component {...pageProps} />
    </Search>
  ) ;
}
