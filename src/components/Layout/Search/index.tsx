import useDebaunce from "@/features/hooks/useDebounce";
import useSearch from "@/features/hooks/useSearch";
import { useRouter } from "next/router";
import { ChangeEvent, FC, HTMLAttributes, PropsWithChildren, useEffect, useState } from "react";

interface SearchProps extends HTMLAttributes<HTMLDivElement> {}
type SearchComponents = FC<SearchProps> & PropsWithChildren;
const Search: SearchComponents = ({ children, ...resProps }) => {
  const [term, setTeam] = useState("");
  const { onSearchCity } = useSearch();
  const router = useRouter
  const debounce = useDebaunce(term);
  useEffect(() => {
    onSearchCity(debounce);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounce]);

  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTeam(e.target.value);

  };
  return (
    <div
      {...resProps}
      className={`${resProps.className ? resProps.className : ""}`}
    >
      <label
        htmlFor="
  "
      >
        search city
        <input
          placeholder="search city here"
          type="text"
          value={term}
          onChange={handelChange}
        />
      </label>
    </div>
  );
};


export default Search;