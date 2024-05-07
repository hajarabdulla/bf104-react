import AdminRoot from "../pages/Admin/AdminRoot";
import TeamMembers from "../pages/Admin/TeamMembers";
import Products from "../pages/Admin/Products";
import Contact from "../pages/Client/Contact";
import Home from "../pages/Client/Home";
import Login from "../pages/Client/Login";
import Root from "../pages/Client/Root";
import Dashboard from "../pages/Admin/Dashboard";

export const ROUTES = [
  {
    path: "",
    element: <Root />,
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
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "/admin/team-members",
        element: <TeamMembers />,
      },
      {
        path: "/admin/products",
        element: <Products />,
      },
    ],
  },
];
