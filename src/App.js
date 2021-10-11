import { useState } from "react";

export default function App() {
  const [toggleBttn, setToggleBttn] = useState(false);

  return (
    <div>
      <button
        onClick={(e) => setToggleBttn(!toggleBttn)}
        style={{
          height: "2rem",
          width: "4rem",
          borderRadius: "2rem",
          background: toggleBttn ? "peachpuff" : "mediumturquoise"
        }}
      >
        <div
          style={{
            height: "1.4rem",
            width: "1.4rem",
            border: "solid 1px gray",
            borderRadius: "2rem",
            background: toggleBttn ? "mediumturquoise" : "peachpuff",
            transform: toggleBttn ? "translateX(1.4rem)" : ""
          }}
        />
      </button>
      <h1>{toggleBttn ? "ON" : "OFF"}</h1>
    </div>
  );
}
