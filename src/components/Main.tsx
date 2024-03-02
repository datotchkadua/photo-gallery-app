import Input from "./Input";
import PopularImagesList from "./PopularImagesList";

const Main: React.FC = () => {
  return (
    <main className="flex justify-center items-center flex-wrap">
      <Input />
      <PopularImagesList />
    </main>
  );
};

export default Main;
