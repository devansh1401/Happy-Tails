import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Happy Tails</h1>
      <Pet name="Luna" animal={"Dog"} breed={"Havanese"} />
      <Pet name="Pepper" animal={"Bird"} breed={"Cockatiel"} />
      <Pet name="Doink" animal={"Cat"} breed={"Mixed"} />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
