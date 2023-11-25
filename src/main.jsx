import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import Dashboard from "./routes/Dashboard";
import Dignosis from "./routes/Dignosis";
import Main from "./routes/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dignosis",
    element: <Dignosis />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
