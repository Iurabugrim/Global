import {createBrowserRouter} from "react-router-dom";
import MainLayout from "@/components/layout.tsx";
import Repositories from "@/pages/repositories-page.tsx";
import Followers from "@/pages/followers-page.tsx";
import Subscriptions from "@/pages/subscriptions-page.tsx";
import About from "@/pages/about-page.tsx";

const router = createBrowserRouter([
    {
        element:  <MainLayout/> ,
        children: [
            {
                path: "/repositories",
                element: <Repositories />
            },
            {
                path: "/followers",
                element: <Followers />
            },
            {
                path: "/subscriptions",
                element: <Subscriptions />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    }
]);

export default router;