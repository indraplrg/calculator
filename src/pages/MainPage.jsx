import React, { useState } from "react";
import Button from "../components/Button";
import InputBar from "../components/InputBar";

function MainPage() {
   const [display, setDisplay] = useState("1");

   function handleButtonClick(e) {
      console.log(e);
   }

   return (
      <div className="flex flex-col w-fit shadow-lg rounded-md p-3 gap-3 border-slate-400 border border-opacity-25 container">
         <div>
            <InputBar inputValue={display} />
         </div>
         <div className="grid grid-cols-4 gap-2">
            <Button valueButtonToParent={handleButtonClick} text={"C"} />
            <Button text={"/"} />
            <Button text={"X"} />
            <Button text={"<-"} />
            <Button text={7} />
            <Button text={8} />
            <Button text={9} />
            <Button text={"-"} />
            <Button text={4} />
            <Button text={5} />
            <Button text={6} />
            <Button text={"+"} />
            <Button text={1} />
            <Button text={2} />
            <Button text={3} />
            <Button text={"%"} />
            <Button text={0} />
            <Button text={","} />
            <Button text={"Result"} />
         </div>
      </div>
   );
}

export default MainPage;
