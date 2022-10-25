import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Courses from "../../pages/Courses/Courses/Courses";
import Home from "../../pages/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: () => fetch('https://server-code-with-onion.vercel.app/courses'),
                element: <Courses></Courses>
            }
        ]
    }
])