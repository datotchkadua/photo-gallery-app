import { useSelector } from "react-redux";
import { RootState } from "../store";
import { clearQueries } from "../features/queryImages/queryImagesSlice";
import { useAppDispatch } from "../store";
import React, { useState } from "react";
import SearchImageList from "./SearchImageList";

const History: React.FC = () => {
  const [queryImage, setQueryImage] = useState<string>("");
  const dispatch = useAppDispatch();
  const searchedImages = useSelector(
    (state: RootState) => state.queryImages.queries
  );

  const handleDeleteQueries = () => {
    dispatch(clearQueries());
    setQueryImage("");
  };
  return (
    <section className="flex justify-center flex-col items-center mt-10">
      <ul className="flex flex-row flex-wrap my-5">
        {searchedImages.map((query, index) => (
          <li
            className={`mx-4 text-3xl cursor-pointer ${
              query === queryImage ? "text-red-600 font-bold " : ""
            }`}
            key={index}
            onClick={() => setQueryImage(query)}
          >
            {query}
          </li>
        ))}
      </ul>
      <button
        disabled={searchedImages.length == 0}
        onClick={handleDeleteQueries}
        className={` py-2.5 px-5 me-2 mb-2 mt-5 text-2xl font-medium
        text-gray-900 focus:outline-none bg-white rounded-lg border
         border-gray-200 hover:bg-gray-300 duration-300 ${
           searchedImages.length == 0
             ? "cursor-not-allowed hover:bg-white "
             : ""
         }`}
      >
        Delete queries
      </button>

      {queryImage && <SearchImageList searchValue={queryImage} />}
    </section>
  );
};

export default History;
