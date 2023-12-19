import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import Member from "./routes/Member";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Member />,
  },
  {
    path: "/member",
    element: <Member />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
