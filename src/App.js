import { useState } from "react";

export default function App() {
  const [toggleBttn, setToggleBttn] = useState(false);

  return (
    <div>
      <button onClick={(e) => setToggleBttn(!toggleBttn)}>
        this is button
      </button>
      <h1>{toggleBttn ? "ON" : "OFF"}</h1>
    </div>
  );
}
