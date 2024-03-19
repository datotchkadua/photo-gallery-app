import useImagesByQuery from "../hooks/useImagesByQuery";

import ImageList from "./ImageList";

type SearchImageProps = {
  searchValue: string;
};
const SearchImageList = ({ searchValue }: SearchImageProps) => {
  const { imagesByQuery, isFetching, lastQueryImageRef } =
    useImagesByQuery(searchValue);

  return (
    <ImageList
      title="Searched images"
      imagesArray={imagesByQuery}
      isFetching={isFetching}
      lastImageRef={lastQueryImageRef as React.Ref<HTMLDivElement>}
    />
  );
};

export default SearchImageList;
