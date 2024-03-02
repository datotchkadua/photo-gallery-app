import usePopularImages from "../hooks/usePopularImages";
import ImageCard from "./ImageCard";
import Loading from "./Loading";

const Main: React.FC = () => {
  const { lastPopularImageRef, isFetching, allPopularImages } =
    usePopularImages();

  console.log(allPopularImages.length);
  return (
    <main className="flex justify-center items-center flex-wrap">
      <h2>images</h2>
      <ul className="flex w-full flex-col justify-center items-center">
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
    </main>
  );
};

export default Main;
