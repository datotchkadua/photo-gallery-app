import usePopularImages from "../hooks/usePopularImages";
import ImageList from "./ImageList";

const PopularImagesList: React.FC = () => {
  const { lastPopularImageRef, isFetching, allPopularImages } =
    usePopularImages();
  return (
    <ImageList
      title="Popular Images"
      imagesArray={allPopularImages}
      isFetching={isFetching}
      lastImageRef={lastPopularImageRef as React.Ref<HTMLDivElement>}
    />
  );
};

export default PopularImagesList;
