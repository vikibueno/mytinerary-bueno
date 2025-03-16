import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

export default function MainLayout() {
  return (
    <div className="container flex flex-col min-h-screen bg-home bg-cover opacity-90">
      <NavBar /> 
      <Outlet />
      <Footer />
    </div>
  )
}
