const Input: React.FC = () => {
  return (
    <>
      <div className="relative  w-[250px] sm:w-[400px] my-10">
        <input
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
