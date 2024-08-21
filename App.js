import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About"
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import ResMenu from "./src/components/ResMenu";
import Grocery from "./src/components/Grocery";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const Grocery = lazy(()=>import("./src/components/Grocery.js"));

const appRender = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurent/:resid",
        element: <ResMenu />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading.....</h1>}><Grocery /></Suspense>,
      },
    ],
  },
]);

const display = ReactDOM.createRoot(document.getElementById("root"));

display.render(<RouterProvider router={appRender} />);
