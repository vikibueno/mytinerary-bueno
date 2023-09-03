import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

export default function MainLayout() {
  return (
    <div className="container flex flex-col min-h-screen bg-violet-300">
      <NavBar /> 
      <Outlet />
      <Footer />
    </div>
  )
}
