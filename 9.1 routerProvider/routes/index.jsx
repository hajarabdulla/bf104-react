import App from "../App";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";

export const ROUTES = [
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
];
