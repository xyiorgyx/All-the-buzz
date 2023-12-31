import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateHives from "./pages/CreateHives";
import ShowHive from "./pages/ShowHive";
import EditHive from "./pages/EditHive";
import DeleteHive from "./pages/DeleteHIve";


const App = () => {
    return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hives/create' element={<CreateHives/>}/>
        <Route path='/hives/details/:id' element={<ShowHive/>}/>
        <Route path='/hives/edit/:id' element={<EditHive/>}/>
        <Route path='/hives/delete/:id' element={<DeleteHive/>}/>
      </Routes>
    )
}

export default App;