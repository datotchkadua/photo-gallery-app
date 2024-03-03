import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { clearQueries } from "../features/queryImages/queryImagesSlice";

const History = () => {
  const imagequeries = useSelector(
    (state: RootState) => state.queryImages.queries
  );
  console.log(imagequeries);
  return <div>History</div>;
};

export default History;
