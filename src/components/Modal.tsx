import { useQuery } from "@tanstack/react-query";
import { fetchImageById } from "../api/fetchImageById";
import Loading from "./Loading";
import viewSvg from "../assets/view.svg";
import downloadSvg from "../assets/download.svg";
import likeSvg from "../assets/like.svg";

type ImageModalProps = {
  imageId: string;
  onHandleModalChange: () => void;
};
const ImageModal: React.FC<ImageModalProps> = ({
  imageId,
  onHandleModalChange,
}) => {
  const { data: imageData, isFetching } = useQuery({
    queryKey: ["imageById", imageId],
    queryFn: () => fetchImageById(imageId),
  });

  if (isFetching) {
    return <Loading />;
  }

  const {
    views,
    urls: { full },
    likes,
    downloads,

    alt_description,
  } = imageData;

  return (
    <div className="flex justify-center items-center w-full md:inset-0 h-full	max-h-full">
      <div className=" flex justify-center items-center relative p-4 w-full  ">
        <div className=" relative  sm:w-[400px] md:w-[700px] lg:w-[900px] bg-gray-200 rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {alt_description}
            </h3>
            <button
              onClick={onHandleModalChange}
              type="button"
              className="end-2.5 font-bold text-xl bg-transparent
               hover:bg-gray-500 hover:text-gray-900 rounded-lg
                w-8 h-8 ms-auto inline-flex 
              justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              X
            </button>
          </div>
          <div className="p-4 md:p-5 border-b  dark:border-gray-600 ">
            <img className="rounded-lg w-[95%] h-1/2 " src={full} alt="food" />
            <div className="flex w-full p-4 justify-start flex-row flex-wrap items-start ">
              <div className="flex m-3 justify-center item-center">
                <img
                  className="w-7 h-7 mr-2"
                  src={downloadSvg}
                  alt="download"
                />
                <h4 className="text-xl">{downloads}</h4>
              </div>
              <div className="flex m-3 justify-center item-center">
                <img className="w-7 h-7 mr-2" src={likeSvg} alt="likes" />
                <h4 className="text-xl">{likes}</h4>
              </div>
              <div className="flex m-3 justify-center item-center">
                <img className="w-7 h-7 mr-2" src={viewSvg} alt="likes" />
                <h4 className="text-xl">{views}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
