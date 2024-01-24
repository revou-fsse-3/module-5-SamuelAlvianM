import {
  useState,
  createContext,
  HTMLAttributes,
  PropsWithChildren,
  useContext,
  FC,
} from "react";
import { optionType } from "../types/index";

const BASE_URL = "http://api.openweathermap.org";

const SearchContext = createContext({
  options: [] as optionType[],
  onSearchCity: (_value: string) => {},
});

interface SearchProviderProps extends HTMLAttributes<HTMLDivElement> {}
type SearchProviderComponents = FC<SearchProviderProps> & PropsWithChildren;
export const SearchProvider: SearchProviderComponents = ({ children }) => {
  const [options, setOptions] = useState<[]>([]);

  const _getSearchOptions = async (term: string) => {
    setOptions([]);

    fetch(
      `${BASE_URL}/geo/1.0/direct?q=${term.trim()}&limit=5&lang=en&appid=${
        process.env.REACT_APP_API_KEY ?? "2e9df2303f438519ec47c47706266d11"
      }`
    )
      .then((res) => res.json())
      .then((data) => setOptions(data));
  };

  const onSearchCity = (value: string) => {
    if (value.trim().length === 0) {
      setOptions([]);
    } else {
      _getSearchOptions(value);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        options,
        onSearchCity,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default function useSearch() {
  const context = useContext(SearchContext);

  if (!context) throw Error("use in context");

  return context;
}


export { useSearch };
export type { SearchProviderProps };
