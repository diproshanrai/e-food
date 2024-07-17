import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";

const App = () => {
  return (
    <div>
      <Header />
      <Body/>
    </div>
  );
};

const display = ReactDOM.createRoot(document.getElementById("root"));

display.render(<App />);
