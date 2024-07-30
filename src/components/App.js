import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";

const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const appRender = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

const display = ReactDOM.createRoot(document.getElementById("root"));

display.render(<RouterProvider router= {appRender} />);
