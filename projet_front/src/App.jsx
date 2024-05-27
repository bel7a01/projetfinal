import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import './App.css'
import Admin from "./pages/Admin"
import Info from "./components/admin/Info"
import Reservation from './pages/Reservation'
import { ToastContainer, toast } from "react-toastify"
import Res from "./pages/Res"
import Tableau from "./components/admin/Tableau"

function App() {

  return (

    <>
      <BrowserRouter><Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/res" element={<Res />} />
      </Routes></BrowserRouter>

    </>
  )
}

export default App
