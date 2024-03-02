import React from "react";
import usePopularImages from "../hooks/usePopularImages";
import ImageCard from "./ImageCard";
import Loading from "./Loading";

const PopularImagesList = () => {
  const { lastPopularImageRef, isFetching, allPopularImages } =
    usePopularImages();
  return (
    <section className="flex w-full flex-col  justify-center items-center">
      <ul className="flex w-full flex-col">
        {allPopularImages?.map((imageInfo, i, allImages) => {
          // console.log(imageInfo);
          return (
            <li key={imageInfo.id}>
              <ImageCard
                imageSrc={imageInfo.urls.regular}
                imageId={imageInfo.id}
                ref={
                  allImages.length - 1 === i
                    ? (lastPopularImageRef as React.Ref<HTMLDivElement>)
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

export default PopularImagesList;
