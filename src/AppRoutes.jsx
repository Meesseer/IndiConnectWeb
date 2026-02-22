import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import MainLayout from "./layout/MainLayout"


function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={
          <MainLayout>
            <Home />
          </MainLayout>
          }/>
    </Routes>
  )
}

export default AppRoutes