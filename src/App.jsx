import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import SavedPokemon from "./Pages/SavedPokemon";
import { PokemonProvider } from "./context/PokemonContext";
import Navbar from "./components/Navbar";


function App() {

  return (
    <PokemonProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/Saved' element={<SavedPokemon />} />
        </Routes>
      </Router>
    </PokemonProvider>
  );
}

export default App;
