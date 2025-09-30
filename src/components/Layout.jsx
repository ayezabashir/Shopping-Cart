import { Outlet } from "react-router-dom"
import Headers from "./Headers"
import Cart from "./Cart"

const Layout = () => {
  return (
    <div className="bg-pink-50">
        <main className="w-[1200px] max-w-full m-auto p-5">
            <Headers/>
            <Outlet/>
        </main>
        <Cart/>
    </div>
  )
}

export default Layout