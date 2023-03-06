import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import BlogDetails from "../../Pages/BlogDetails/BlogDetails";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Projects from "../../Pages/Home/Projects/Projects";
import ProjectDetails from "../../Pages/ProjectDetails/ProjectDetails";
import AboutMe from "../../Pages/Shared/AboutMe/AboutMe";
import ContactUs from "../../Pages/Shared/ContactUs/ContactUs";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/project/details/:_id",
        loader: async ({params}) => {
          return fetch(`https://portfolio-rakibul-islam.vercel.app/project/details/${params._id}`)
          // return fetch(`https://portfolio-1md-rakibul-islam.vercel.app/project/details/${params._id}`)
        },
        element: <ProjectDetails></ProjectDetails>
      },
      {
        path: "/portfolio",
        element: <Projects></Projects>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/blogs/details/:_id",
        loader: async ({params}) => {
          return fetch(`https://portfolio-rakibul-islam.vercel.app/blog/details/${params._id}`)
          // return fetch(`https://portfolio-1md-rakibul-islam.vercel.app/blog/details/${params._id}`)
        },
        element: <BlogDetails></BlogDetails>,
      },
      {
        path: "/about",
        element: <AboutMe></AboutMe>,
      },
      {
        path: "/contractUs",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>
      },
    ],
  }
]);
