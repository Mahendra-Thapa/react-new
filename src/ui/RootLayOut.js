import { Outlet } from "react-router"
import Header from "./Header"
import Footer from "./Footer"

const RootLayOut = () => {
  return (
    <div>
    <Header />
    <Outlet />
    <Footer />
    
    </div>
  )
}
export default RootLayOut