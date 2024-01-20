import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Account from './components/Account'
import SignUp from './components/SignUp'
import CreateHives from "./pages/CreateHives";
import ShowHive from "./pages/ShowHive";
import EditHive from "./pages/EditHive";
import DeleteHive from "./pages/DeleteHIve";


const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<Account />} />
        <Route path='/hives/create' element={<CreateHives />} />
        <Route path='/hives/details/:id' element={<ShowHive />} />
        <Route path='/hives/edit/:id' element={<EditHive />} />
        <Route path='/hives/delete/:id' element={<DeleteHive />} />
      </Routes>
    </div>
  )
}

export default App;