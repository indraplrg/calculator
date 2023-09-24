const InputBar = ({ inputValue }) => {
   return (
      <input
         readOnly
         className="shadow-md w-full py-2 md:py-4 px-4 text-lg cursor-default rounded-lg border-slate-400 border border-opacity-25 outline-none"
         value={inputValue}
      ></input>
   );
};

export default InputBar;
