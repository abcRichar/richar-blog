import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/index";
import Home from "../views/home";
import Blogs from "../views/blogs";
import About from "../views/about";
import ArtDetails from "@/views/art-details";
import NotFound from "../views/error/404";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
        children: [
          {
            // path: "/blogs",
            index: true,
            element: <Blogs />,
          },
          {
            path: "/blogs/art-details/:id",
            element: <ArtDetails />,
          },
        ],
      },
      {
        path: "/about",
        element: <About />,
      },
      // {
      //   path: "/art-details/:id",
      //   element: <ArtDetails />,
      // },
    ],
  },
]);

export default router;
