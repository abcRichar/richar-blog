import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/index";
import Home from "../views/home";
import Blogs from "../views/blogs";
import About from "../views/about";
import ArtDetails from "@/views/art-details";
import Pigeonhole from "@/views/pigeonhole";
// import BlogDetails from "@/views/blog-details";
import NotFound from "../views/error/403";
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
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/art-details/:id",
        element: <ArtDetails />,
      },
      {
        path: "/pigeonhole",
        element: <Pigeonhole />,
      },
    ],
  },
]);

export default router;
