import usePopularImages from "../hooks/usePopularImages";
import ImageCard from "./ImageCard";

const Main: React.FC = () => {
  const { lastPopularImageRef, isFetching, allPopularImages } =
    usePopularImages();

  console.log(allPopularImages.length);
  return (
    <main className="flex  items-center flex-wrap">
      <h2>images</h2>
      <ul className="flex w-full flex-col justify-center items-center">
        {allPopularImages?.map((imageInfo, i, allImages) => {
          // console.log(imageInfo.urls);
          return (
            <li key={imageInfo.id}>
              <ImageCard
                imageSrc={imageInfo.urls.regular}
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
      {isFetching && <h2 className="text-3xl">Loading...</h2>}
    </main>
  );
};

export default Main;
