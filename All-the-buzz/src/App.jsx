import React from "react";
import { Routes, Route } from 'react-router-dom'
import CreateHive from './pages/CreateHive'
import Home from './pages/Home'

const App = () => {
    return (
      <Routes>
        <Route path='/' element={Home}/>
        <Route path='/hives/create' element={CreateHive}/>
       
      </Routes>
    )
}

export default App;