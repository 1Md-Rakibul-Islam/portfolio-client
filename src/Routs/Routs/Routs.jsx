import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home/Home";
import Project from "../../Pages/Home/Projects/Project";
import Projects from "../../Pages/Home/Projects/Projects";
import ProjectDetails from "../../Pages/ProjectDetails/ProjectDetails";
import ContactUs from "../../Pages/Shared/ContactUs/ContactUs";

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
          return fetch(`https://portfolio-1md-rakibul-islam.vercel.app/project/details/${params._id}`)
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
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contractUs",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "*",
        element: <div><h2 className="text-error text-center text-5xl mt-96">4O4</h2></div>
      },
    ],
  }
]);
