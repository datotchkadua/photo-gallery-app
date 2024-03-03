import React from "react";
import ImageCard from "./ImageCard";
import Loading from "./Loading";
import useImagesByQuery from "../hooks/useImagesByQuery";

const SearchImageList = ({ searchValue }) => {
  const { imagesByQuery, isFetching, lastQueryImageRef } =
    useImagesByQuery(searchValue);
  return (
    <section className="flex w-full flex-col  justify-center items-center">
      <ul className="flex w-full flex-col">
        {imagesByQuery?.map((imageInfo, i, allImages) => {
          return (
            <li key={imageInfo.id}>
              <ImageCard
                imageSrc={imageInfo.urls.regular}
                imageId={imageInfo.id}
                ref={
                  allImages.length - 1 === i
                    ? (lastQueryImageRef as React.Ref<HTMLDivElement>)
                    : null
                }
              />
            </li>
          );
        })}
      </ul>
      {isFetching && <Loading />}
    </section>
  );
};

export default SearchImageList;
