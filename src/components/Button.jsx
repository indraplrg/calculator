const Button = ({ text, valueButtonToParent }) => {
   function handleDataToParent(value) {
      valueButtonToParent(value);
   }

   return (
      <button
         type="submit"
         className={`text-slate-500 shadow-md md:px-8 md:py-4 p-2 hover:bg-slate-50 transition-all ease-in-out duration-300 hover:border-opacity-30 rounded-lg text-center border-slate-400 border border-opacity-25 ${
            text == "Result" ? "col-span-2" : ""
         } `}
         onClick={() => handleDataToParent}
      >
         {text}
      </button>
   );
};

export default Button;
