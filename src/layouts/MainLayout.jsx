import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

export default function MainLayout({ children }) {
  return (
    <div className="w-full min-h-screen flex flex-col justify-between items-center">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}
