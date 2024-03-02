import React, { forwardRef, useState } from "react";
import Modal from "../components/Modal";

type ImageCardProps = {
  imageSrc: string;
  imageId: string;
};

const ImageCard = forwardRef<HTMLDivElement, ImageCardProps>(
  ({ imageSrc, imageId }, ref) => {
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    function handleModalChange() {
      setIsModalVisible(!isModalVisible);
    }

    return (
      <div className="flex justify-center items-center flex-col">
        {isModalVisible ? (
          <Modal imageId={imageId} onHandleModalChange={handleModalChange} />
        ) : (
          <div
            ref={ref}
            className=" flex justify-center items-center 
            w-[250px] h-[250px] sm:w-96 sm:h-96 border border-gray-300 m-5  sm:m-10 p-2"
          >
            <img
              onClick={handleModalChange}
              className=" cursor-pointer w-full h-full"
              src={imageSrc}
              alt="image"
            />
          </div>
        )}
      </div>
    );
  }
);

export default ImageCard;
