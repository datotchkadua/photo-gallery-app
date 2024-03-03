interface InputProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<InputProps> = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <div className="relative  w-[250px] sm:w-[400px] my-10">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Search Image "
          className="  w-full block  p-2 ps-5  bg-green-50  border
         border-slate-300
       text-sm rounded-md  focus:ring-1
       focus:ring-slate-400   focus:border-slate-400 
       outline-none "
        />
      </div>
    </>
  );
};

export default Input;
