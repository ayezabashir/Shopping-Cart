import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Detail from "./pages/Detail"
import Home from "./pages/Home" 

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/:slug" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
