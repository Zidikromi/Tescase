import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./Pages/Dashboard"
import SavedPokemon from "./Pages/SavedPokemon"

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/Saved' element={<SavedPokemon/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
