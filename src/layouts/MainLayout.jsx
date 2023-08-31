import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

export default function MainLayout({ children }) {
  return (
    <div className="container flex flex-col min-h-screen bg-orange-400 bg-cover">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}
