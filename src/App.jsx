import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className="w-full bg-green-500 px-4 text-black">
        Vite + React + Tailwind
      </h1>
    </div>
  );
}

export default App;
