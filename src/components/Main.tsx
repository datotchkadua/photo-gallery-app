import usePopularImages from "../hooks/usePopularImages";

const Main = () => {
  const { lastPopularImageRef, isFetching, allPopularImages } =
    usePopularImages();

  return (
    <main className="flex  items-center flex-wrap">
      <h2>images</h2>
      <ul className="flex w-full flex-col justify-center items-center">
        {allPopularImages?.map((imageInfo, i, allImages) => {
          // console.log(imageInfo);
          return (
            <li key={imageInfo.id}>
              <div
                ref={allImages.length - 1 === i ? lastPopularImageRef : null}
                className="w-48 h-48 "
              >
                <img
                  className="w-40 h-40"
                  src={imageInfo.urls.regular}
                  alt=""
                />
              </div>
            </li>
          );
        })}
      </ul>
      {isFetching && <h2 className="text-3xl">Loading...</h2>}
    </main>
  );
};

export default Main;
