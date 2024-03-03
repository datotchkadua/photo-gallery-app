import React, { useState } from "react";
import Input from "./Input";
import useDebounce from "../hooks/useDebounce";
import SearchImageList from "./SearchImageList";
import PopularImagesList from "./PopularImagesList";

const Main: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedSearchValue = useDebounce(searchValue, 1000);

  return (
    <main className="flex justify-center items-center flex-wrap">
      <Input searchValue={searchValue} setSearchValue={setSearchValue} />

      {!debouncedSearchValue ? (
        <PopularImagesList />
      ) : (
        <SearchImageList searchValue={debouncedSearchValue} />
      )}
    </main>
  );
};

export default Main;
