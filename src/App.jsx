import { Route, Routes } from "react-router-dom"
import Slidebar from "./components/Slidebar"
import HomePage from "./pages/HomePage"
import FavoritesPage from "./pages/FavoritesPage"


function App() {
  return (
    <div className="flex" >
      <Slidebar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
      </Routes>
    </div>
  )
}

export default App