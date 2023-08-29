import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import MainLAyout from "./layouts/MainLayout"
import NotFound from "./pages/NotFound";
import CityDetail from "./components/CityDetail";

const router = createBrowserRouter([
    {   
        path: '/',
        element: <MainLAyout />,
        children:   [
            {path: '/', element: <Home />},
            {path: '/Home', element: <Home />},
            {path: '/Cities', element: <Cities />},
            {path: "/*", element: <NotFound />},
            {path: '/CityDetail', element: <CityDetail />}
        ]
    }
])

export default router