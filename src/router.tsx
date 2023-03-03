import { createBrowserRouter, Navigate } from "react-router-dom"
import Home from "./page/Home";
import Put from "./page/Put";
import Open from "./page/Open";
import Put_done from "./page/Put_done";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
      },

    {
        path: "/put",
        element: <Put></Put>
    },

    {
      path: "/open",
      element: <Open></Open>
    },

    {
      path: "/put_done",
      element:<Put_done ></Put_done>
    }
])
export default router;