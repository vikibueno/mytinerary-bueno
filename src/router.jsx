import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import MainLAyout from "./layouts/MainLayout"
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
    {   
        path: '/',
        element: <MainLAyout />,
        children:   [
            {path: '/', element: <Home />},
            {path: '/Home', element: <Home />},
            {path: '/Cities', element: <Cities />},
            {path: "/*", element: <NotFound />}
        ]
    }
])

export default router