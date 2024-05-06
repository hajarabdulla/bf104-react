import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter(ROUTES);

root.render(
  //   <React.StrictMode>
  <RouterProvider router={router} />
  //   </React.StrictMode>
);
