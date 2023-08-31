import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cities from "./pages/Cities";
import MainLAyout from "./layouts/MainLayout"
import NotFound from "./pages/NotFound";
import CityDetail from "./components/CityDetail";
import FormSignUp from "./pages/FormSignUp";
import FormSignIn from "./pages/FormSignIn";


const router = createBrowserRouter([
    {   
        path: '/',
        element: <MainLAyout />,
        children:   [
            {path: '/', element: <Home />},
            {path: '/Home', element: <Home />},
            {path: '/Cities', element: <Cities />},
            {path: "/*", element: <NotFound />},
            {path: '/CityDetail', element: <CityDetail />},
            {path: '/auth/signup', element: <FormSignUp />},
            {path: '/auth/signin', element: <FormSignIn />}
        ]
    }
])

export default router