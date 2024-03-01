import React, { forwardRef } from "react";

type ImageCardProps = {
  imageSrc: string;
};

const ImageCard = forwardRef<HTMLDivElement, ImageCardProps>(
  ({ imageSrc }, ref) => {
    return (
      <div
        ref={ref}
        className=" flex justify-center items-center w-96 h-96 border border-gray-300 p-5 m-10 "
      >
        <img className="w-80 h-80" src={imageSrc} alt="" />
      </div>
    );
  }
);

export default ImageCard;
