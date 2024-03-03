import React from "react";
import ImageCard from "./ImageCard";
import Loading from "./Loading";

export interface ImageDataType {
  id: string;
  urls: {
    regular: string;
  };
}
interface ImageListProps {
  imagesArray: ImageDataType[];
  title: string;
  isFetching: boolean;
  lastImageRef: React.Ref<HTMLDivElement>;
}

const ImageList = ({
  title,
  imagesArray,
  isFetching,
  lastImageRef,
}: ImageListProps) => {
  return (
    <section className="flex w-full flex-col  justify-center items-center">
      {title && <h2 className=" mt-5 text-2xl font-bold">{title}</h2>}
      <ul className="flex w-full flex-col">
        {imagesArray?.map(
          (imageInfo: ImageDataType, i: number, allImages: ImageDataType[]) => {
            return (
              <li key={imageInfo.id}>
                <ImageCard
                  imageSrc={imageInfo.urls.regular}
                  imageId={imageInfo.id}
                  ref={allImages.length - 1 === i ? lastImageRef : null}
                />
              </li>
            );
          }
        )}
      </ul>
      {isFetching && <Loading />}
    </section>
  );
};

export default ImageList;
