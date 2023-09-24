import React, { useState } from "react";
import Button from "../components/Button";
import InputBar from "../components/InputBar";

function MainPage() {
   const [display, setDisplay] = useState("");

   function handleButtonClick(e) {
      setDisplay(display + e);
   }

   function clearDisplay() {
      setDisplay("");
   }

   function handleDeleteLast() {
      setDisplay((prev) => prev.slice(0, -1));
   }

   function calculateResult() {
      try {
         const result = eval(display);
         setDisplay(result.toString());
      } catch (error) {
         setDisplay("Error");
      }
   }

   return (
      <div className="flex flex-col w-fit shadow-lg rounded-md p-3 gap-3 border-slate-400 border border-opacity-25 container">
         <div>
            <InputBar inputValue={display} />
         </div>
         <div className="grid grid-cols-4 gap-2 bg-sky-200 p-2 rounded-md">
            <Button valueButtonToParent={clearDisplay} text={"C"} />
            <Button valueButtonToParent={handleButtonClick} text={"/"} />
            <Button valueButtonToParent={handleButtonClick} text={"*"} />
            <Button valueButtonToParent={handleDeleteLast} text={"<-"} />
            <Button valueButtonToParent={handleButtonClick} text={7} />
            <Button valueButtonToParent={handleButtonClick} text={8} />
            <Button valueButtonToParent={handleButtonClick} text={9} />
            <Button valueButtonToParent={handleButtonClick} text={"-"} />
            <Button valueButtonToParent={handleButtonClick} text={4} />
            <Button valueButtonToParent={handleButtonClick} text={5} />
            <Button valueButtonToParent={handleButtonClick} text={6} />
            <Button valueButtonToParent={handleButtonClick} text={"+"} />
            <Button valueButtonToParent={handleButtonClick} text={1} />
            <Button valueButtonToParent={handleButtonClick} text={2} />
            <Button valueButtonToParent={handleButtonClick} text={3} />
            <Button valueButtonToParent={handleButtonClick} text={"%"} />
            <Button valueButtonToParent={handleButtonClick} text={0} />
            <Button valueButtonToParent={handleButtonClick} text={","} />
            <Button valueButtonToParent={calculateResult} text={"Result"} />
         </div>
      </div>
   );
}

export default MainPage;
