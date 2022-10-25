import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CourseDetails from "../../pages/Courses/CourseDetails/CourseDetails";
import Courses from "../../pages/Courses/Courses/Courses";
import FAQ from "../../pages/FAQ/FAQ";
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
            },
            {
                path: '/courses/:id',
                loader: ({ params }) => fetch(`https://server-code-with-onion.vercel.app/courses/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            }
        ]
    }
])