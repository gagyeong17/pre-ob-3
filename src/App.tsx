import "./App.css";
import { useState } from "react";

import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    alert(inputValue);
    setInputValue("");
  };
  return (
    <>
      <div className="bg-[pink] w-40 h-10 rounded-sm text-center flex gap-1">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type here"
        />
        <Button text="submit" onClick={handleSubmit} />
      </div>
    </>
  );
}

export default App;
